import { Icon } from './Icon.js';

/**
 * Faixa de Nome Institucional (Ajuste 2 do Usuário)
 * "WALLISON PRADO" grande, em serifa e caixa alta, letter-spacing 0.3em,
 * com "ADVOCACIA • OAB/MT 31.726" embaixo e a linha dourada de 60px.
 * Entrada no padrão 3.3.
 */
export function NameBanner({ lawyer, siteConfig }) {
  return `
    <section class="name-banner-section" aria-label="Assinatura Institucional">
      <div class="container name-banner-container" data-reveal="fade-up">
        <div class="name-banner-content">
          <span class="name-banner-subtag" data-reveal="label">
            Direito Administrativo • Servidores Públicos
          </span>

          <h2 class="name-banner-title" data-reveal="title">
            WALLISON PRADO
          </h2>

          <p class="name-banner-badge" data-reveal="paragraph">
            ADVOCACIA • OAB/MT 31.726
          </p>

          <div class="name-banner-divider" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  `;
}
