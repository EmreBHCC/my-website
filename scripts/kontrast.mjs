// Token çiftlerinin WCAG kontrastını ölçer. Kaynak: src/index.css'teki :root blokları.
// Kullanım: node scripts/kontrast.mjs  → her satır oran + PASS/FAIL, çıkış kodu 1 = en az bir FAIL
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');
const blok = (sel) => {
  const m = css.match(new RegExp(sel.replace(/[[\]']/g, '\\$&') + '\\s*\\{([^}]*)\\}'));
  if (!m) throw new Error('blok yok: ' + sel);
  return Object.fromEntries([...m[1].matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((x) => [x[1], x[2]]));
};
const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const oran = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// [ön, arka, eşik]
const ciftler = [
  ['ink', 'paper', 4.5], ['ink', 'surface', 4.5], ['head', 'paper', 3], ['muted', 'paper', 4.5], ['muted', 'surface', 4.5],
  ['accent', 'paper', 4.5], ['accent', 'surface', 4.5], ['second', 'paper', 4.5], ['second', 'surface', 4.5],
  ['third', 'paper', 4.5], ['on-fill', 'fill-yellow', 4.5], ['on-ink', 'ink', 4.5],
];
let fail = 0;
for (const [ad, sel] of [['KOYU', ":root[data-theme='dark']"], ['ACIK', ":root[data-theme='light']"]]) {
  const t = blok(sel);
  for (const [fg, bg, esik] of ciftler) {
    const r = oran(t[fg], t[bg]);
    const ok = r >= esik;
    if (!ok) fail++;
    console.log(`${ad} ${fg.padEnd(11)}/${bg.padEnd(11)} ${r.toFixed(2).padStart(5)} ${ok ? 'PASS' : 'FAIL'} (>=${esik})`);
  }
}
console.log(fail ? `FAIL ${fail}` : 'PASS');
process.exit(fail ? 1 : 0);
