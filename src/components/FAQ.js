import { Icon } from './Icon.js';

export function FAQ({ faq, siteConfig }) {
  return `
    <section id="duvidas" class="section-block faq-section desktop-only">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'alertCircle', size: 14 })}
            <span>DÚVIDAS</span>
          </div>
          <h2>
            Perguntas frequentes
          </h2>
        </div>

        <div class="faq-accordion-container" data-reveal="fade-up">
          ${faq
            .map(
              (item, index) => `
                <details class="faq-item" ${index === 0 ? 'open' : ''}>
                  <summary class="faq-summary">
                    <span class="faq-question-text">${item.question}</span>
                    <span class="faq-chevron-icon" aria-hidden="true">
                      ${Icon({ name: 'chevronDown', size: 16 })}
                    </span>
                  </summary>
                  <div class="faq-answer-wrapper">
                    <div class="faq-answer-inner">
                      <p>${item.answer}</p>
                    </div>
                  </div>
                </details>
              `
            )
            .join('')}
        </div>

        <div class="faq-support-box" data-reveal="fade-up">
          <div class="support-text">
            <strong>Conteúdo sobre direitos do servidor</strong>
            <p>No Instagram, explico mudanças na legislação e decisões que afetam servidores de Mato Grosso.</p>
          </div>
          <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="button button-instagram">
            ${Icon({ name: 'instagram', size: 18 })}
            <span>Acompanhar no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
