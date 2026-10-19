import { Icon } from './Icon.js';

/**
 * Hero Component - Wallison Prado Advocacia
 * Composição Nobre: Foto do Dr. Wallison + Duplo Losango Dourado Vetorial + Monograma WP
 * Grid de 2 colunas (1.1fr / 0.9fr), 64px gap, dentro do container global de 1240px.
 */
export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section hero-intro-active">
      <!-- Luz difusa azul-marinho no fundo (#12284A) -->
      <div class="hero-ambient-glow" aria-hidden="true"></div>

      <div class="container hero-container">
        <div class="hero-grid">
          <!-- Coluna Esquerda (1.1fr): Mensagem & Conversão -->
          <div class="hero-copy" id="heroCopy" data-reveal="from-left">
            <div class="hero-mobile-lawyer-header mobile-only">
              <strong class="hero-mobile-name">Dr. Wallison Prado</strong>
              <span class="hero-mobile-oab">OAB/MT 31.726</span>
            </div>

            <div class="hero-label-wrap desktop-only">
              <span class="hero-eyebrow-line" aria-hidden="true"></span>
              <span class="hero-gold-label">MATO GROSSO • ATENDIMENTO 100% ONLINE</span>
            </div>

            <h1 class="hero-title" id="heroMainTitle">
              <span class="desktop-only">Atuação técnica nos seus direitos como servidor público em Mato Grosso</span>
              <span class="mobile-only">Advogado de servidores públicos de MT</span>
            </h1>

            <p class="hero-lead desktop-only" id="heroLeadText">
              Atuação combativa para servidores estaduais, municipais e federais. Destrave progressões retidas, defenda-se em PADs e recupere adicionais com atendimento 100% online e suporte técnico especializado.
            </p>

            <div class="hero-mobile-tags mobile-only" aria-label="Especialidades">
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
                <span class="desktop-only">Falar diretamente com o Dr. Wallison</span>
                <span class="mobile-only">Falar no WhatsApp</span>
              </a>

              <a 
                class="button button-outline hero-btn-oab desktop-only" 
                href="${siteConfig.oabLink}" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ${Icon({ name: 'scale', size: 16 })}
                <span>Consultar OAB/MT 31.726</span>
              </a>
            </div>

            <p class="hero-mobile-subtext mobile-only">
              Atendimento online em todo o MT • Primeira conversa gratuita
            </p>

            <div class="hero-trust-row desktop-only" aria-label="Garantias do atendimento">
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'shield', size: 14 })}</span>
                <span>Atuação Especializada</span>
              </div>
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'mapPin', size: 14 })}</span>
                <span>Cuiabá e Interior de MT (100% Online)</span>
              </div>
              <div class="trust-pill">
                <span class="pill-check">${Icon({ name: 'check', size: 14 })}</span>
                <span>Inscrição Regular na OAB</span>
              </div>
            </div>
          </div>

          <!-- Coluna Direita (0.9fr): Palco Visual com Foto do Dr. Wallison + Losango Dourado + Monograma -->
          <div class="hero-visual-col" id="heroVisualCol" data-reveal="from-right">
            <div class="hero-stage-composition" id="heroStageComposition">
              <!-- Halo / Brasão Vetorial do Duplo Losango (Traçado 1.2px) -->
              <div class="hero-losango-wrapper" id="heroLosangoWrapper">
                <!-- Feixe de luz metálico no losango (Shine a 120deg) -->
  

                <svg 
                  class="hero-losango-svg" 
                  viewBox="0 0 320 320" 
                  aria-hidden="true"
                  shape-rendering="geometricPrecision"
                >
                  <!-- Círculo Guia Central Sutil (Geometria Sagrada) -->
                  <circle cx="160" cy="160" r="100" fill="none" stroke="rgba(220, 164, 44, 0.22)" stroke-width="0.8" stroke-dasharray="4 6" />

                  <!-- Contorno Externo (traço a 0.0s com pontas salientes) -->
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
                  <!-- Contorno Interno (inicia a 0.3s no sentido inverso) -->
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
                  <!-- Feixe de Luz - Contorno Externo (Sentido Horário) -->
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
                  <!-- Feixe de Luz - Contorno Interno (Sentido Anti-horário) -->
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

              <!-- Retrato Executivo do Dr. Wallison Prado integrado ao centro com moldura em linhas nobres -->
              <div class="hero-portrait-card" id="heroPortraitCard">
                <!-- Moldura Interna Fina em Linhas de Joalheria (Passe-partout) -->
                <div class="hero-frame-inner-border" aria-hidden="true"></div>

                <!-- Reflexo Acetinado Superior de Cristal -->
                <div class="hero-frame-glass-sheen" aria-hidden="true"></div>

                <img 
                  src="/images/wallison-prado.jpg" 
                  alt="Dr. Wallison Prado - Advogado Especialista em Servidores Públicos em MT"
                  class="hero-portrait-image"
                  width="440"
                  height="500"
                  loading="eager"
                />
                
                <!-- Selo de Assinatura Monograma WP sobreposto elegantemente -->
                <div class="hero-portrait-seal desktop-only">
                  <span class="seal-wp">WP</span>
                  <div class="seal-meta">
                    <strong>Dr. Wallison Prado</strong>
                    <small>OAB/MT 31.726</small>
                  </div>
                </div>
              </div>

              <!-- Nome da abertura (1.4s -> 2.2s, fade out aos 2.6s) -->
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
