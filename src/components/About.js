import { Icon } from './Icon.js';

export function About({ lawyer, siteConfig }) {
  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <div class="about-grid">
          <!-- Coluna Visual: Foto com Moldura Dupla Dourada Deslocada 16px (Regra 3.4) -->
          <div class="about-visual-column" data-reveal="from-left">
            <div class="about-frame-stage">
              <!-- Moldura Dourada Traseira Deslocada 16px -->
              <div class="about-gold-offset-frame" aria-hidden="true"></div>
              
              <!-- Moldura Principal com Efeito de Cortina (clip-path) -->
              <div class="about-photo-wrapper">
                <img 
                  src="/images/wallison-prado.jpg" 
                  alt="Dr. Wallison Prado - Advogado Especialista em Servidores Públicos em MT"
                  class="about-portrait-img"
                  width="440"
                  height="480"
                  loading="lazy"
                />
              </div>

              <!-- Selo OAB Institucional Discreto -->
              <div class="about-photo-badge">
                <span class="badge-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <small>OAB/MT 31.726</small>
              </div>
            </div>
          </div>

          <!-- Coluna Textual: Perfil Profissional e Valores -->
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
                Atuo com foco combativo e técnico na proteção das prerrogativas funcionais de quem serve ao público: unindo rigor na interpretação do estatuto dos servidores estaduais e municipais ao compromisso de transparência, comunicação direta e atendimento 100% digital em todo o estado de Mato Grosso.
              </p>
            </div>

            <div class="about-values-grid">
              ${lawyer.values
                .map(
                  (val) => `
                    <div class="about-value-item">
                      <div class="about-value-icon">
                        ${Icon({ name: 'check', size: 14 })}
                      </div>
                      <div class="about-value-texts">
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
              <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="button button-outline about-btn-instagram" title="Acompanhar o trabalho no Instagram">
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
