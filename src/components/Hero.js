import { Icon } from './Icon.js';

/**
 * Hero Component - Wallison Prado Advocacia
 * Sequência de Abertura Cinematográfica (~3.5s) com Losango Duplo,
 * Monograma em Foco, Transição Suave e SEO Respeitado.
 */
export function Hero({ lawyer, siteConfig }) {
  return `
    <section id="inicio" class="hero-section hero-intro-active">
      <!-- Luz difusa azul-marinho de fundo (brilho #12284A) -->
      <div class="hero-ambient-glow" aria-hidden="true"></div>

      <!-- Palco Central / Monograma e Losango de Abertura -->
      <div class="hero-monogram-stage" id="heroMonogramStage">
        <div class="hero-losango-wrapper shine-track" id="heroLosangoWrapper">
          <!-- Brilho que passa pelo losango (Shine metálico a 120deg) -->
          <div class="hero-shine-beam" id="heroShineBeam" aria-hidden="true"></div>

          <!-- SVG do Losango com Duplo Contorno (1.2px, dourado #C9A45C) -->
          <svg 
            class="hero-losango-svg" 
            viewBox="0 0 320 320" 
            width="320" 
            height="320"
            aria-hidden="true"
          >
            <!-- Contorno Externo (traçado a partir de 0.0s com pontas salientes) -->
            <path 
              class="losango-path-outer" 
              d="M 160 26 L 294 160 L 160 294 L 26 160 Z" 
              pathLength="1000"
              fill="none" 
              stroke="#C9A45C" 
              stroke-width="1.2"
              stroke-linecap="square"
            />
            <!-- Contorno Interno (inicia a 0.3s no sentido inverso, ~12px de distância) -->
            <path 
              class="losango-path-inner" 
              d="M 160 40 L 40 160 L 160 280 L 280 160 Z" 
              pathLength="1000"
              fill="none" 
              stroke="#C9A45C" 
              stroke-width="1.2"
              stroke-linecap="square"
            />
          </svg>

          <!-- Monograma "WP" Centralizado (entra em foco de 0.9s a 1.9s) -->
          <div class="hero-monogram-letters" id="heroMonogramLetters" aria-label="Monograma WP">
            <span>WP</span>
          </div>
        </div>

        <!-- Nome textual que aparece na abertura inicial (1.4s a 2.2s, fade out aos 2.6s) -->
        <div class="hero-intro-name-box" id="heroIntroNameBox">
          <p class="hero-intro-name">WALLISON PRADO</p>
          <div class="hero-intro-gold-line" aria-hidden="true"></div>
        </div>
      </div>

      <!-- Layout do Hero em Grid (Textos sempre presentes no DOM para SEO) -->
      <div class="container hero-grid">
        <!-- Coluna Esquerda: Mensagem Institucional & Conversão -->
        <div class="hero-copy" id="heroCopy">
          <div class="hero-label-wrap">
            <span class="hero-eyebrow-line" aria-hidden="true"></span>
            <span class="hero-gold-label">MATO GROSSO • ATENDIMENTO 100% ONLINE</span>
          </div>

          <h1 class="hero-title" id="heroMainTitle">
            Atuação técnica nos seus direitos como servidor público em Mato Grosso
          </h1>

          <p class="hero-lead" id="heroLeadText">
            Atuação combativa para servidores estaduais, municipais e federais. Destrave progressões retidas, defenda-se em PADs e recupere adicionais com atendimento 100% online e suporte técnico especializado.
          </p>

          <div class="hero-actions" id="heroActionButtons">
            <a 
              class="button button-primary hero-btn-main" 
              href="${siteConfig.whatsappLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              id="heroWhatsappCta"
            >
              ${Icon({ name: 'chat', size: 18 })}
              <span>Falar diretamente com o Dr. Wallison</span>
            </a>

            <a 
              class="button button-outline hero-btn-oab" 
              href="${siteConfig.oabLink}" 
              target="_blank" 
              rel="noopener noreferrer"
            >
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

        <!-- Coluna Direita: Ponto de ancoragem para o Monograma após a transição -->
        <div class="hero-visual-target" id="heroVisualTarget">
          <!-- O monograma migra para cá no layout desktop -->
        </div>
      </div>
    </section>
  `;
}
