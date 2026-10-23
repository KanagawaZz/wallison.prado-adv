export function WhatsAppButton({ siteConfig }) {
  return `
    <aside class="floating-whatsapp-container" id="floatingWhatsapp" aria-label="Canal de atendimento via WhatsApp">
      <a 
        class="floating-whatsapp-btn" 
        href="${siteConfig.whatsappLink}" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Falar com o Dr. Wallison Prado no WhatsApp"
      >
        <div class="whatsapp-gold-pulse" aria-hidden="true"></div>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
          <path d="M20.52 3.48A11.89 11.89 0 0012.08 0C5.5 0 .1 5.4.1 12.07c0 2.13.56 4.2 1.62 6.03L0 24l6.1-1.6a11.96 11.96 0 005.98 1.92h.01c6.59 0 11.91-5.4 11.91-12.05.02-3.23-1.27-6.28-3.48-8.79zm-8.44 18.4h-.01a9.94 9.94 0 01-5.08-1.38l-.36-.22-3.62.95 1-3.52-.24-.37A9.84 9.84 0 112.11 12.1c0 5.42 4.41 9.82 9.84 9.82h.01zm5.37-7.36c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.14-.16.2-.33.22-.61.07-.29-.15-1.23-.45-2.35-1.45-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.49.15-.16.2-.27.3-.46.1-.19.05-.35-.02-.49-.07-.15-.64-1.54-.88-2.11-.23-.56-.46-.49-.64-.49h-.54c-.18 0-.49.07-.74.35-.25.29-1 1-1 2.43s1.03 2.81 1.17 3c.14.2 2.02 3.08 4.89 4.33.68.29 1.22.46 1.64.59.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.08-.12-.29-.2-.61-.35z"/>
        </svg>
      </a>
    </aside>
  `;
}
