import { Icon } from './Icon.js';

export function FinalCTA({ siteConfig }) {
  return `
    <section id="contato" class="section-block contact-section">
      <div class="container">
        <div class="contact-card-box" data-reveal="fade-up">
          <div class="contact-header-content">
            <h2 class="contact-title">
              Vamos conversar sobre a sua situação?
            </h2>
            <p class="contact-subtitle">
              Me conte o que está acontecendo. Na primeira conversa, explico o que a lei prevê para o seu caso e quais caminhos existem.
            </p>

            <div class="contact-trust-checklist desktop-only">
              <span>✓ Primeira conversa gratuita</span>
              <span>✓ WhatsApp e videochamada</span>
              <span>✓ Assinatura pelo celular</span>
              <span>✓ Sigilo profissional</span>
            </div>

            <div class="contact-primary-actions">
              <a class="button button-gold contact-main-btn" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'chat', size: 20 })}
                <span>Falar com o Dr. Wallison</span>
              </a>
            </div>
          </div>

          <div class="contact-details-grid">
            <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="contact-info-card contact-info-link" title="Abrir conversa no WhatsApp">
              <div class="info-card-icon">
                ${Icon({ name: 'phone', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">WhatsApp</span>
                <strong>${siteConfig.whatsappDisplay}</strong>
              </div>
            </a>

            <a href="mailto:${siteConfig.email}" class="contact-info-card contact-info-link" title="Enviar e-mail">
              <div class="info-card-icon">
                ${Icon({ name: 'mail', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">E-mail</span>
                <strong>${siteConfig.email}</strong>
                <small>(envio de documentos)</small>
              </div>
            </a>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'clock', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">Horário</span>
                <strong>Segunda a sexta, das 8h às 18h</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
