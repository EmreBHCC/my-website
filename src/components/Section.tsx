import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';
import { NoBreak } from './NoBreak';

interface Props {
  id: string;
  index: number;
  /** Gezinme adı (görsel olarak gösterilmez) */
  label?: string;
  title: string;
  tone?: 'yellow' | 'accent' | 'purple';
  pixel?: boolean;
  children: ReactNode;
}

const toneClass = { yellow: 'sticker-yellow', accent: 'sticker-accent', purple: 'sticker-purple' } as const;

export function Section({ id, index, title, tone = 'yellow', pixel = false, children }: Props) {
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
        <div className="pt-5 lg:pt-8">
          <div className="flex items-center gap-4 md:gap-6">
            <span aria-hidden="true" className={`sticker ${toneClass[tone]} shrink-0 text-base`}>{num}</span>
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
    </section>
  );
}
