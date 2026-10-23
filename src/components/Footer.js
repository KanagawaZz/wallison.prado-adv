import { Icon } from './Icon.js';

export function Footer({ siteConfig }) {
  return `
    <footer class="site-footer" id="rodape">
      <div class="container footer-top-row">
        <div class="footer-brand-col">
          <div class="footer-monogram-brand">
            <span class="footer-monogram">WP</span>
            <div>
              <strong class="footer-title">Dr. Wallison Prado</strong>
              <p class="footer-subtitle">
                <a href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer" class="footer-oab-link">
                  OAB/MT 31.726 • Consultar no CNA ${Icon({ name: 'externalLink', size: 12 })}
                </a>
              </p>
            </div>
          </div>
          <p class="footer-bio-summary">
            Advocacia para servidores públicos de Mato Grosso, com atendimento online.
          </p>
          <div class="footer-lgpd-note">
            <span class="lgpd-icon">${Icon({ name: 'shield', size: 14 })}</span>
            <p><strong>Privacidade (LGPD):</strong> Os dados enviados por WhatsApp ou e-mail são utilizados exclusivamente para fins de contato e análise prévia da situação funcional.</p>
          </div>
        </div>

        <div class="footer-nav-col">
          <span class="footer-heading">Navegação</span>
          <ul class="footer-links-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atuacao">Áreas de atuação</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li class="desktop-only"><a href="#duvidas">Dúvidas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-contact-col">
          <span class="footer-heading">Contato</span>
          <div class="footer-contact-items">
            <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
              ${Icon({ name: 'chat', size: 16 })}
              <span>${siteConfig.whatsappDisplay}</span>
            </a>
            <a href="mailto:${siteConfig.email}" class="footer-contact-link">
              ${Icon({ name: 'mail', size: 16 })}
              <span>adv.wallisonprado@gmail.com</span>
            </a>
            <a href="${siteConfig.instagram}" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
              ${Icon({ name: 'instagram', size: 16 })}
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div class="container footer-legal-notice-box">
        <div class="legal-badge">
          ${Icon({ name: 'scale', size: 15 })}
          <span>Aviso</span>
        </div>
        <p class="legal-text">
          Conteúdo informativo, sem promessa de resultado. Cada caso exige análise individualizada.
        </p>
      </div>

      <div class="container footer-bottom-row">
        <p>© 2026 Wallison Prado Advocacia.</p>
      </div>
    </footer>
  `;
}
