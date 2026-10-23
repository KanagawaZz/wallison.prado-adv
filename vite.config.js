import { defineConfig, loadEnv } from 'vite';

// Gera robots.txt e sitemap.xml no build a partir de VITE_SITE_URL (.env),
// para que o domínio seja definido em um único lugar.
function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');

  if (!siteUrl) {
    throw new Error('Defina VITE_SITE_URL no arquivo .env');
  }

  return {
    plugins: [seoFiles(siteUrl)],
  };
});
