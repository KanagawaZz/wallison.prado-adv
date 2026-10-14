import { Icon } from './Icon.js';

export function About({ lawyer, siteConfig }) {
  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-copy-column" data-reveal="fade-up">
            <div class="eyebrow-chip">
              ${Icon({ name: 'shield', size: 14 })}
              <span>Perfil Profissional</span>
            </div>

            <h2 class="about-title">
              Advocacia dedicada à defesa dos servidores públicos em todo o Mato Grosso.
            </h2>

            <div class="about-paragraphs">
              <p class="about-bio-desktop">
                O exercício da função pública demanda dedicação diária à sociedade. No entanto, é frequente que o servidor enfrente decisões administrativas unilaterais, atrasos injustificados na concessão de progressões, supressão de adicionais ou notificações de processos disciplinares (PADs).
              </p>
              <p>
                O <strong>Dr. Wallison Prado</strong> atua com foco combativo na proteção das prerrogativas funcionais de quem serve ao público: unindo rigor técnico na interpretação do estatuto dos servidores públicos estaduais e das legislações municipais ao compromisso de transparência, comunicação acessível e atendimento 100% digital em todo o estado de MT.
              </p>
            </div>

            <div class="about-values-grid">
              ${lawyer.values
                .map(
                  (val) => `
                    <div class="value-item">
                      <div class="value-bullet">
                        ${Icon({ name: 'check', size: 13 })}
                      </div>
                      <div class="value-texts">
                        <strong>${val.title}</strong>
                        <p>${val.desc}</p>
                      </div>
                    </div>
                  `
                )
                .join('')}
            </div>

            <div class="about-actions-row">
              <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="button button-primary about-btn-cta">
                ${Icon({ name: 'chat', size: 18 })}
                <span>Falar com o Dr. Wallison</span>
              </a>
              <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="button button-instagram" title="Acompanhar o trabalho no Instagram">
                ${Icon({ name: 'instagram', size: 18 })}
                <span>Instagram ${siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
