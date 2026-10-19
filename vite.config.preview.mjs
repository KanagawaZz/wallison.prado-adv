import { defineConfig } from 'vite';

const isPreview = process.env.BASE44_PREVIEW_MODE === '1';
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: isPreview && sandboxDomain ? ['.' + sandboxDomain] : [],
  },
});
