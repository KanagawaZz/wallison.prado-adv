export function Audience({ audience }) {
  return `
    <section id="para-quem" class="section-block section-muted">
      <div class="container audience-layout">
        <div class="section-header align-left" data-reveal="fade-up">
          <p class="eyebrow">Para quem isso pode fazer sentido</p>
          <h2>Você pode estar buscando orientação porque precisa entender melhor a sua realidade.</h2>
        </div>

        <div class="check-list">
          ${audience
            .map(
              (item, index) => `
                <div class="check-item" data-reveal="fade-up" style="--card-delay: ${index * 0.08}s">
                  <span class="check-badge" aria-hidden="true">✓</span>
                  <p>${item}</p>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
