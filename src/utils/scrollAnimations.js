export function initScrollAnimations() {
  // Configuração do IntersectionObserver para revelação fluida estilo Framer
  const revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Elementos mantêm a classe para estabilidade visual
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback gracioso para navegadores antigos
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // Comportamento suave e exclusivo do Acordeão do FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.removeAttribute('open');
          }
        });
      }
    });
  });

  // Efeito Parallax sutil no frame do Hero ao mover o cursor (Desktop)
  const heroVisual = document.querySelector('.hero-visual');
  const profileFrame = document.querySelector('.profile-frame');
  if (heroVisual && profileFrame && window.matchMedia('(min-width: 992px)').matches) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      profileFrame.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      profileFrame.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    });
  }

  // Fio dourado de progresso de leitura no topo da página
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progressBar);

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}
