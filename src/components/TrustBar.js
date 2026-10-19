import { Icon } from './Icon.js';

export function TrustBar({ trustBadges }) {
  return `
    <section class="trust-bar-section" id="destaques" aria-label="Destaques">
      <div class="container">
        <div class="trust-bar-grid" data-reveal="fade-up">
          ${trustBadges
            .map(
              (badge) => `
                <div class="trust-card">
                  <div class="trust-icon-box">
                    ${Icon({ name: badge.icon, size: 24 })}
                  </div>
                  <div class="trust-content">
                    <h3 class="trust-title">${badge.title}</h3>
                    <p class="trust-desc">${badge.text}</p>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
