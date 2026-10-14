import { Icon } from './Icon.js';

export function FinalCTA({ siteConfig, lawyer }) {
  return `
    <section id="contato" class="section-block contact-section">
      <div class="container">
        <div class="contact-card-box" data-reveal="fade-up">
          <div class="contact-header-content">
            <div class="eyebrow-chip light">
              ${Icon({ name: 'shield', size: 14 })}
              <span>Atendimento 100% Online • Cuiabá e Interior de MT</span>
            </div>
            <h2 class="contact-title">
              Proteja sua carreira e seus direitos antes que os prazos prescrevam
            </h2>
            <p class="contact-subtitle">
              Tire suas dúvidas diretamente com o Dr. Wallison Prado pelo WhatsApp. Atendimento ágil, direto e sem intermediários para servidores estaduais (LC 04/90), municipais e federais em todo o Mato Grosso.
            </p>

            <div class="contact-trust-checklist">
              <span>✓ Triagem rápida e sem burocracia</span>
              <span>✓ Avaliação técnica individualizada</span>
              <span>✓ Atendimento 100% online no celular</span>
            </div>

            <div class="contact-primary-actions">
              <a class="button button-gold contact-main-btn" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'chat', size: 20 })}
                <span>Falar agora com o Dr. Wallison no WhatsApp</span>
              </a>
              <a class="button button-glass contact-oab-btn" href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer">
                ${Icon({ name: 'scale', size: 16 })}
                <span>Consultar OAB/MT 31.726</span>
                ${Icon({ name: 'externalLink', size: 13 })}
              </a>
            </div>
          </div>

          <div class="contact-details-grid">
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

          <div class="contact-social-bar">
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
