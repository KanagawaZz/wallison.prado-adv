import { Icon } from './Icon.js';

export function InstitutionalPillars({ siteConfig }) {
  const pillars = [
    {
      icon: 'fileCheck',
      title: 'Domínio da Legislação Estadual e Municipal',
      desc: 'Conhecimento técnico aprofundado do estatuto dos servidores públicos de MT e dos planos de carreira municipais, identificando ilegalidades e direitos represados.',
    },
    {
      icon: 'shield',
      title: 'Segurança Jurídica e Proteção da Carreira',
      desc: 'Atuação orientada a resguardar a estabilidade e a tranquilidade da sua trajetória funcional, combatendo perseguições e atos administrativos arbitrários.',
    },
    {
      icon: 'clock',
      title: 'Agilidade Contra a Prescrição de 5 Anos',
      desc: 'A cada mês de inércia, uma parcela de valores retroativos prescreve definitivamente perante a Fazenda Pública. Atuamos com celeridade para evitar perdas.',
    },
    {
      icon: 'chat',
      title: 'Comunicação Direta no WhatsApp Sem Juridiquês',
      desc: 'Esclarecimentos claros, sem termos herméticos ou enrolação. Você fala diretamente com o Dr. Wallison e acompanha cada movimentação com transparência.',
    },
  ];

  return `
    <section id="institucional" class="section-block institutional-section">
      <div class="container">
        <div class="institutional-grid">
          <div class="institutional-copy" data-reveal="fade-up">
            <div class="eyebrow-chip">
              ${Icon({ name: 'shield', size: 14 })}
              <span>Diferenciais de Atuação</span>
            </div>

            <h2 class="institutional-title">
              Defesa intransigente da sua carreira, estabilidade e remuneração em MT.
            </h2>

            <p class="institutional-lead">
              A atuação perante a Administração Pública exige técnica, coragem jurídica e profundo conhecimento das normas locais. Conheça as bases que garantem a segurança do seu atendimento:
            </p>

            <div class="institutional-pillars-list">
              ${pillars
                .map(
                  (item) => `
                    <div class="pillar-row">
                      <div class="pillar-icon-box">
                        ${Icon({ name: item.icon, size: 18 })}
                      </div>
                      <div class="pillar-texts">
                        <strong>${item.title}</strong>
                        <p>${item.desc}</p>
                      </div>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>

          <div class="institutional-visual" data-reveal="fade-up">
            <div class="themis-frame-3d" data-tilt-3d data-tilt-max="6">
              <img 
                src="/images/themis.webp" 
                alt="Escultura da Deusa da Justiça (Têmis) com balança e espada" 
                class="themis-image"
                width="410"
                height="466"
                loading="lazy"
                decoding="async"
              />
              <div class="themis-glow" aria-hidden="true"></div>
              <div class="themis-specular-border" aria-hidden="true"></div>
            </div>
            <div class="themis-badge-pill">
              <div class="themis-badge-icon">
                ${Icon({ name: 'scale', size: 18 })}
              </div>
              <div class="themis-badge-text">
                <strong>Rigor Técnico & Ética</strong>
                <small>Balança e espada em defesa do servidor</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
