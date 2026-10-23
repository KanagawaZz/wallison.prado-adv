export function applySeo(siteConfig, lawyer) {
  const fullTitle = siteConfig.title;
  const description = siteConfig.description;

  document.title = fullTitle;

  const setMeta = (selector, attribute, value) => {
    let el = document.querySelector(selector);
    if (!el && value) {
      el = document.createElement('meta');
      const [attrName, attrVal] = selector.replace(/[\[\]']/g, '').split('=');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    if (el && value) {
      el.setAttribute(attribute, value);
    }
  };

  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', fullTitle);
  setMeta('meta[property="og:description"]', 'content', 'Orientação e defesa de servidores estaduais, municipais e federais em PAD, progressões, adicionais e licença-prêmio em todo o Mato Grosso.');
  setMeta('meta[property="og:site_name"]', 'content', siteConfig.name);
  setMeta('meta[property="og:type"]', 'content', 'website');
  setMeta('meta[property="og:locale"]', 'content', 'pt_BR');
  // canonical, og:url, og:image e JSON-LD ficam estáticos no index.html (lidos sem JavaScript pelos robôs)
}
