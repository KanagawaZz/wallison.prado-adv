/**
 * Motor de Revelação e Animações de Scroll
 * Diretriz 3: amount 0.2, once: true, easing cubic-bezier(0.22, 1, 0.36, 1)
 */
export function initScrollAnimations() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. IntersectionObserver para elementos [data-reveal] e .stagger-container
  const revealTargets = document.querySelectorAll('[data-reveal], .stagger-container');

  if ('IntersectionObserver' in window && !isReducedMotion) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Regra Seção 3: dispara uma vez só (once: true). Rolar para cima não reanima.
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // 20% do elemento na tela
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // Fallback gracioso para navegadores sem IntersectionObserver ou reduced motion
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // 2. Header transparente -> Fundo marinho translúcido + blur(14px) após 80px de scroll (3.2)
  const header = document.querySelector('.site-header');
  if (header) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  // 3. Links do Header: Linha Dourada com Efeito de Fluxo Contínuo (3.2)
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.setProperty('--line-origin', 'left');
    });
    link.addEventListener('mouseleave', () => {
      link.style.setProperty('--line-origin', 'right');
    });
  });

  // 4. Acordeão Suave e Exclusivo do FAQ (3.8)
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-summary-btn, summary');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('is-open');

      // Fecha todos os outros itens suavemente
      faqItems.forEach((other) => {
        if (other !== item && other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          const body = other.querySelector('.faq-answer-collapse');
          if (body) body.style.maxHeight = '0px';
        }
      });

      // Alterna o item atual
      const body = item.querySelector('.faq-answer-collapse');
      if (isOpen) {
        item.classList.remove('is-open');
        if (body) body.style.maxHeight = '0px';
      } else {
        item.classList.add('is-open');
        if (body) {
          body.style.maxHeight = `${body.scrollHeight}px`;
        }
      }
    });
  });
}
