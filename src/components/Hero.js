import { Icon } from './Icon.js';

export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section">
      <div class="hero-ambient-glow" aria-hidden="true"></div>

      <div class="container hero-grid">
        <div class="hero-copy">
          <!-- Identificação integrada otimizada para visualização mobile imediata -->
          <div class="hero-mobile-lawyer-badge" aria-label="Identificação profissional do Dr. Wallison Prado">
            <div class="hero-mobile-avatar">
              <img
                src="/images/wallison-prado.webp"
                alt="Dr. Wallison Prado"
                class="hero-mobile-avatar-img"
                width="44"
                height="44"
                loading="eager"
              />
            </div>
            <div class="hero-mobile-lawyer-info">
              <div class="hero-mobile-name-row">
                <span class="live-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <span class="caption-tag">Direito Administrativo</span>
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
            Atuação técnica nos seus direitos como servidor público em Mato Grosso
          </h1>

          <p class="hero-lead">
            Atuação combativa para servidores estaduais, municipais e federais. Destrave progressões retidas, defenda-se em PADs e recupere adicionais com atendimento 100% online e suporte técnico especializado.
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
              <span>Inscrição Regular na OAB</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-portrait-stage">
            <div class="ambient-backlight-3d" aria-hidden="true"></div>
            <div class="profile-frame-3d" data-tilt-3d data-tilt-max="6">
              <img
                src="/images/wallison-prado.webp"
                alt="Dr. Wallison Prado - Advogado Especialista em Servidores Públicos em MT"
                class="profile-image"
                width="390"
                height="443"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <div class="frame-specular-border" aria-hidden="true"></div>
            </div>
            <div class="portrait-caption-pill">
              <div class="caption-status">
                <span class="live-dot" aria-hidden="true"></span>
                <strong>Dr. Wallison Prado</strong>
                <span class="caption-tag">Direito Administrativo</span>
              </div>
              <p class="caption-coverage">Atendimento em Cuiabá e Interior de MT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
