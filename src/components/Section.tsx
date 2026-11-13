import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';
import { NoBreak } from './NoBreak';

interface Props {
  id: string;
  index: number;
  /** Geniş ekranda numaranın altındaki kısa ad (gezinme adı) */
  label: string;
  title: string;
  tone?: 'yellow' | 'accent' | 'purple';
  pixel?: boolean;
  children: ReactNode;
}

const toneClass = { yellow: 'sticker-yellow', accent: 'sticker-accent', purple: 'sticker-purple' } as const;

export function Section({ id, index, label, title, tone = 'yellow', pixel = false, children }: Props) {
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce<HTMLDivElement>(4);
  const num = String(index).padStart(2, '0');
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative isolate scroll-mt-14 py-14 md:py-24">
      {pixel && <div aria-hidden="true" className="pixel-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Bölüm çizgisi soldan çizilir (hareket 2). Reduced-motion: doğrudan görünür. */}
        <div ref={ref} className="h-[2px] w-full overflow-hidden">
          <motion.div
            className="h-[2px] w-full origin-left bg-ink"
            initial={false}
            animate={{ scaleX: seen || reduced ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: EASE }}
          />
        </div>
        <div className="grid gap-x-10 gap-y-3 pt-5 lg:grid-cols-[12rem_minmax(0,1fr)] lg:pt-8">
          {/* Geniş ekran: numara + ad solda yapışkan sütunda. */}
          <p aria-hidden="true" className="hidden lg:sticky lg:top-20 lg:flex lg:flex-col lg:items-start lg:gap-3 lg:self-start">
            <span className={`sticker ${toneClass[tone]} text-base`}>{num}</span>
            <span className="mono-tab text-sm text-muted">{label}</span>
          </p>
          <div className="min-w-0">
            <div className="flex items-center gap-4">
              {/* Dikey (dar) ekran: numara başlığın solunda. */}
              <span aria-hidden="true" className={`sticker ${toneClass[tone]} shrink-0 text-base lg:hidden`}>{num}</span>
              <h2
                id={`${id}-title`}
                className="min-w-0 text-[clamp(1.9rem,1.4rem+2vw,3rem)] leading-[1.1]"
              >
                <NoBreak>{title}</NoBreak>
              </h2>
            </div>
            <div className="mt-6 md:mt-8">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
