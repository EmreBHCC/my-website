// Derlenmiş siteyi gerçek Chrome'da (CDP) doğrular. Önce: npm run build && npm run preview
// Kullanım: node scripts/verify.mjs [url] [chrome-yolu]
// Çıktı: docs/screenshots/<genişlik>-<tema>.png + konsola ölçümler. Node 22 (global WebSocket/fetch).
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const URL_ = process.argv[2] ?? 'http://localhost:4173/';
const CHROME = process.argv[3] ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = resolve('docs/screenshots');
const PORT = 9333;
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const profile = mkdtempSync(join(tmpdir(), 'cdp-'));
const chrome = spawn(
  CHROME,
  ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--disable-gpu', 'about:blank'],
  { stdio: 'ignore' }
);

async function connect() {
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* henüz açılmadı */
    }
    await sleep(200);
  }
  throw new Error('Chrome açılmadı');
}

const ws = new WebSocket(await connect());
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
const problems = [];
const hosts = new Set();
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) {
    pending.get(d.id)(d);
    pending.delete(d.id);
  } else if (d.method === 'Runtime.exceptionThrown') problems.push('exception: ' + d.params.exceptionDetails.text + ' ' + (d.params.exceptionDetails.exception?.description ?? ''));
  else if (d.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(d.params.type)) problems.push('console.' + d.params.type + ': ' + d.params.args.map((a) => a.value ?? a.description).join(' '));
  else if (d.method === 'Log.entryAdded' && ['error', 'warning'].includes(d.params.entry.level)) problems.push('log: ' + d.params.entry.text + ' ' + (d.params.entry.url ?? ''));
  else if (d.method === 'Network.requestWillBeSent') hosts.add(new globalThis.URL(d.params.request.url).host || 'data');
};
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, (d) => (d.error ? rej(new Error(method + ': ' + d.error.message)) : res(d.result)));
    ws.send(JSON.stringify({ id: i, method, params }));
  });
const ev = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error('eval: ' + JSON.stringify(r.exceptionDetails));
  return r.result.value;
};

await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');
await send('Network.enable');

async function open(width, { scheme = 'light', reduced = false, height = 900 } = {}) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  await send('Emulation.setEmulatedMedia', {
    features: [
      { name: 'prefers-color-scheme', value: scheme },
      { name: 'prefers-reduced-motion', value: reduced ? 'reduce' : 'no-preference' },
    ],
  });
  await send('Page.navigate', { url: URL_ });
  await sleep(1500);
}

async function scrollThrough() {
  const h = await ev('document.documentElement.scrollHeight');
  for (let y = 0; y <= h; y += 500) {
    await ev(`window.scrollTo(0, ${y})`);
    await sleep(120);
  }
  await sleep(1500);
  await ev('window.scrollTo(0, 0)');
  await sleep(400);
}

const results = [];
// 1) Ekran görüntüleri: 3 genişlik x 2 tema
for (const width of [390, 820, 1440]) {
  for (const scheme of ['light', 'dark']) {
    await send('Page.navigate', { url: 'about:blank' });
    await open(width, { scheme });
    await ev("try{localStorage.clear()}catch(e){}");
    await send('Page.reload');
    await sleep(1500);
    await scrollThrough();
    const m = await ev(`(() => {
      const d = document.documentElement;
      return { theme: d.dataset.theme, lang: d.lang, title: document.title, sw: d.scrollWidth, iw: window.innerWidth, h: d.scrollHeight,
        fonts: [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+' '+f.weight+(f.style==='italic'?'i':'')).join('|') };
    })()`);
    const full = m.h;
    await send('Emulation.setDeviceMetricsOverride', { width, height: full, deviceScaleFactor: 1, mobile: false });
    await sleep(500);
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const file = join(OUT, `${width}-${scheme}.png`);
    await writeFile(file, Buffer.from(shot.data, 'base64'));
    results.push({ file, ...m, overflowX: m.sw > m.iw });
  }
}
console.log('EKRAN GORUNTULERI'); for (const r of results) console.log(JSON.stringify(r));

