import type { Level, SkillItem } from '../content/types';
import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';

const LEVELS: Level[] = ['hands', 'directed', 'touched'];

/** Seviye işareti şekille kodlu (renge bağlı değil): dolu · yarım · boş kare */
function LevelGlyph({ level }: { level: Level }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false" className="shrink-0">
      <rect x="0.75" y="0.75" width="12.5" height="12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {level === 'hands' && <rect x="0.75" y="0.75" width="12.5" height="12.5" fill="currentColor" />}
      {level === 'directed' && <rect x="0.75" y="0.75" width="6.25" height="12.5" fill="currentColor" />}
    </svg>
  );
}

const byLevel = (items: SkillItem[]) =>
  [...items].sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));

export function Skills() {
  const { t } = useLang();
  const s = t.skills;
  const row = 'grid gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[11rem_11rem_minmax(0,1fr)] sm:items-baseline';
  const rowQuiet = 'grid gap-x-6 gap-y-0.5 border-t border-line py-1.5 sm:grid-cols-[11rem_11rem_minmax(0,1fr)] sm:items-baseline';
  return (
    <Section id="skills" index={5} label={t.nav.skills} title={s.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{s.intro}</p>
      </Reveal>

      {/* Eski sitedeki kategori listeleri */}
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {s.categories.map((c) => (
          <Reveal key={c.title}>
            <h3 className="border-t border-ink pt-3 text-xl"><NoBreak>{c.title}</NoBreak></h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.items.map((it) => (
                <li key={it} className="border border-line bg-surface px-2.5 py-1 text-sm">
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* 2025 sonrası: seviye + kanıt */}
      <div className="mt-16 border-t border-ink pt-8">
        <Reveal>
          <h3 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] leading-[1.1]">{s.aiTitle}</h3>
          <p className="mt-4 max-w-[62ch] text-muted">{s.aiIntro}</p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-3">
            {LEVELS.map((k) => (
              <li key={k} className="flex gap-3 text-sm">
                <span className="mt-1 text-ink">
                  <LevelGlyph level={k} />
                </span>
                <span>
                  <span className="font-semibold">{s.levels[k].label}</span>
                  <span className="block text-muted">{s.levels[k].description}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 space-y-12">
          {s.groups.map((grp) => (
            <Reveal key={grp.title}>
              <h4 className="font-serif text-2xl"><NoBreak>{grp.title}</NoBreak></h4>
              <ul className="mt-4 border-b border-line">
                {byLevel(grp.items).map((it) => {
                  const quiet = it.level === 'touched';
                  return (
                    <li key={it.name} className={quiet ? rowQuiet : row}>
                      <span className={quiet ? 'text-[0.95rem] text-muted' : it.level === 'hands' ? 'font-semibold' : 'font-medium'}>{it.name}</span>
                      <span className={`flex items-center gap-2 text-sm ${quiet ? 'text-muted' : ''}`}>
                        <LevelGlyph level={it.level} />
                        {s.levels[it.level].label}
                      </span>
                      <span className={`mono-tab text-muted ${quiet ? 'text-[0.82rem]' : 'text-[0.88rem]'}`}>{it.evidence}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <h3 className="text-2xl">{s.languages.title}</h3>
        <ul className="mt-4 border-b border-line">
          {s.languages.items.map((l) => (
            <li key={l.name} className="grid gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[11rem_minmax(0,1fr)]">
              <span className="font-medium">{l.name}</span>
              <span className="text-muted">{l.note}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
