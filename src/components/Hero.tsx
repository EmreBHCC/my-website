import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang-context';
import { shared } from '../content';
import { ArrowUpRightIcon } from './Icons';
import { EASE } from './ease';

const btn =
  'inline-flex items-center gap-2 border border-ink px-5 py-3 text-[0.95rem] font-medium transition-colors';
const btnPrimary = `${btn} bg-ink text-on-ink hover:bg-transparent hover:text-ink`;
const btnSecondary = `${btn} text-ink hover:bg-surface`;

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const h = t.hero;

  // Hareket 1: satırlar sırayla yerine oturur, bir kez.
  const line = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.15 : 0.55, ease: EASE, delay: reduced ? 0 : 0.08 + i * 0.12 },
  });

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
      <motion.p {...line(0)} className="mono-tab flex items-center gap-3 text-sm text-muted">
        <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 bg-accent" />
        <span>{h.eyebrow}</span>
      </motion.p>

      <h1 className="mt-6 max-w-4xl text-[clamp(2.35rem,1.2rem+5.6vw,5.25rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        {h.headline.map((l, i) => (
          <motion.span key={l} {...line(i + 1)} className="block">
            {l}
          </motion.span>
        ))}
      </h1>

      <motion.div {...line(h.headline.length + 1)}>
        <p className="mt-8 max-w-[62ch] text-[1.1rem] text-muted md:text-[1.2rem]">{h.lede}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className={btnPrimary}>
            {h.cta.contact}
          </a>
          {shared.cvUrl && (
            <a href={shared.cvUrl} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              {h.cta.cv}
              <ArrowUpRightIcon />
              <span className="sr-only">{t.ui.opensInNewTab}</span>
            </a>
          )}
          <a href={shared.githubUrl} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
            {h.cta.github}
            <ArrowUpRightIcon />
            <span className="sr-only">{t.ui.opensInNewTab}</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
