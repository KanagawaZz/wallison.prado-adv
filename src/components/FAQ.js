import { Icon } from './Icon.js';

export function FAQ({ faq, siteConfig }) {
  return `
    <section id="duvidas" class="section-block faq-section">
      <div class="container">
        <div class="section-header" data-reveal="fade-up">
          <div class="eyebrow-chip">
            ${Icon({ name: 'alertCircle', size: 14 })}
            <span>Dúvidas Frequentes</span>
          </div>
          <h2>Perguntas frequentes sobre o atendimento</h2>
          <p class="section-subheading">
            Esclarecimentos objetivos sobre o procedimento de atendimento online, documentação e prazos em Direito Administrativo.
          </p>
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
            <strong>Conteúdo jurídico contínuo para servidores públicos</strong>
            <p>Acompanhe análises sobre a legislação dos servidores, decisões judiciais recentes e orientações sobre direitos funcionais no Instagram.</p>
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
