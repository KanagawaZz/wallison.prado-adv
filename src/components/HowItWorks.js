import { Icon } from './Icon.js';

export function HowItWorks({ steps, siteConfig }) {
  return `
    <section id="como-funciona" class="section-block steps-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'shield', size: 14 })}
            <span>Como funciona</span>
          </div>
          <h2>
            <span class="desktop-only">Como funciona o atendimento para servidores de MT</span>
            <span class="mobile-only">3 passos para o seu atendimento</span>
          </h2>
          <p class="section-subheading desktop-only">
            Procedimento direto pelo celular, com total comodidade e sem necessidade de deslocamento, atendendo servidores de Cuiabá e de todo o interior de Mato Grosso.
          </p>
        </div>

        <div class="steps-container">
          <div class="steps-progress-line desktop-only" aria-hidden="true"></div>
          
          <div class="steps-grid">
            ${steps
              .map(
                (step, index) => `
                  <article class="step-card" data-reveal="fade-up" style="--step-delay: ${index * 0.1}s">
                    <div class="step-card-header desktop-only">
                      <div class="step-badge">${step.number}</div>
                      <span class="step-highlight-pill">${step.highlight}</span>
                    </div>

                    <div class="step-content">
                      <h3 class="step-title">
                        <span class="desktop-only">${step.title}</span>
                        <span class="mobile-only">${index === 0 ? '1. Você me chama no WhatsApp' : index === 1 ? '2. Conversamos sobre o seu caso' : '3. Explico os caminhos possíveis'}</span>
                      </h3>
                      <p class="step-subtitle desktop-only">${step.subtitle}</p>
                      <p class="step-description desktop-only">${step.description}</p>
                    </div>

                    <div class="step-footer-indicator desktop-only">
                      <span class="step-mini-dot"></span>
                      <span>Etapa ${index + 1} de 3</span>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="steps-action-bar desktop-only" data-reveal="fade-up">
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
