import { Icon } from './Icon.js';

export function PracticeAreas({ practiceAreas, siteConfig }) {
  return `
    <section id="atuacao" class="section-block practice-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <span class="eyebrow-chip" data-reveal="label">
            Áreas de Atuação Especializada
          </span>
          <h2 class="section-title" data-reveal="title">
            Demandas frequentes de servidores públicos em Mato Grosso
          </h2>
          <p class="section-subheading" data-reveal="paragraph">
            Atuação técnica para combater arbitrariedades, destravar direitos de carreira e recuperar valores retidos nas esferas <strong>Estadual, Municipal e Federal</strong>.
          </p>
        </div>

        <div class="practice-cards-grid">
          ${practiceAreas
            .map((area, index) => {
              const numberStr = String(index + 1).padStart(2, '0');
              const colPos = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right';
              const rowIndex = Math.floor(index / 3);

              return `
                <article 
                  class="practice-card" 
                  data-reveal-card="${colPos}" 
                  style="--card-row-delay: ${rowIndex * 0.12 + (index % 3) * 0.08}s;"
                >
                  <div class="practice-card-header">
                    <span class="practice-card-number">${numberStr}</span>
                    <span class="practice-card-label">${area.tag}</span>
                  </div>

                  <div class="practice-card-body">
                    <h3 class="practice-card-title">${area.title}</h3>
                    <p class="practice-card-subtitle">${area.subtitle}</p>
                    <p class="practice-card-description">${area.description}</p>
                  </div>

                  <div class="practice-card-footer">
                    <a 
                      href="https://wa.me/556599405845?text=${encodeURIComponent(`Olá, Dr. Wallison. Sou servidor público em MT e gostaria de uma orientação sobre: ${area.title}.`)}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="practice-card-link"
                      title="Consultar sobre ${area.title}"
                    >
                      <span>Consultar sobre este tema</span>
                      ${Icon({ name: 'arrowRight', size: 14 })}
                    </a>
                  </div>
                </article>
              `;
            })
            .join('')}
        </div>
      </div>
    </section>
  `;
}
