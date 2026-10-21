export function About() {
  return `
    <section id="sobre" class="section-block about-section">
      <div class="container">
        <!-- Perfil em texto, centralizado e assinado (o rosto já aparece no hero) -->
        <div class="about-top-grid">
          <div class="about-copy-column" data-reveal="fade-up">
            <div class="about-header-meta">
              <span class="eyebrow-chip" data-reveal="label">SOBRE</span>
              <h2 class="about-title" data-reveal="title">
                Quem serve ao público também precisa de quem o defenda.
              </h2>
            </div>

            <div class="about-paragraphs" data-reveal="paragraph">
              <p>
                Sou o Wallison Prado e atuo na defesa de servidores públicos em Mato Grosso, em situações que vão de um processo disciplinar inesperado a uma progressão que nunca saiu do papel.
              </p>
              <p>
                Sei que, para o servidor, buscar um direito costuma vir acompanhado de receio: da chefia, dos colegas, de complicar a carreira. Por isso, meu trabalho começa explicando com calma o que a lei prevê para o seu caso, quais caminhos existem e os riscos de cada um.
              </p>
            </div>

            <!-- Assinatura de exemplo em fonte manuscrita: trocar pela imagem da assinatura real antes de publicar -->
            <div class="about-signature" aria-label="Assinatura de Wallison Prado">
              <span class="about-signature-script" aria-hidden="true">Wallison Prado</span>
              <span class="about-signature-role">Advogado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