// 2) Dil düğmesi iki yönde + yenilemede hatırlama
await open(1440, { scheme: 'light' });
await ev("try{localStorage.clear()}catch(e){}");
await send('Page.reload'); await sleep(1200);
const langBtn = `[...document.querySelectorAll('header button')].find(b=>/^(EN|TR)$/.test(b.textContent.trim()))`;
const state = () => ev(`({lang:document.documentElement.lang,title:document.title,h1:document.querySelector('h1').textContent,btn:${langBtn}.textContent,stored:localStorage.getItem('lang')})`);
const lang = { start: await state() };
await ev(`${langBtn}.click()`); await sleep(500);
lang.afterFirstClick = await state();
await send('Page.reload'); await sleep(1200);
lang.afterReload = await state();
await ev(`${langBtn}.click()`); await sleep(500);
lang.afterSecondClick = await state();
console.log('DIL', JSON.stringify(lang, null, 1));

// 3) Tema düğmesi + saklama
const themeBtn = `document.querySelectorAll('header button')[1]`;
const th0 = await ev(`document.documentElement.dataset.theme`);
await ev(`${themeBtn}.click()`); await sleep(500);
const th1 = await ev(`[document.documentElement.dataset.theme, localStorage.getItem('theme')]`);
await send('Page.reload'); await sleep(1200);
const th2 = await ev(`document.documentElement.dataset.theme`);
console.log('TEMA', JSON.stringify({ baslangic: th0, tikSonrasi: th1, yenilemeSonrasi: th2 }));

// 4) Reduced-motion açık/kapalı: en alta atla, son içerik görünür mü (opaklık/transform)
for (const reduced of [false, true]) {
  await open(1440, { scheme: 'light', reduced });
  await ev("try{localStorage.clear()}catch(e){}");
  await send('Page.reload'); await sleep(1200);
  await ev('window.scrollTo(0, document.documentElement.scrollHeight)');
  await sleep(1800);
  const r = await ev(`(() => {
    const els = [...document.querySelectorAll('[data-reveal]')];
    const last = els[els.length-1];
    const cs = getComputedStyle(last);
    const rule = document.querySelector('#contact div.origin-left, #contact .origin-left');
    return { reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, count: els.length, lastOpacity: cs.opacity, lastTransform: cs.transform,
      minOpacityAll: Math.min(...els.map(e=>+getComputedStyle(e).opacity)),
      lastRect: last.getBoundingClientRect().toJSON(), vh: innerHeight, text: last.textContent.slice(0,60),
      ruleTransform: rule ? getComputedStyle(rule).transform : null };
  })()`);
  console.log('HAREKET reduced=' + reduced, JSON.stringify(r));
}

// 5) Tam akış sonrası (kaydırmadan) ilk ekran: hero satırları yerinde mi (reduced kapalı)
// 6) Bölüm bazlı görünüm görüntüleri (ayrıntı için)
for (const [w, scheme] of [[390, 'dark'], [1440, 'light']]) {
  await open(w, { scheme, height: 900 });
  await ev("try{localStorage.clear()}catch(e){}");
  await send('Page.reload'); await sleep(1200);
  await scrollThrough();
  for (const id of ['top', 'how', 'work', 'games', 'skills']) {
    await ev(`(() => { const e = document.getElementById('${id}'); window.scrollTo(0, e ? e.getBoundingClientRect().top + scrollY - 52 : 0); })()`);
    await sleep(900);
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    await writeFile(join(OUT, `v-${w}-${scheme}-${id}.png`), Buffer.from(shot.data, 'base64'));
  }
}
console.log('DIS ISTEKLER (host)', [...hosts].join(', '));
console.log('KONSOL SORUNLARI', problems.length ? problems : 'yok');

ws.close();
chrome.kill();
await sleep(500);
try { rmSync(profile, { recursive: true, force: true }); } catch { /* kilitli olabilir */ }
