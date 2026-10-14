import { Icon } from './Icon.js';

export function PracticeAreas({ practiceAreas, siteConfig }) {
  return `
    <section id="atuacao" class="section-block practice-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'briefcase', size: 14 })}
            <span>Áreas de Atuação Especializada</span>
          </div>
          <h2>Demandas frequentes de servidores públicos em Mato Grosso</h2>
          <p class="section-subheading">
            Atuação técnica para combater arbitrariedades, destravar direitos de carreira e recuperar valores retidos nas esferas <strong>Estadual (LC 04/90), Municipal e Federal</strong>.
          </p>
        </div>

        <div class="practice-grid">
          ${practiceAreas
            .map((area, index) => {
              const numberStr = String(index + 1).padStart(2, '0');

              return `
                <article class="practice-card" data-reveal="fade-up" style="--card-delay: ${index * 0.08}s">
                  <div class="card-top">
                    <div class="card-icon-container">
                      ${Icon({ name: area.icon, size: 24 })}
                    </div>
                    <div class="card-meta">
                      <span class="card-number">${numberStr}</span>
                      <span class="card-category-tag">${area.tag}</span>
                    </div>
                  </div>

                  <div class="card-body">
                    <h3 class="card-title">${area.title}</h3>
                    <p class="card-subtitle">${area.subtitle}</p>
                    <p class="card-description">${area.description}</p>

                    <details class="card-details-collapsible">
                      <summary class="card-details-trigger" aria-label="Ver situações práticas e esferas de atendimento">
                        <span class="trigger-text">Ver situações práticas & esferas</span>
                        <span class="trigger-icon" aria-hidden="true">${Icon({ name: 'chevronDown', size: 14 })}</span>
                      </summary>
                      
                      <div class="card-collapsible-inner">
                        <div class="card-examples-box">
                          <span class="examples-label">Situações recorrentes:</span>
                          <ul class="examples-list">
                            ${area.examples
                              .map(
                                (ex) => `
                                  <li>
                                    <span class="check-bullet">${Icon({ name: 'check', size: 12 })}</span>
                                    <span>${ex}</span>
                                  </li>
                                `
                              )
                              .join('')}
                          </ul>
                        </div>

                        <div class="card-footer">
                          <div class="card-spheres-wrap">
                            <span class="spheres-label">Esferas:</span>
                            <div class="spheres-chips">
                              ${area.spheres
                                .map((sphere) => `<span class="sphere-chip">${sphere}</span>`)
                                .join('')}
                            </div>
                          </div>

                          <div class="card-nature-badge">
                            <span class="nature-dot"></span>
                            <span>Atuação Administrativa & Judicial</span>
                          </div>
                        </div>
                      </div>
                    </details>

                    <div class="card-quick-action">
                      <a 
                        href="https://wa.me/556599405845?text=${encodeURIComponent(`Olá, Dr. Wallison. Sou servidor público em MT e preciso de orientação sobre: ${area.title}.`)}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="card-action-link"
                        title="Tirar dúvida sobre ${area.title}"
                      >
                        <span>Consultar sobre este tema</span>
                        ${Icon({ name: 'arrowRight', size: 14 })}
                      </a>
                    </div>
                  </div>
                </article>
              `;
            })
            .join('')}
        </div>

        <div class="practice-cta-strip" data-reveal="fade-up">
          <div class="strip-text">
            <strong>Identificou sua situação ou tem dúvidas sobre prazos e valores?</strong>
            <p>Débitos da Fazenda Pública prescrevem mês a mês (limite de 5 anos). Converse com o Dr. Wallison para uma triagem preliminar da sua situação funcional.</p>
          </div>
          <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="button button-primary">
            ${Icon({ name: 'chat', size: 18 })}
            <span>Tirar dúvida com o Dr. Wallison</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
