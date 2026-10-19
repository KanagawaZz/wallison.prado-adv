import { Icon } from './Icon.js';

export function HowItWorks({ steps, siteConfig }) {
  return `
    <section id="como-funciona" class="section-block steps-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'shield', size: 14 })}
            <span>Atendimento 100% Digital e Seguro</span>
          </div>
          <h2>Como funciona o atendimento para servidores de MT</h2>
          <p class="section-subheading">
            Procedimento direto pelo celular, com total comodidade e sem necessidade de deslocamento, atendendo servidores de Cuiabá e de todo o interior de Mato Grosso.
          </p>
        </div>

        <div class="steps-container" data-reveal="fade-up">
          <div class="steps-progress-line" data-reveal="fade-up" aria-hidden="true"></div>
          
          <div class="steps-grid">
            ${steps
              .map(
                (step, index) => `
                  <article class="step-card" data-reveal="fade-up" style="--step-delay: ${index * 0.1}s">
                    <div class="step-card-header">
                      <div class="step-badge">${step.number}</div>
                      <span class="step-highlight-pill">${step.highlight}</span>
                    </div>

                    <div class="step-content">
                      <h3 class="step-title">${step.title}</h3>
                      <p class="step-subtitle">${step.subtitle}</p>
                      <p class="step-description">${step.description}</p>
                    </div>

                    <div class="step-footer-indicator">
                      <span class="step-mini-dot"></span>
                      <span>Etapa ${index + 1} de 3</span>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="steps-action-bar" data-reveal="fade-up">
          <div class="action-info">
            <span class="badge-live-reply">${Icon({ name: 'shield', size: 14 })} Processo 100% Digital e Seguro</span>
            <strong>Atendimento ágil, documentação simplificada e suporte direto com o advogado.</strong>
          </div>
          <a href="#sobre" class="button button-outline">
            <span>Conhecer o Advogado</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
