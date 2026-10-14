import { Icon } from './Icon.js';

export function Header({ navigation, siteConfig, lawyer }) {
  return `
    <header class="site-header" id="top">
      <div class="top-announcement-bar">
        <div class="container announcement-inner">
          <div class="announcement-item">
            <span class="live-dot" aria-hidden="true"></span>
            <span>Atendimento 100% online para servidores públicos em todo o Mato Grosso</span>
          </div>
        </div>
      </div>

      <div class="container header-inner">
        <a href="#inicio" class="brand" aria-label="Ir para o início da página">
          <div class="brand-monogram">
            <span>WP</span>
          </div>
          <div class="brand-text">
            <strong class="brand-name">${siteConfig.name}</strong>
            <span class="brand-oab">Direito Administrativo</span>
          </div>
        </a>

        <div class="nav-container">
          <nav class="main-nav" aria-label="Navegação principal">
            ${navigation
              .map(
                (item) => `
                  <a href="${item.href}" class="nav-link">${item.label}</a>
                `
              )
              .join('')}
          </nav>
        </div>

        <div class="header-action">
          <a class="button button-header" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
            <span>Falar com o Advogado</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
