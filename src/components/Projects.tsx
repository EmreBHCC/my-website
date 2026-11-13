import type { CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { ProjectItem } from '../content/types';
import { useTheme } from '../theme/theme-context';
import SpotlightCard from '../bits/SpotlightCard';
import { useLang } from '../i18n/lang-context';
import { shared } from '../content';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';
import { ArrowUpRightIcon } from './Icons';

function ProjectRow({ item }: { item: ProjectItem }) {
  const { t } = useLang();
  const { theme } = useTheme();
  const reduced = useReducedMotion();
  const inner = (
    <article>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <h3 className="text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] leading-[1.1]">
              <NoBreak>{item.name}</NoBreak>
            </h3>
            <span className="sticker text-xs">{item.period}</span>
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
              <li key={tech} className="border-2 border-ink bg-paper px-2.5 py-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
  return (
    <Reveal>
      {reduced ? (
        <div className="card-comic p-6 md:p-8">{inner}</div>
      ) : (
        <SpotlightCard
          theme={theme}
          spotlightColor="var(--accent)"
          intensity={0.22}
          spotlightSize={320}
          borderGlow={0.8}
          grain={0}
          className="card-comic !rounded-[4px] !p-6 md:!p-8"
          style={
            {
              '--spotlight-card-surface': 'var(--surface)',
              '--spotlight-card-border': 'transparent',
              '--spotlight-card-shadow': '6px 6px 0 var(--ink)',
            } as CSSProperties
          }
        >
          {inner}
        </SpotlightCard>
      )}
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
      <div className="mt-10 grid gap-8">
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
