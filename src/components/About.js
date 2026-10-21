import { Icon } from './Icon.js';

export function About({ siteConfig }) {
  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <!-- Linha Superior: Themis e Perfil -->
        <div class="about-top-grid">
          <!-- Coluna Visual -->
          <div class="about-visual-column" data-reveal="from-left">
            <div class="about-frame-stage">
              <!-- Moldura Dourada Traseira Deslocada 16px (Desktop) -->
              <div class="about-gold-offset-frame desktop-only" aria-hidden="true">
                <svg class="about-gold-offset-svg" width="100%" height="100%" style="position: absolute; inset: 0; overflow: visible;" aria-hidden="true">
                  <rect class="about-light-rect" x="0" y="0" width="100%" height="100%" rx="12" pathLength="1000" fill="none" stroke="#B88B2E" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
              
              <!-- Moldura Principal -->
              <div class="about-photo-wrapper">
                <img
                  src="/images/wallison-prado.jpg"
                  alt="Dr. Wallison Prado, advogado, em seu escritório"
                  class="about-portrait-img desktop-only"
                  width="440"
                  height="480"
                  loading="lazy"
                />
                <img 
                  src="/images/wallison-prado.jpg" 
                  alt="Dr. Wallison Prado, advogado"
                  class="about-portrait-img mobile-only about-mobile-avatar"
                  width="140"
                  height="160"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Coluna Textual: Perfil Profissional -->
          <div class="about-copy-column" data-reveal="from-right">
            <div class="about-header-meta">
              <span class="eyebrow-chip" data-reveal="label">SOBRE</span>
              <h2 class="about-title" data-reveal="title">
                Quem serve ao público também precisa de quem o defenda.
              </h2>
            </div>

            <div class="about-paragraphs" data-reveal="paragraph">
              <p>
                Sou o Wallison Prado e atuo na defesa de servidores públicos em Mato Grosso, em situações que vão de um processo disciplinar inesperado a uma progressão que nunca saiu do papel.
              </p>
              <p>
                Sei que, para o servidor, buscar um direito costuma vir acompanhado de receio: da chefia, dos colegas, de complicar a carreira. Por isso, meu trabalho começa explicando com calma o que a lei prevê para o seu caso, quais caminhos existem e os riscos de cada um.
              </p>
            </div>

            <div class="about-actions-row">
              <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="button button-primary about-btn-cta">
                ${Icon({ name: 'chat', size: 18 })}
                <span>Falar com o Dr. Wallison</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
