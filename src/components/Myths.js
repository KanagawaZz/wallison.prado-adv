import { Icon } from './Icon.js';

export function Myths({ myths, siteConfig }) {
  const topics = [
    'Proteção Contra Retaliações',
    'Prescrição Quinquenal (5 Anos)',
    'Contratados Temporários',
  ];

  return `
    <section id="mitos" class="section-block myths-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'shield', size: 14 })}
            <span>Mitos & Verdades do Funcionalismo</span>
          </div>
          <h2>O que você precisa saber antes de tomar qualquer decisão</h2>
          <p class="section-subheading">
            Esclareça receios comuns sobre perseguições, prazos da Fazenda Pública e legitimidade dos seus direitos em Mato Grosso.
          </p>
        </div>

        <div class="myths-depth-grid">
          ${myths
            .map((item, idx) => {
              const topicTitle = topics[idx] || 'Segurança Funcional';
              const numberLabel = String(idx + 1).padStart(2, '0');

              return `
                <div class="myth-depth-card" data-reveal="fade-up" style="--myth-delay: ${idx * 0.1}s">
                  <div class="myth-card-header">
                    <div class="myth-topic-pill">
                      <span class="topic-num">${numberLabel}</span>
                      <span class="topic-name">${topicTitle}</span>
                    </div>
                    <span class="myth-category-label">${item.badge}</span>
                  </div>

                  <div class="myth-split-body">
                    <div class="myth-pane myth-pane-belief">
                      <div class="pane-meta">
                        <span class="pane-tag belief-tag">Dúvida Comum</span>
                      </div>
                      <blockquote class="belief-quote">
                        ${item.myth}
                      </blockquote>
                      <span class="belief-subnote">Pode levar à inércia e perda de prazos legais</span>
                    </div>

                    <div class="myth-architectural-divider" aria-hidden="true">
                      <div class="divider-line"></div>
                      <div class="divider-emblem">
                        ${Icon({ name: 'scale', size: 15 })}
                      </div>
                      <div class="divider-line"></div>
                    </div>

                    <div class="myth-pane myth-pane-reality">
                      <div class="pane-meta">
                        <span class="pane-tag reality-tag">Critério Jurídico</span>
                      </div>
                      <h4 class="reality-headline">${item.reality}</h4>
                      <p class="reality-text">${item.explanation}</p>
                    </div>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>

        <div class="myths-depth-callout" data-reveal="fade-up">
          <div class="callout-inner">
            <div class="callout-icon-box">
              ${Icon({ name: 'shield', size: 24 })}
            </div>
            <div class="callout-text">
              <strong>Análise individualizada e pautada no Código de Ética da OAB</strong>
              <p>Cada situação funcional possui particularidades normativas e documentais. O conteúdo aqui exposto tem finalidade estritamente informativa e não constitui promessa ou garantia de resultado.</p>
            </div>
            <div class="callout-action-link">
              <a href="#institucional" class="link-subtle">
                <span>Ver diferenciais de atuação</span>
                ${Icon({ name: 'arrowRight', size: 14 })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
