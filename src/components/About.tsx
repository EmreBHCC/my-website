import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { Reveal } from './Reveal';

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <Section id="about" index={1} label={t.nav.about} title={a.title}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <Reveal>
          <div className="max-w-[64ch] space-y-5 text-[1.05rem] leading-relaxed">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <dl className="border-t border-ink">
            {a.facts.map((f) => (
              <div key={f.label} className="border-b border-line py-4">
                <dt className="mono-tab text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
                {f.detail && <dd className="mt-0.5 text-sm text-muted">{f.detail}</dd>}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
