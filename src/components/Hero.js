import { Icon } from './Icon.js';

export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section hero-intro-active hero-has-video hero-video-wait">
      <!-- Filme de identidade WP: roda sozinho e depois fica de fundo sob o conteúdo -->
      <div class="hero-video-layer" aria-hidden="true">
        <video
          class="hero-video"
          id="heroVideo"
          src="/videos/hero-film.mp4"
          muted
          playsinline
          preload="auto"
          disablepictureinpicture
        ></video>
        <div class="hero-video-overlay"></div>
      </div>

      <!-- Iluminação atmosférica cinematográfica em camadas (Azul Ébano + Âmbar de Estúdio) -->
      <div class="hero-ambient-glow" aria-hidden="true"></div>
      <div class="hero-anamorphic-beam" aria-hidden="true"></div>

      <div class="container hero-container">
        <div class="hero-grid">
          <!-- Coluna Esquerda: Mensagem & Conversão -->
          <div class="hero-copy" id="heroCopy" data-reveal="from-left">
            <div class="hero-mobile-lawyer-header mobile-only">
              <strong class="hero-mobile-name">Dr. Wallison Prado</strong>
            </div>

            <div class="hero-label-wrap">
              <span class="hero-eyebrow-line" aria-hidden="true"></span>
              <span class="hero-gold-label">ATENDIMENTO ONLINE EM TODO O MATO GROSSO</span>
            </div>

            <h1 class="hero-title" id="heroMainTitle">
              Advocacia para servidores públicos de Mato Grosso
            </h1>

            <p class="hero-lead" id="heroLeadText">
              Oriento e defendo servidores estaduais, municipais e federais em processos disciplinares, progressões, adicionais e licença-prêmio, com atendimento pelo WhatsApp, sem precisar sair de casa.
            </p>

            <div class="hero-mobile-tags mobile-only" aria-label="Temas principais">
              <span class="hero-mobile-tag">PAD</span>
              <span class="tag-bullet">•</span>
              <span class="hero-mobile-tag">Progressões</span>
              <span class="tag-bullet">•</span>
              <span class="hero-mobile-tag">Licença-prêmio</span>
            </div>

            <div class="hero-actions" id="heroActionButtons">
              <a 
                class="button button-primary hero-btn-main" 
                href="${siteConfig.whatsappLink}" 
                target="_blank" 
                rel="noopener noreferrer"
                id="heroWhatsappCta"
              >
                ${Icon({ name: 'chat', size: 18 })}
                <span>Falar com o Dr. Wallison</span>
              </a>

              <a 
                class="button button-outline hero-btn-oab" 
                href="${siteConfig.oabLink}" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ${Icon({ name: 'scale', size: 16 })}
                <span>Consultar inscrição na OAB</span>
              </a>
            </div>

            <div class="hero-trust-row" aria-label="Diferenciais">
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'check', size: 14 })}</span>
                <span>Primeira conversa gratuita</span>
              </div>
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'check', size: 14 })}</span>
                <span>WhatsApp e videochamada</span>
              </div>
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'check', size: 14 })}</span>
                <span>Assinatura pelo celular</span>
              </div>
            </div>
          </div>

          <!-- Coluna Direita: Palco Visual com Foto do Dr. Wallison + Losango Dourado + Monograma Monumental -->
          <div class="hero-visual-col" id="heroVisualCol" data-reveal="from-right">
            <!-- Monograma Monumental WP em Marca d'Água 3D de Fundo -->
            <div class="hero-watermark-monogram" aria-hidden="true">
              <svg class="hero-monogram-svg" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="wpGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FCE28A" stop-opacity="0.65" />
                    <stop offset="45%" stop-color="#C5A880" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#9E7D47" stop-opacity="0.15" />
                  </linearGradient>
                  <linearGradient id="wpGradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FCE28A" stop-opacity="0.85" />
                    <stop offset="50%" stop-color="#DCA42C" stop-opacity="0.55" />
                    <stop offset="100%" stop-color="#B38116" stop-opacity="0.25" />
                  </linearGradient>
                  <filter id="wpMonogramGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <!-- Moldura Losango Sutil de Profundidade -->
                <path d="M 260 40 L 460 260 L 260 480 L 60 260 Z" fill="none" stroke="url(#wpGradStroke)" stroke-width="1.2" opacity="0.35" />
                <path d="M 260 62 L 438 260 L 260 458 L 82 260 Z" fill="none" stroke="url(#wpGradStroke)" stroke-width="0.8" opacity="0.2" />
                <!-- Letras W e P Entrelaçadas com Alta Tipografia Serifada -->
                <text x="215" y="295" font-family="'Cormorant Garamond', Georgia, serif" font-size="240" font-weight="400" font-style="italic" fill="url(#wpGradGold)" stroke="url(#wpGradStroke)" stroke-width="1" text-anchor="middle" dominant-baseline="central" filter="url(#wpMonogramGlow)">W</text>
                <text x="325" y="270" font-family="'Cormorant Garamond', Georgia, serif" font-size="270" font-weight="600" fill="url(#wpGradGold)" stroke="url(#wpGradStroke)" stroke-width="1.2" text-anchor="middle" dominant-baseline="central" filter="url(#wpMonogramGlow)">P</text>
              </svg>
            </div>

            <div class="hero-stage-composition" id="heroStageComposition">
              <!-- Halo / Brasão Vetorial do Duplo Losango (Traçado 1.2px) -->
              <div class="hero-losango-wrapper" id="heroLosangoWrapper">
                <svg 
                  class="hero-losango-svg" 
                  viewBox="0 0 320 320" 
                  aria-hidden="true"
                  shape-rendering="geometricPrecision"
                >
                  <!-- Contorno Externo -->
                  <path 
                    class="losango-path-outer" 
                    d="M 160 26 L 294 160 L 160 294 L 26 160 Z" 
                    pathLength="1000"
                    fill="none" 
                    stroke="#DCA42C" 
                    stroke-width="1.2"
                    stroke-linecap="square"
                    vector-effect="non-scaling-stroke"
                  />
                  <!-- Contorno Interno -->
                  <path 
                    class="losango-path-inner" 
                    d="M 160 40 L 40 160 L 160 280 L 280 160 Z" 
                    pathLength="1000"
                    fill="none" 
                    stroke="#DCA42C" 
                    stroke-width="1.2"
                    stroke-linecap="square"
                    vector-effect="non-scaling-stroke"
                  />
                  <!-- Feixe de Luz - Contorno Externo -->
                  <path 
                    class="losango-light-path outer" 
                    d="M 160 26 L 294 160 L 160 294 L 26 160 Z" 
                    pathLength="1000"
                    fill="none" 
                    stroke="#FCE28A" 
                    stroke-width="1.4"
                    stroke-linecap="round"
                    vector-effect="non-scaling-stroke"
                  />
                  <!-- Feixe de Luz - Contorno Interno -->
                  <path 
                    class="losango-light-path inner" 
                    d="M 160 40 L 40 160 L 160 280 L 280 160 Z" 
                    pathLength="1000"
                    fill="none" 
                    stroke="#FCE28A" 
                    stroke-width="1.4"
                    stroke-linecap="round"
                    vector-effect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <!-- Retrato do Dr. Wallison Prado com Iluminação de Cinema -->
              <div class="hero-portrait-card" id="heroPortraitCard">
                <div class="hero-frame-inner-border" aria-hidden="true"></div>
                <div class="hero-frame-glass-sheen" aria-hidden="true"></div>

                <img 
                  src="/images/wallison-prado.jpg" 
                  alt="Dr. Wallison Prado, advogado"
                  class="hero-portrait-image"
                  width="440"
                  height="500"
                  loading="eager"
                />
                
                <!-- Selo de Assinatura Monograma WP -->
                <div class="hero-portrait-seal desktop-only">
                  <span class="seal-wp">WP</span>
                  <div class="seal-meta">
                    <strong>Dr. Wallison Prado</strong>
                    <small>OAB/MT 31.726</small>
                  </div>
                </div>
              </div>

              <!-- Nome da abertura -->
              <div class="hero-intro-name-box" id="heroIntroNameBox">
                <p class="hero-intro-name">WALLISON PRADO</p>
                <div class="hero-intro-gold-line" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
