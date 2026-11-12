import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';

export function How() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce<HTMLOListElement>(15);
  const h = t.how;

  return (
    <Section id="how" index={1} label={t.nav.how} title={h.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{h.intro}</p>
      </Reveal>

      {/* Hareket 3: adımlar sırayla işaretlenir. Açık (kapanmamış) adım dolmaz. Metin hep görünür. */}
      <ol ref={ref} className="mt-10 max-w-3xl">
        {h.steps.map((s, i) => {
          const open = !!s.open;
          const isLast = i === h.steps.length - 1;
          return (
            <li key={s.title} className="relative flex gap-5 pb-9 last:pb-0 md:gap-7">
              {!isLast && <span aria-hidden="true" className="absolute bottom-0 left-[13px] top-8 w-px bg-ink" />}
              <span
                aria-hidden="true"
                className={`relative z-10 mono-tab inline-flex h-7 w-7 shrink-0 items-center justify-center border text-sm ${open ? 'border-dashed border-ink bg-paper text-ink' : 'border-ink'}`}
              >
                {!open && (
                  <motion.span
                    data-mark
                    className="absolute inset-0 flex items-center justify-center bg-ink text-on-ink"
                    initial={false}
                    animate={{ opacity: seen ? 1 : 0 }}
                    transition={{ duration: reduced ? 0.15 : 0.3, ease: EASE, delay: reduced ? 0 : 0.15 + i * 0.35 }}
                  >
                    {i + 1}
                  </motion.span>
                )}
                {i + 1}
              </span>
              <div className="min-w-0 pt-px">
                <h3 className="text-2xl leading-tight"><NoBreak>{s.title}</NoBreak></h3>
                <p className="mt-2 max-w-[56ch] text-[0.98rem] text-muted">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <Reveal className="mt-14">
        <dl className="grid gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
          {h.proofs.map((p) => (
            <div key={p.label + p.value} className="flex flex-col">
              <dt className="order-2 mt-3 text-[0.95rem] text-ink">{p.label}</dt>
              <dd className="order-1 mono-tab text-[clamp(2.4rem,1.6rem+3vw,3.5rem)] font-medium leading-none text-ink">
                {p.value}
              </dd>
              <dd className="order-3 mono-tab mt-1 text-sm text-muted">{p.date}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-12">
        <p className="max-w-[60ch] border-l-2 border-accent pl-5 font-serif text-xl leading-snug md:text-2xl">
          {h.note}
        </p>
      </Reveal>
    </Section>
  );
}
