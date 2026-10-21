/**
 * Controlador da Linha do Tempo e Efeitos do Hero
 * - Filme de identidade WP roda como fundo do hero desde o início, sob o conteúdo
 * - O conteúdo entra na hora, por cima do filme:
 *   - +0.0s a 3.5s: textos, retrato e losango entram em sequência
 *   - +1.5s: glow do losango | +3.0s: primeiro shine | +3.8s: estado final
 * - O filme termina congelado no emblema, como fundo do hero
 * - Estado contínuo: Shine a cada 8s, tilt 3D e parallax
 * - Interrupção: Pula para o estado final ao rolar, clicar ou teclar.
 * - Sem vídeo (erro): volta o monograma e o glow originais do hero.
 */
const VIDEO_SPEED = 1.15; // velocidade do filme (1 = normal)

export function initHeroTimeline() {
  const heroSection = document.querySelector('#inicio');
  const monogramStage = document.querySelector('#heroStageComposition') || document.querySelector('#heroMonogramStage');
  const losangoWrapper = document.querySelector('#heroLosangoWrapper');
  const shineBeam = document.querySelector('#heroShineBeam');
  const header = document.querySelector('.site-header');
  const video = document.querySelector('#heroVideo');

  if (!heroSection) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alreadySeen = sessionStorage.getItem('wp_hero_seen') === 'true';

  let isComplete = false;
  let isRevealed = false;
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

  // Tira o conteúdo e o header da espera do filme (o véu e o fade entram via CSS)
  const endVideoWait = () => {
    isRevealed = true;
    heroSection.classList.remove('hero-video-wait');
    if (header) {
      header.classList.remove('header-intro-hidden');
    }
  };

  // Transição rápida para o estado final (0.6s)
  const skipToFinalState = () => {
    if (isComplete) return;
    isComplete = true;
    clearAllTimeouts();
    endVideoWait();

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

  // Sequência Cronometrada Cinematográfica do conteúdo sobre o filme (Duração total ~3.8s)
  const startRevealSequence = () => {
    if (isRevealed || isComplete) return;
    endVideoWait();

    // 0.0s: Inicia a coreografia (hero-intro-running)
    heroSection.classList.add('hero-intro-running');

    // 1.5s: Losango ganha ativação do glow sutil
    addTimeout(() => {
      if (isComplete) return;
      if (losangoWrapper) {
        losangoWrapper.classList.add('losango-glow-active');
      }
    }, 1500);

    // 3.0s: Feixe de brilho metálico percorre a moldura
    addTimeout(() => {
      if (isComplete) return;
      triggerShinePass();
    }, 3000);

    // 3.8s: Conclusão da abertura (depois da última animação, a dos diferenciais, em 3.5s)
    addTimeout(() => {
      if (isComplete) return;
      isComplete = true;
      heroSection.classList.remove('hero-intro-active');
      heroSection.classList.add('hero-stage-ready');
      if (header) {
        header.classList.add('header-revealed');
      }
      cleanupInterruptionListeners();
      shineTimer = setInterval(triggerShinePass, 8000);
    }, 3800);
  };

  // Sem o filme, devolve o monograma e o glow originais do hero
  const dropVideo = () => {
    heroSection.classList.remove('hero-has-video');
    startRevealSequence();
  };

  // Respeita estritamente se o usuário prefere movimento reduzido: sem filme, emblema final parado
  if (isReducedMotion) {
    if (video) {
      const showFinalFrame = () => {
        video.currentTime = Math.max(video.duration - 0.05, 0);
      };
      if (video.readyState >= 1) showFinalFrame();
      else video.addEventListener('loadedmetadata', showFinalFrame, { once: true });
    }
    skipToFinalState();
    return;
  }

  // Registra ouvintes para interrupção voluntária do usuário (scroll, click, touch)
  setupInterruptionListeners();

  if (video) {
    video.addEventListener('error', dropVideo, { once: true });

    video.defaultPlaybackRate = VIDEO_SPEED;
    video.playbackRate = VIDEO_SPEED;

    // Autoplay bloqueado (ex.: modo economia de energia): fica o 1º frame de fundo
    const playAttempt = video.play();
    if (playAttempt) {
      playAttempt.catch(() => {});
    }
  }

  // O filme roda só como fundo: o conteúdo entra na hora, sem esperar o emblema
  startRevealSequence();

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
