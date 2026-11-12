import type { ExperienceItem } from '../content/types';
import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { Reveal } from './Reveal';

function Entries({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="border-b border-line">
      {items.map((e) => (
        <li
          key={e.role + e.org + e.period}
          className="grid gap-x-8 gap-y-1 border-t border-line py-5 md:grid-cols-[10rem_minmax(0,1fr)]"
        >
          <span className="mono-tab text-sm text-muted md:pt-1.5">{e.period}</span>
          <div>
            <p className="font-serif text-xl leading-snug">{e.role}</p>
            <p className="text-muted">{e.org}</p>
            {e.points.length > 0 && (
              <ul className="mt-3 max-w-[64ch] space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="relative pl-5 text-[0.98rem]">
                    <span aria-hidden="true" className="absolute left-0 top-[0.72em] h-px w-3 bg-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  const { t } = useLang();
  const x = t.experience;
  return (
    <Section id="experience" index={5} label={t.nav.experience} title={x.title}>
      <div className="space-y-12">
        {x.items.length > 0 && (
          <Reveal>
            <Entries items={x.items} />
          </Reveal>
        )}
        {x.education.length > 0 && (
          <Reveal>
            <h3 className="mb-4 text-2xl">{x.educationTitle}</h3>
            <Entries items={x.education} />
          </Reveal>
        )}
        {x.community.length > 0 && (
          <Reveal>
            <h3 className="mb-4 text-2xl">{x.communityTitle}</h3>
            <Entries items={x.community} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
