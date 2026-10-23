export function applySeo(siteConfig, lawyer) {
  const fullTitle = siteConfig.title;
  const description = siteConfig.description;

  document.title = fullTitle;

  const setMeta = (selector, attribute, value) => {
    let el = document.querySelector(selector);
    if (!el && value) {
      el = document.createElement('meta');
      const [attrName, attrVal] = selector.replace(/[\[\]']/g, '').split('=');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    if (el && value) {
      el.setAttribute(attribute, value);
    }
  };

  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', fullTitle);
  setMeta('meta[property="og:description"]', 'content', 'Orientação e defesa de servidores estaduais, municipais e federais em PAD, progressões, adicionais e licença-prêmio em todo o Mato Grosso.');
  setMeta('meta[property="og:site_name"]', 'content', siteConfig.name);
  setMeta('meta[property="og:type"]', 'content', 'website');
  setMeta('meta[property="og:locale"]', 'content', 'pt_BR');

  if (siteConfig.baseUrl) {
    setMeta('meta[property="og:url"]', 'content', siteConfig.baseUrl);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', siteConfig.baseUrl);
  }

  // Injeção de Dados Estruturados Schema.org (JSON-LD) para busca institucional
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.whatsappNumber,
    email: siteConfig.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mato Grosso',
    },
    serviceType: 'Direito Administrativo para Servidores Públicos',
    founder: {
      '@type': 'Person',
      name: lawyer.name,
      jobTitle: lawyer.role,
    },
  };

  let jsonLdScript = document.querySelector('#schema-jsonld');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'schema-jsonld';
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }
  jsonLdScript.textContent = JSON.stringify(structuredData);
}
