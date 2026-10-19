import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { NameBanner } from './components/NameBanner.js';
import { TrustBar } from './components/TrustBar.js';
import { About } from './components/About.js';
import { PracticeAreas } from './components/PracticeAreas.js';
import { HowItWorks } from './components/HowItWorks.js';
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
import { faq } from './data/faq.js';

import { applySeo } from './utils/seo.js';
import { initHeroTimeline } from './utils/heroTimeline.js';
import { initScrollAnimations, initAboutLight } from './utils/scrollAnimations.js';
import { init3DEffects } from './utils/tilt3d.js';

// Aplica SEO dinâmico
applySeo(siteConfig, lawyer);

const app = document.querySelector('#app');

// Ordem estrita: Hero → Faixa de nome → TrustBar → About → PracticeAreas → HowItWorks → FAQ → FinalCTA → Footer
app.innerHTML = `
  ${Header({ navigation, siteConfig, lawyer })}
  <main>
    ${Hero({ lawyer, siteConfig })}
    ${NameBanner({ lawyer, siteConfig })}
    ${TrustBar({ trustBadges })}
    ${About({ lawyer, siteConfig })}
    ${PracticeAreas({ practiceAreas, siteConfig })}
    ${HowItWorks({ steps, siteConfig })}
    ${FAQ({ faq, siteConfig })}
    ${FinalCTA({ siteConfig, lawyer })}
  </main>
  ${Footer({ lawyer, siteConfig })}
  ${WhatsAppButton({ siteConfig })}
`;
// Apply losango option based on URL parameter
const losangoParam = new URLSearchParams(window.location.search).get('losango');
if (losangoParam === '2') {
  const losangoWrapper = document.getElementById('heroLosangoWrapper');
  losangoWrapper?.classList.add('option-2');
}

// Inicialização orquestrada
initHeroTimeline();
initScrollAnimations();
initAboutLight();
init3DEffects();
