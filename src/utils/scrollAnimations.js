/**
 * Motor de Revelação e Animações de Scroll
 * Diretriz 3 & 6: amount 0.2, once: true, easing cubic-bezier(0.22, 1, 0.36, 1)
 */
export function initScrollAnimations() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. IntersectionObserver para elementos de revelação bidirecionais (rolagem de cima pra baixo e de baixo pra cima)
  const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-card], .stagger-container');

  if ('IntersectionObserver' in window && !isReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.addEventListener(
              'transitionend',
              () => {
                entry.target.style.willChange = 'auto';
              },
              { once: true }
            );
          } else {
            // Quando o elemento sai completamente da tela (seja rolando para baixo ou para cima),
            // removemos is-visible para que ele re-anime suavemente ao retornar
            entry.target.classList.remove('is-visible');
            entry.target.style.willChange = 'opacity, transform, filter';
          }
        });
      },
      {
        threshold: 0.12, // 12% do elemento visível na tela
        rootMargin: '-20px 0px -20px 0px', // Equilibrado para entrada por cima e por baixo
      }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // Fallback gracioso
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // 2. Header transparente -> Fundo marinho translúcido + blur(12px) após 80px de scroll (3.2 & 7)
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

  // 4. Controle de Visibilidade do Botão Flutuante de WhatsApp (3.11 & Ajuste 2)
  const floatingWhatsapp = document.querySelector('#floatingWhatsapp');
  const heroSection = document.querySelector('#inicio');
  const finalCta = document.querySelector('#contato');

  if (floatingWhatsapp && heroSection) {
    const checkFloatingVisibility = () => {
      const scrollY = window.scrollY;
      const heroThreshold = heroSection.offsetHeight - 120;
      let nearFinalCta = false;

      if (finalCta) {
        const ctaRect = finalCta.getBoundingClientRect();
        if (ctaRect.top < window.innerHeight && ctaRect.bottom > 0) {
          nearFinalCta = true;
        }
      }

      if (scrollY > heroThreshold && !nearFinalCta) {
        floatingWhatsapp.classList.add('is-visible');
      } else {
        floatingWhatsapp.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', checkFloatingVisibility, { passive: true });
    checkFloatingVisibility();
  }

  // 5. Acordeão Suave e Exclusivo do FAQ (3.8)
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

/**
 * 6. Animação de Luz na Moldura do Sobre (dispara ao entrar na viewport)
 */
export function initAboutLight() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) return;

  const aboutSection = document.querySelector('#sobre');
  if (!aboutSection) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add('about-light-active');
          } else {
            aboutSection.classList.remove('about-light-active');
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(aboutSection);
  } else {
    aboutSection.classList.add('about-light-active');
  }
}

