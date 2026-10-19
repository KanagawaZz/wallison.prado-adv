import { Icon } from './Icon.js';

export function FinalCTA({ siteConfig, lawyer }) {
  return `
    <section id="contato" class="section-block contact-section">
      <div class="container">
        <div class="contact-card-box" data-reveal="fade-up">
          <div class="contact-header-content">
            <div class="eyebrow-chip light desktop-only">
              ${Icon({ name: 'shield', size: 14 })}
              <span>Atendimento 100% Online • Cuiabá e Interior de MT</span>
            </div>
            <h2 class="contact-title">
              <span class="desktop-only">Proteja sua carreira e seus direitos antes que os prazos prescrevam</span>
              <span class="mobile-only">Fale diretamente com o Dr. Wallison</span>
            </h2>
            <p class="contact-subtitle">
              <span class="desktop-only">Tire suas dúvidas diretamente com o Dr. Wallison Prado pelo WhatsApp. Atendimento ágil, direto e sem intermediários para servidores estaduais, municipais e federais em todo o Mato Grosso.</span>
              <span class="mobile-only">Atendimento individualizado para servidores públicos de todo o Mato Grosso.</span>
            </p>

            <div class="contact-trust-checklist desktop-only">
              <span>✓ Triagem rápida e sem burocracia</span>
              <span>✓ Avaliação técnica individualizada</span>
              <span>✓ Atendimento 100% online no celular</span>
            </div>

            <div class="contact-primary-actions">
              <a class="button button-gold contact-main-btn" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'chat', size: 20 })}
                <span class="desktop-only">Falar agora com o Dr. Wallison no WhatsApp</span>
                <span class="mobile-only">Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div class="contact-details-grid desktop-only">
            <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="contact-info-card contact-info-link" title="Abrir conversa no WhatsApp">
              <div class="info-card-icon">
                ${Icon({ name: 'phone', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">WhatsApp Institucional</span>
                <strong>${siteConfig.whatsappDisplay}</strong>
                <small>Retorno ágil e videochamadas</small>
              </div>
            </a>

            <a href="mailto:${siteConfig.email}" class="contact-info-card contact-info-link" title="Enviar e-mail com documentos">
              <div class="info-card-icon">
                ${Icon({ name: 'mail', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">E-mail Profissional</span>
                <strong>${siteConfig.email}</strong>
                <small>Envio de documentos funcionais</small>
              </div>
            </a>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'clock', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">Horário de Atendimento</span>
                <strong>${siteConfig.openingHours}</strong>
                <small>Retorno ágil em horário comercial</small>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="info-card-icon">
                ${Icon({ name: 'mapPin', size: 18 })}
              </div>
              <div class="info-card-text">
                <span class="info-label">Abrangência Territorial</span>
                <strong>Todo o Mato Grosso</strong>
                <small>100% online com assinatura eletrônica</small>
              </div>
            </div>
          </div>

          <div class="contact-social-bar desktop-only">
            <div class="social-bar-text">
              <span class="security-dot"></span>
              <span>Comunicação segura e conduta ética resguardada pelo Estatuto da OAB.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
