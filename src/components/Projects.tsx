import type { ProjectItem } from '../content/types';
import { useLang } from '../i18n/lang-context';
import { shared } from '../content';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';
import { ArrowUpRightIcon } from './Icons';

function ProjectRow({ item }: { item: ProjectItem }) {
  const { t } = useLang();
  return (
    <Reveal>
      <article className="group relative border-t border-ink py-8 pl-4 sm:pl-6 md:py-10">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <h3 className="text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] leading-[1.1]">
                <NoBreak>{item.name}</NoBreak>
              </h3>
              <span className="mono-tab text-sm text-muted">{item.period}</span>
            </div>
            <p className="mt-4 max-w-[64ch]">{item.description}</p>
            <p className="mono-tab mt-6 text-xs uppercase tracking-wider text-muted">{t.ui.highlights}</p>
            <ul className="mt-2 max-w-[64ch] space-y-1.5">
              {item.highlights.map((h) => (
                <li key={h} className="relative pl-5 text-[0.98rem]">
                  <span aria-hidden="true" className="absolute left-0 top-[0.72em] h-px w-3 bg-ink" />
                  {h}
                </li>
              ))}
            </ul>
            {item.link && (
              <p className="mt-5 text-[0.95rem]">
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink inline-flex max-w-full items-baseline gap-1.5 font-medium [overflow-wrap:anywhere]"
                >
                  <span>{item.link.label}</span>
                  <ArrowUpRightIcon className="shrink-0 self-center" />
                  <span className="sr-only">{t.ui.opensInNewTab}</span>
                </a>
              </p>
            )}
          </div>
          <div>
            <p className="mono-tab text-xs uppercase tracking-wider text-muted">{t.ui.technologies}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech} className="border border-line bg-surface px-2.5 py-1 text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLang();
  const p = t.projects;
  return (
    <Section id="projects" index={2} label={t.nav.projects} title={p.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{p.intro}</p>
      </Reveal>
      <div className="mt-10 border-b border-ink">
        {p.items.map((item) => (
          <ProjectRow key={item.id} item={item} />
        ))}
      </div>
      <Reveal className="mt-8">
        <a
          href={shared.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ulink inline-flex items-baseline gap-1.5 font-medium"
        >
          {p.moreOnGithub}
          <ArrowUpRightIcon className="shrink-0 self-center" />
          <span className="sr-only">{t.ui.opensInNewTab}</span>
        </a>
      </Reveal>
    </Section>
  );
}
