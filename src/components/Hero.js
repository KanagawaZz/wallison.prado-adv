import { Icon } from './Icon.js';

export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section">
      <div class="hero-ambient-glow" aria-hidden="true"></div>
      
      <div class="container hero-grid">
        <div class="hero-copy" data-reveal="fade-up">
          <!-- Identificação integrada otimizada para visualização mobile imediata -->
          <div class="hero-mobile-lawyer-badge" aria-label="Identificação profissional do Dr. Wallison Prado">
            <img 
              src="${lawyer.photo}" 
              alt="Dr. Wallison Prado - Advogado OAB/MT 31.726" 
              class="hero-mobile-avatar" 
              loading="eager" 
              width="58"
              height="58"
            />
            <div class="hero-mobile-lawyer-info">
              <div class="hero-mobile-name-row">
                <span class="live-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <span class="caption-tag">OAB/MT 31.726</span>
              </div>
              <span class="hero-mobile-lawyer-role">Especialista em Servidores de MT • 100% Online</span>
            </div>
          </div>

          <div class="hero-badge-wrap">
            <div class="hero-badge">
              <span class="badge-icon">${Icon({ name: 'scale', size: 14 })}</span>
              <span>Defesa de Servidores Públicos • Mato Grosso</span>
            </div>
          </div>

          <h1 class="hero-title">
            Defesa técnica e especializada dos seus direitos funcionais em Mato Grosso.
          </h1>

          <p class="hero-lead">
            Atuação combativa para servidores estaduais (<strong>LC 04/1990</strong>), municipais e federais. Destrave progressões retidas, defenda-se em PADs e recupere adicionais com atendimento 100% online e suporte técnico especializado.
          </p>

          <div class="hero-actions">
            <a class="button button-primary hero-btn-main" href="${siteConfig.whatsappLink}" target="_blank" rel="noopener noreferrer">
              ${Icon({ name: 'chat', size: 18 })}
              <span>Falar diretamente com o Dr. Wallison</span>
            </a>

            <a class="button button-outline hero-btn-oab" href="${siteConfig.oabLink}" target="_blank" rel="noopener noreferrer">
              ${Icon({ name: 'scale', size: 16 })}
              <span>Consultar OAB/MT 31.726</span>
            </a>
          </div>

          <div class="hero-trust-row" aria-label="Garantias do atendimento">
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'shield', size: 13 })}</span>
              <span>Atuação Especializada</span>
            </div>
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'mapPin', size: 13 })}</span>
              <span>Cuiabá e Interior de MT (100% Online)</span>
            </div>
            <div class="trust-pill">
              <span class="pill-check">${Icon({ name: 'check', size: 13 })}</span>
              <span>OAB/MT 31.726 Regular</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" data-reveal="fade-left">
          <div class="hero-portrait-stage">
            <div class="ambient-backlight-3d" aria-hidden="true"></div>

            <div class="profile-frame-3d" data-tilt-3d data-tilt-max="6">
              <img 
                src="${lawyer.photo}" 
                alt="Dr. Wallison Prado, Advogado com atuação em Direito Administrativo" 
                class="profile-image" 
                loading="eager" 
              />
              <div class="frame-specular-border" aria-hidden="true"></div>
            </div>

            <div class="portrait-caption-pill">
              <div class="caption-status">
                <span class="live-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <span class="caption-tag">OAB/MT 31.726</span>
              </div>
              <p class="caption-coverage">Atendimento 100% online em todo o Mato Grosso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
