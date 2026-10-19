import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { TrustBar } from './components/TrustBar.js';
import { PracticeAreas } from './components/PracticeAreas.js';
import { HowItWorks } from './components/HowItWorks.js';
import { Myths } from './components/Myths.js';
import { Audience } from './components/Audience.js';
import { InstitutionalPillars } from './components/InstitutionalPillars.js';
import { About } from './components/About.js';
import { FAQ } from './components/FAQ.js';
import { FinalCTA } from './components/FinalCTA.js';
import { Footer } from './components/Footer.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';

import { lawyer } from './data/lawyer.js';
import { siteConfig } from './data/siteConfig.js';
import { navigation } from './data/navigation.js';
import { trustBadges } from './data/trustBadges.js';
import { practiceAreas } from './data/practiceAreas.js';
import { steps } from './data/steps.js';
import { audience } from './data/audience.js';
import { myths } from './data/myths.js';
import { faq } from './data/faq.js';

import { applySeo } from './utils/seo.js';
import { initScrollAnimations } from './utils/scrollAnimations.js';
import { init3DEffects } from './utils/tilt3d.js';

// Aplica SEO dinâmico
applySeo(siteConfig, lawyer);

const app = document.querySelector('#app');

app.innerHTML = `
  ${Header({ navigation, siteConfig, lawyer })}
  <main>
    ${Hero({ lawyer, siteConfig })}
    ${TrustBar({ trustBadges })}
    ${PracticeAreas({ practiceAreas, siteConfig })}
    ${HowItWorks({ steps, siteConfig })}
    ${Myths({ myths, siteConfig })}
    ${Audience({ audience })}
    ${InstitutionalPillars({ siteConfig })}
    ${About({ lawyer, siteConfig })}
    ${FAQ({ faq, siteConfig })}
    ${FinalCTA({ siteConfig, lawyer })}
  </main>
  ${Footer({ lawyer, siteConfig })}
  ${WhatsAppButton({ siteConfig })}
`;

// Respeita a preferência de movimento reduzido: pausa o vídeo de fundo do hero
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video.hero-bg-video').forEach((video) => {
    video.removeAttribute('autoplay');
    video.pause();
  });
}

// Inicializa as animações de scroll e interatividade
initScrollAnimations();
init3DEffects();
