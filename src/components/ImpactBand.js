import { Icon } from './Icon.js';

/**
 * Faixa de Impacto Cinematográfica
 * (Base inicial para a ordem do main.js - refinamento completo na Fase 5)
 */
export function ImpactBand({ siteConfig }) {
  return `
    <section id="institucional" class="section-block impact-band-section" aria-label="Compromisso Institucional">
      <div class="container impact-band-container" data-reveal="fade-up">
        <div class="impact-quote-box">
          <span class="eyebrow-chip" data-reveal="label">Rigor Técnico & Ética</span>
          <h2 class="impact-quote-title" data-reveal="title">
            "A defesa técnica e intransigente das prerrogativas do servidor público em Mato Grosso."
          </h2>
          <p class="impact-quote-author" data-reveal="paragraph">
            Dr. Wallison Prado • OAB/MT 31.726
          </p>
        </div>
      </div>
    </section>
  `;
}
