import { Icon } from './Icon.js';

export function HowItWorks({ steps }) {
  return `
    <section id="como-funciona" class="section-block steps-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'shield', size: 14 })}
            <span>COMO FUNCIONA</span>
          </div>
          <h2>
            Do primeiro contato à assinatura, tudo pelo celular
          </h2>
        </div>

        <div class="steps-container">
          <div class="steps-progress-line desktop-only" aria-hidden="true"></div>
          
          <div class="steps-grid">
            ${steps
              .map(
                (step, index) => `
                  <article class="step-card" data-reveal="fade-up" style="--step-delay: ${index * 0.1}s">
                    <div class="step-card-header">
                      <div class="step-badge">${step.number}</div>
                    </div>

                    <div class="step-content">
                      <h3 class="step-title">
                        ${step.title}
                      </h3>
                      <p class="step-description">${step.description}</p>
                    </div>
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
