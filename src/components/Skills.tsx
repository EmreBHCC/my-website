import type { Level } from '../content/types';
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

export function Skills() {
  const { t } = useLang();
  const s = t.skills;
  const row = 'grid gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[11rem_11rem_minmax(0,1fr)] sm:items-baseline';
  return (
    <Section id="skills" index={4} label={t.nav.skills} title={s.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{s.intro}</p>
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

      <div className="mt-12 space-y-12">
        {s.groups.map((grp) => (
          <Reveal key={grp.title}>
            <h3 className="text-2xl"><NoBreak>{grp.title}</NoBreak></h3>
            <ul className="mt-4 border-b border-line">
              {grp.items.map((it) => (
                <li key={it.name} className={row}>
                  <span className="font-medium">{it.name}</span>
                  <span className="flex items-center gap-2 text-sm">
                    <LevelGlyph level={it.level} />
                    {s.levels[it.level].label}
                  </span>
                  <span className="mono-tab text-[0.88rem] text-muted">{it.evidence}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal>
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
      </div>
    </Section>
  );
}
