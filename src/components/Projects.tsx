import { useCallback, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { ProjectItem } from "../content/types";
import { useLang } from "../i18n/lang-context";
import { shared } from "../content";
import { Section } from "./Section";
import { NoBreak } from "./NoBreak";
import { Reveal } from "./Reveal";
import { TechPreview } from "./TechPreview";
import { ArrowUpRightIcon } from "./Icons";
import { CardModal, PlusIcon } from "./CardModal";

const PREVIEW_TECHS = 3;

function ProjectCard({
  item,
  onOpen,
  hidden,
  buttonRef,
}: {
  item: ProjectItem;
  onOpen: () => void;
  hidden: boolean;
  buttonRef: (el: HTMLButtonElement | null) => void;
}) {
  const extra = item.technologies.length - PREVIEW_TECHS;
  return (
    <motion.button
      ref={buttonRef}
      type="button"
      layoutId={`project-card-${item.id}`}
      onClick={onOpen}
      aria-haspopup="dialog"
      className="card-comic group flex h-full w-full flex-col p-6 text-left transition-colors hover:border-accent focus-visible:outline-offset-4"
      style={{ visibility: hidden ? "hidden" : "visible" }}
    >
      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <h3 className="text-[clamp(1.35rem,1.1rem+1vw,1.75rem)] leading-[1.1]">
          <NoBreak>{item.name}</NoBreak>
        </h3>
        <span className="sticker text-xs">{item.period}</span>
      </span>
      <span className="mt-4 line-clamp-2 max-w-[56ch] text-[0.98rem] text-muted">
        {item.description}
      </span>
      <span className="mt-auto flex items-end justify-between gap-4 pt-5">
        <span className="flex flex-wrap gap-2">
          {item.technologies.slice(0, PREVIEW_TECHS).map((tech) => (
            <span
              key={tech}
              className="border-2 border-ink bg-paper px-2 py-0.5 text-xs"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="mono-tab px-1 py-0.5 text-xs text-muted">
              +{extra}
            </span>
          )}
        </span>
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-paper transition-transform group-hover:rotate-90"
        >
          <PlusIcon />
        </span>
      </span>
    </motion.button>
  );
}

function ProjectModal({
  item,
  onClose,
}: {
  item: ProjectItem;
  onClose: () => void;
}) {
  const { t } = useLang();
  const titleId = `project-title-${item.id}`;
  return (
    <CardModal
      layoutId={`project-card-${item.id}`}
      titleId={titleId}
      onClose={onClose}
    >
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 pr-12">
        <h3
          id={titleId}
          className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-[1.1]"
        >
          <NoBreak>{item.name}</NoBreak>
        </h3>
        <span className="sticker text-xs">{item.period}</span>
      </div>
      <p className="mt-5 max-w-[64ch]">{item.description}</p>

      <p className="mono-tab mt-7 text-xs uppercase tracking-wider text-muted">
        {t.ui.highlights}
      </p>
      <ul className="mt-2 max-w-[64ch] space-y-1.5">
        {item.highlights.map((h) => (
          <li key={h} className="relative pl-5 text-[0.98rem]">
            <span
              aria-hidden="true"
              className="absolute left-0 top-[0.72em] h-px w-3 bg-ink"
            />
            {h}
          </li>
        ))}
      </ul>

      <p className="mono-tab mt-7 text-xs uppercase tracking-wider text-muted">
        {t.ui.technologies}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <li
            key={tech}
            className="border-2 border-ink bg-paper px-2.5 py-1 text-sm"
          >
            <TechPreview label={tech} />
          </li>
        ))}
      </ul>

      {item.link && (
        <p className="mt-7 text-[0.95rem]">
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
    </CardModal>
  );
}

export function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [openId, setOpenId] = useState<string | null>(null);
  const buttons = useRef(new Map<string, HTMLButtonElement | null>());
  const open = p.items.find((i) => i.id === openId) ?? null;

  const close = useCallback(() => {
    setOpenId((id) => {
      if (id) setTimeout(() => buttons.current.get(id)?.focus(), 0);
      return null;
    });
  }, []);

  return (
    <Section id="projects" index={4} label={t.nav.projects} title={p.title}>
      <MotionConfig reducedMotion="user">
        <Reveal>
          <p className="max-w-[62ch] text-muted">{p.intro}</p>
        </Reveal>
        <div className="mt-10 grid gap-5">
          {p.items.map((item) => (
            <Reveal key={item.id} className="h-full">
              <ProjectCard
                item={item}
                onOpen={() => setOpenId(item.id)}
                hidden={openId === item.id}
                buttonRef={(el) => buttons.current.set(item.id, el)}
              />
            </Reveal>
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
        <AnimatePresence>
          {open && <ProjectModal key={open.id} item={open} onClose={close} />}
        </AnimatePresence>
      </MotionConfig>
    </Section>
  );
}
