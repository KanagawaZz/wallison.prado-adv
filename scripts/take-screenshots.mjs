import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9225;
const USER_DATA = path.join(process.env.TEMP || 'C:\\Temp', 'chrome_cdp_profile_' + Date.now());

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const data = await res.json();
      if (data.webSocketDebuggerUrl) return data.webSocketDebuggerUrl;
    } catch (e) {
      await sleep(300);
    }
  }
  throw new Error('Could not connect to Chrome debugging port');
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function capture() {
  const outputDir = path.resolve('screenshots');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const chromeProc = spawn(
    CHROME_PATH,
    [
      '--headless=new',
      '--no-sandbox',
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${USER_DATA}`,
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  try {
    const wsUrl = await getWsUrl();
    const cdp = new CDPClient(wsUrl);
    await cdp.connect();

    // Create a new target/page
    const { targetId } = await cdp.send('Target.createTarget', { url: 'http://localhost:5173/' });
    const targetWsUrl = `ws://127.0.0.1:${PORT}/devtools/page/${targetId}`;
    const pageCdp = new CDPClient(targetWsUrl);
    await pageCdp.connect();

    await pageCdp.send('Page.enable');
    await pageCdp.send('DOM.enable');
    await pageCdp.send('Runtime.enable');

    await sleep(2000); // Wait for page hydration & initial render

    const viewports = [
      { name: '1440px', width: 1440, height: 900, mobile: false },
      { name: '1920px', width: 1920, height: 1080, mobile: false },
      { name: '390px', width: 390, height: 844, mobile: true },
    ];

    const sections = [
      { id: 'inicio', name: 'hero' },
      { id: 'sobre', name: 'sobre' },
      { selector: '.about-pillars-container', name: 'sobre_cards' },
      { id: 'atuacao', name: 'atuacao' },
      { id: 'como-funciona', name: 'como_funciona' },
      { id: 'duvidas', name: 'faq' },
    ];

    for (const vp of viewports) {
      console.log(`Setting viewport: ${vp.name} (${vp.width}x${vp.height})`);
      await pageCdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile,
      });

      // Reload or navigate to trigger proper layout and animations
      await pageCdp.send('Page.navigate', { url: 'http://localhost:5173/' });
      await sleep(1500);

      // Force any reveal animations to completed state and disable smooth scroll
      await pageCdp.send('Runtime.evaluate', {
        expression: `
          document.documentElement.style.scrollBehavior = 'auto';
          document.body.style.scrollBehavior = 'auto';
          document.querySelectorAll('[data-reveal], [data-reveal-card], .hero-copy, .hero-visual-col').forEach(el => {
            el.classList.add('is-visible');
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'none';
          });
          const hero = document.querySelector('#inicio');
          if (hero) {
            hero.classList.remove('hero-intro-active');
            hero.classList.add('hero-stage-ready');
          }
        `,
      });

      if (vp.name === '390px') {
        // 1. Primeira tela sem rolar (exact 390x844 above-the-fold)
        await pageCdp.send('Runtime.evaluate', {
          expression: `window.scrollTo(0, 0);`,
        });
        await sleep(300);
        const { data: firstScreenData } = await pageCdp.send('Page.captureScreenshot', {
          format: 'png',
        });
        const firstScreenPath = path.join(outputDir, 'hero_390px.png');
        fs.writeFileSync(firstScreenPath, Buffer.from(firstScreenData, 'base64'));
        console.log(`Saved above-the-fold first screen: ${firstScreenPath}`);

        // 2. Página inteira no mobile (full page screenshot)
        const { data: fullPageData } = await pageCdp.send('Page.captureScreenshot', {
          format: 'png',
          captureBeyondViewport: true,
        });
        const fullPagePath = path.join(outputDir, 'full_390px.png');
        fs.writeFileSync(fullPagePath, Buffer.from(fullPageData, 'base64'));
        console.log(`Saved full mobile page: ${fullPagePath}`);
      }

      for (const sec of sections) {
        console.log(`Capturing ${sec.name} at ${vp.name}...`);
        
        // Instant scroll to the target element
        const scrollResult = await pageCdp.send('Runtime.evaluate', {
          expression: `
            (() => {
              const sel = ${JSON.stringify(sec.selector || '#' + sec.id)};
              const target = document.querySelector(sel);
              if (target) {
                target.scrollIntoView({ behavior: 'instant', block: 'start' });
                return { found: true, y: window.scrollY };
              }
              return { found: false, y: window.scrollY };
            })()
          `,
          returnByValue: true,
        });

        console.log('Scroll target result:', scrollResult.result?.value);

        await sleep(400); // Allow render cycle

        const { data } = await pageCdp.send('Page.captureScreenshot', {
          format: 'png',
        });

        const filePath = path.join(outputDir, `${sec.name}_${vp.name}.png`);
        fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
        console.log(`Saved: ${filePath}`);
      }
    }

    pageCdp.close();
    cdp.close();
  } finally {
    chromeProc.kill();
    try {
      fs.rmSync(USER_DATA, { recursive: true, force: true });
    } catch (e) {}
  }
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
