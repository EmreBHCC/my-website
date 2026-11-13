import type { ExperienceItem } from '../content/types';
import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRightIcon } from './Icons';

function Entries({ items }: { items: ExperienceItem[] }) {
  const { t } = useLang();
  return (
    <ul className="border-b border-line">
      {items.map((e) => (
        <li
          key={e.role + e.org + e.period}
          className="grid gap-x-8 gap-y-1 border-t border-line py-5 md:grid-cols-[10rem_minmax(0,1fr)]"
        >
          <div className="mono-tab text-sm text-muted md:pt-1.5">
            <p>{e.period}</p>
            {e.location && <p className="mt-0.5">{e.location}</p>}
          </div>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="font-serif text-xl leading-snug">{e.role}</p>
              {e.tag && <span className="mono-tab text-xs uppercase tracking-wider text-muted">{e.tag}</span>}
            </div>
            <p className="text-muted">{e.org}</p>
            {e.description && <p className="mt-3 max-w-[64ch]">{e.description}</p>}
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
            {e.link && (
              <p className="mt-3 text-[0.95rem]">
                <a
                  href={e.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink inline-flex max-w-full items-baseline gap-1.5 font-medium [overflow-wrap:anywhere]"
                >
                  <span>{e.link.label}</span>
                  <ArrowUpRightIcon className="shrink-0 self-center" />
                  <span className="sr-only">{t.ui.opensInNewTab}</span>
                </a>
              </p>
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
    <Section id="experience" index={3} label={t.nav.experience} title={x.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{x.intro}</p>
      </Reveal>
      <div className="mt-10 space-y-12">
        {x.items.length > 0 && (
          <Reveal>
            <h3 className="mb-4 text-2xl">{x.workTitle}</h3>
            <Entries items={x.items} />
          </Reveal>
        )}
        {x.community.length > 0 && (
          <Reveal>
            <h3 className="mb-4 text-2xl">{x.communityTitle}</h3>
            <Entries items={x.community} />
          </Reveal>
        )}
        {x.education.length > 0 && (
          <Reveal>
            <h3 className="mb-4 text-2xl">{x.educationTitle}</h3>
            <Entries items={x.education} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
