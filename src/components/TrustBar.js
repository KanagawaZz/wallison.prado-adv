import { Icon } from './Icon.js';

export function TrustBar({ trustBadges }) {
  return `
    <section class="trust-bar-section desktop-only" aria-label="Compromissos e credenciais">
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
                    <span class="trust-tag">${badge.badge}</span>
                    <h3 class="trust-title">${badge.title}</h3>
                    <p class="trust-desc">${badge.description}</p>
                    ${
                      badge.isExternal
                        ? `<a href="${badge.linkHref}" target="_blank" rel="noopener noreferrer" class="trust-link">
                            <span>${badge.linkText}</span>
                            ${Icon({ name: 'externalLink', size: 14 })}
                          </a>`
                        : `<a href="${badge.linkHref}" class="trust-link">
                            <span>${badge.linkText}</span>
                            ${Icon({ name: 'arrowRight', size: 14 })}
                          </a>`
                    }
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
