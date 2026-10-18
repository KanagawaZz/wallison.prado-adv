/**
 * Controlador da Linha do Tempo e Efeitos do Hero (~3.5s)
 * - 0.0s a 1.6s: Desenho duplo do losango em SVG
 * - 0.9s a 1.9s: Monograma "WP" entra em foco
 * - 1.4s a 2.2s: "WALLISON PRADO" surge + linha de 60px
 * - 2.2s a 2.6s: Pausa contemplativa (0.4s)
 * - 2.6s a 3.5s: Transição suave do monograma para a direita e entrada dos textos e header
 * - 3.5s a 4.7s: Primeiro feixe de brilho (shine)
 * - Estado contínuo: Shine a cada 7s, glow respirando a cada 4s, tilt 3D e parallax
 * - Interrupção: Pula para o estado final ao rolar, clicar ou teclar.
 */
export function initHeroTimeline() {
  const heroSection = document.querySelector('#inicio');
  const monogramStage = document.querySelector('#heroStageComposition') || document.querySelector('#heroMonogramStage');
  const losangoWrapper = document.querySelector('#heroLosangoWrapper');
  const shineBeam = document.querySelector('#heroShineBeam');
  const header = document.querySelector('.site-header');

  if (!heroSection) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alreadySeen = sessionStorage.getItem('wp_hero_seen') === 'true';

  let isComplete = false;
  let shineTimer = null;
  const timeouts = [];

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeouts.push(id);
    return id;
  };

  const clearAllTimeouts = () => {
    timeouts.forEach((id) => clearTimeout(id));
    timeouts.length = 0;
  };

  // Dispara uma passagem do brilho metálico no losango
  const triggerShinePass = () => {
    if (!shineBeam) return;
    shineBeam.classList.remove('animate-shine');
    // Força reflow para reiniciar animação
    void shineBeam.offsetWidth;
    shineBeam.classList.add('animate-shine');
  };

  // Transição rápida para o estado final (0.6s)
  const skipToFinalState = () => {
    if (isComplete) return;
    isComplete = true;
    clearAllTimeouts();

    sessionStorage.setItem('wp_hero_seen', 'true');

    heroSection.classList.add('hero-skip-fast');
    heroSection.classList.remove('hero-intro-active');
    heroSection.classList.add('hero-stage-ready');

    if (header) {
      header.classList.add('header-revealed');
    }

    if (losangoWrapper) {
      losangoWrapper.classList.add('losango-glow-active');
    }

    // Dispara o primeiro shine e agenda repetição a cada 7s
    addTimeout(() => {
      triggerShinePass();
      shineTimer = setInterval(triggerShinePass, 7000);
    }, 600);

    cleanupInterruptionListeners();
  };

  // Ouvintes de interrupção (scroll, click, touch, keydown)
  const handleUserInterruption = (e) => {
    if (isComplete) return;
    // Não impede o comportamento nativo (nunca trava o scroll)
    skipToFinalState();
  };

  const setupInterruptionListeners = () => {
    window.addEventListener('wheel', handleUserInterruption, { passive: true, once: true });
    window.addEventListener('touchmove', handleUserInterruption, { passive: true, once: true });
    window.addEventListener('scroll', handleUserInterruption, { passive: true, once: true });
    window.addEventListener('keydown', handleUserInterruption, { once: true });
    window.addEventListener('click', handleUserInterruption, { once: true });
  };

  const cleanupInterruptionListeners = () => {
    window.removeEventListener('wheel', handleUserInterruption);
    window.removeEventListener('touchmove', handleUserInterruption);
    window.removeEventListener('scroll', handleUserInterruption);
    window.removeEventListener('keydown', handleUserInterruption);
    window.removeEventListener('click', handleUserInterruption);
  };

  // Caso já tenha visto na sessão ou prefira movimento reduzido, pula direto
  if (alreadySeen || isReducedMotion) {
    skipToFinalState();
    return;
  }

  // Registra ouvintes para interrupção voluntária do usuário
  setupInterruptionListeners();

  // Início da Sequência Cronometrada
  // 0.0s: Estado inicial ativo (hero-intro-active já inserido no HTML)
  heroSection.classList.add('hero-intro-running');

  // 0.9s: Monograma entra em foco
  addTimeout(() => {
    if (isComplete) return;
    heroSection.classList.add('hero-step-monogram');
  }, 900);

  // 1.4s: Nome WALLISON PRADO surge abaixo
  addTimeout(() => {
    if (isComplete) return;
    heroSection.classList.add('hero-step-name');
  }, 1400);

  // 2.2s a 2.6s: Pausa contemplativa

  // 2.6s: Transição para o layout do Hero (monograma desliza, textos entram)
  addTimeout(() => {
    if (isComplete) return;
    heroSection.classList.remove('hero-intro-active');
    heroSection.classList.add('hero-stage-ready');
    if (header) {
      header.classList.add('header-revealed');
    }
    if (losangoWrapper) {
      losangoWrapper.classList.add('losango-glow-active');
    }
  }, 2600);

  // 3.5s: Primeiro feixe de luz metálico no losango
  addTimeout(() => {
    if (isComplete) return;
    triggerShinePass();
  }, 3500);

  // 4.7s: Fim da abertura formal, inicia repetição do shine a cada 7s
  addTimeout(() => {
    if (isComplete) return;
    isComplete = true;
    sessionStorage.setItem('wp_hero_seen', 'true');
    cleanupInterruptionListeners();
    shineTimer = setInterval(triggerShinePass, 7000);
  }, 4700);

  // --------------------------------------------------------------------------
  // INTERATIVIDADES CONTÍNUAS NO DESKTOP (Sem rodar em mobile < 768px)
  // --------------------------------------------------------------------------
  if (!isMobile && !isReducedMotion) {
    // 1. Efeito 3D Tilt sutil no mouse (rotação máxima de 4°, transição de 0.6s)
    let isHovering = false;

    heroSection.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    heroSection.addEventListener('mousemove', (e) => {
      if (!isHovering || !isComplete || !losangoWrapper) return;
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 a 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 a 0.5

      const rotateY = (x * 4).toFixed(2);
      const rotateX = (-y * 4).toFixed(2);

      losangoWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      isHovering = false;
      if (losangoWrapper) {
        losangoWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    });

    // 2. Parallax no Scroll: Monograma sobe a 50% da velocidade e fade até 0.3
    const handleScrollParallax = () => {
      if (!isComplete || !monogramStage) return;
      const scrollY = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      if (scrollY <= heroHeight) {
        const progress = Math.min(scrollY / heroHeight, 1);
        const translateY = scrollY * 0.5;
        const opacity = 1 - (progress * 0.7); // vai de 1 a 0.3

        monogramStage.style.transform = `translateY(${translateY}px)`;
        monogramStage.style.opacity = Math.max(opacity, 0.3);
      }
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });
  }
}
