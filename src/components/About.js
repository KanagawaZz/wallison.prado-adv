import { Icon } from './Icon.js';

export function About({ lawyer, siteConfig }) {
  const valueIcons = ['scale', 'shield', 'clock', 'chat'];

  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <!-- Linha Superior: Themis e Perfil lado a lado perfeitamente balanceados -->
        <div class="about-top-grid">
          <!-- Coluna Visual: Imagem Themis com Moldura Dupla Dourada Deslocada 16px -->
          <div class="about-visual-column" data-reveal="from-left">
            <div class="about-frame-stage">
              <!-- Moldura Dourada Traseira Deslocada 16px -->
              <div class="about-gold-offset-frame" aria-hidden="true">
                <svg class="about-gold-offset-svg" width="100%" height="100%" style="position: absolute; inset: 0; overflow: visible;" aria-hidden="true">
                  <rect class="about-light-rect" x="0" y="0" width="100%" height="100%" rx="12" pathLength="1000" fill="none" stroke="#B88B2E" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
              
              <!-- Moldura Principal com Estátua da Themis -->
              <div class="about-photo-wrapper">
                <img 
                  src="/images/themis.png" 
                  alt="Escultura da Deusa da Justiça (Themis) com balança e espada"
                  class="about-portrait-img"
                  width="440"
                  height="480"
                  loading="lazy"
                />
              </div>

              <!-- Selo Institucional sobre a imagem -->
              <div class="about-photo-badge">
                <span class="badge-dot" aria-hidden="true"></span>
                <strong>Símbolo da Justiça</strong>
                <small>Precisão Técnica & Ética</small>
              </div>
            </div>
          </div>

          <!-- Coluna Textual: Perfil Profissional -->
          <div class="about-copy-column" data-reveal="from-right">
            <div class="about-header-meta">
              <span class="eyebrow-chip" data-reveal="label">
                Perfil Profissional
              </span>
              <h2 class="about-title" data-reveal="title">
                Advocacia dedicada à defesa dos servidores públicos em todo o Mato Grosso.
              </h2>
            </div>

            <div class="about-paragraphs" data-reveal="paragraph">
              <p>
                O exercício da função pública demanda dedicação diária à sociedade. No entanto, é frequente que o servidor enfrente decisões administrativas unilaterais, atrasos injustificados na concessão de progressões, supressão de adicionais ou notificações de processos disciplinares (PADs).
              </p>
              <p>
                Atuo com foco técnico e vigilante na proteção das prerrogativas funcionais de quem serve ao público: unindo interpretação criteriosa do estatuto dos servidores estaduais e municipais ao compromisso de transparência, comunicação direta e atendimento ágil em todo o estado de Mato Grosso.
              </p>
            </div>

            <div class="about-actions-row">
              <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="button button-primary about-btn-cta">
                ${Icon({ name: 'chat', size: 18 })}
                <span>Falar com o Dr. Wallison</span>
              </a>
              <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="button button-outline about-btn-instagram" title="Acompanhar o trabalho no Instagram">
                ${Icon({ name: 'instagram', size: 18 })}
                <span>Instagram ${siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Linha Inferior: 4 Cards com Molduras Horizontais preenchendo toda a largura -->
        <div class="about-pillars-container" data-reveal="fade-up">
          <div class="about-pillars-header">
            <span class="about-pillars-subtitle">Pilares da Atuação Profissional</span>
          </div>

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
