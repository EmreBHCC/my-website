import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang-context';
import { useTheme } from '../theme/theme-context';
import { shared } from '../content';
import { ArrowUpRightIcon } from './Icons';
import { EASE } from './ease';
import Aurora from '../bits/Aurora';
import BlurText from '../bits/BlurText';
import RotatingText from '../bits/RotatingText';

const DARK_STOPS = ['#7c5cff', '#ffb27a', '#ffe08a'];
const LIGHT_STOPS = ['#6a4fc2', '#ff9a5c', '#ffd166'];

export function Hero() {
  const { t } = useLang();
  const { theme } = useTheme();
  const reduced = useReducedMotion();
  const h = t.hero;
  const headline = h.headline.join(' ');

  const rise = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.15 : 0.55, ease: EASE, delay: reduced ? 0 : 0.6 + i * 0.12 },
  });

  return (
    <div className="relative isolate overflow-hidden">
      {/* Zemin: Aurora (WebGL2). Reduced-motion'da statik gradyan. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] min-h-[420px]">
        {reduced ? (
          <div className="h-full w-full bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,var(--surface),transparent_70%)]" />
        ) : (
          <Aurora
            key={theme}
            colorStops={theme === 'dark' ? DARK_STOPS : LIGHT_STOPS}
            lightMode={theme === 'light'}
            opacity={theme === 'dark' ? 0.85 : 0.6}
            amplitude={1.1}
            blend={0.6}
            speed={0.6}
            height={0.55}
            glow={0.5}
            mouseInteraction
            intro
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
        <motion.p {...rise(0)}>
          <span className="sticker">{h.eyebrow}</span>
        </motion.p>

        <h1 className="mt-8 max-w-5xl text-[clamp(2.6rem,1.2rem+6vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.02em]">
          <BlurText
            text={headline}
            animateBy="letters"
            direction="bottom"
            delay={reduced ? 0 : 40}
            stepDuration={reduced ? 0.01 : 0.35}
            className="block"
          />
          <span className="mt-2 flex flex-wrap items-baseline gap-x-[0.3em] text-[0.62em] leading-[1.15] text-ink">
            {h.rotating.before && <span>{h.rotating.before}</span>}
            {reduced ? (
              <span className="sticker sticker-orange rotate-0 text-[0.55em]">{h.rotating.roles[0]}</span>
            ) : (
              <RotatingText
                texts={h.rotating.roles}
                effect="flip"
                highlight
                highlightColor="var(--fill-yellow)"
                rotationInterval={2600}
                staggerDuration={0.02}
                splitBy="characters"
                mainClassName="text-on-fill border-2 border-ink shadow-[4px_4px_0_var(--ink)]"
              />
            )}
            {h.rotating.after && <span>{h.rotating.after}</span>}
          </span>
        </h1>

        <motion.div {...rise(1)}>
          <p className="mt-8 max-w-[62ch] text-[1.1rem] text-muted md:text-[1.2rem]">{h.lede}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-comic btn-comic-primary">
              {t.nav.projects}
            </a>
            {shared.cvUrl && (
              <a href={shared.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-comic">
                {h.cta.cv}
                <ArrowUpRightIcon />
                <span className="sr-only">{t.ui.opensInNewTab}</span>
              </a>
            )}
            <a href={shared.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-comic">
              {h.cta.github}
              <ArrowUpRightIcon />
              <span className="sr-only">{t.ui.opensInNewTab}</span>
            </a>
            <a href="#contact" className="btn-comic">
              {h.cta.contact}
            </a>
          </div>

          <p className="mt-10 max-w-[62ch] border-l-4 border-accent pl-4 text-[0.98rem] text-muted">
            {h.bridge.text}{' '}
            <a href="#recent" className="ulink font-medium text-ink">
              {h.bridge.linkLabel}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
