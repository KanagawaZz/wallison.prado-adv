import { Icon } from './Icon.js';

export function About({ lawyer, siteConfig }) {
  const valueIcons = ['scale', 'shield', 'clock', 'chat'];

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
                  src="/images/themis.png" 
                  alt="Escultura da Deusa da Justiça (Themis) com balança e espada"
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
              <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="button button-outline about-btn-instagram" title="Acompanhar no Instagram">
                ${Icon({ name: 'instagram', size: 18 })}
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Linha Inferior: 4 Cards de Pilares -->
        <div class="about-pillars-container desktop-only" data-reveal="fade-up">
          <div class="about-horizontal-cards-grid">
            ${lawyer.values
              .map(
                (val, idx) => `
                  <article class="about-framed-card" style="--pillar-delay: ${idx * 0.1}s">
                    <div class="card-top-row">
                      <div class="card-icon-emblem">
                        ${Icon({ name: valueIcons[idx] || 'check', size: 18 })}
                      </div>
                      <span class="card-pillar-number">0${idx + 1}</span>
                    </div>
                    <h3 class="card-framed-title">${val.title}</h3>
                    <p class="card-framed-desc">${val.desc}</p>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
