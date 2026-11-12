import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { CheckIcon } from './Icons';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';

export function How() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce<HTMLOListElement>('0px 0px -15% 0px');
  const h = t.how;
  const last = h.steps.length - 1;

  return (
    <Section id="how" index={1} label={t.nav.how} title={h.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{h.intro}</p>
      </Reveal>

      {/* Hareket 3: adımlar sırayla işaretlenir, kapı işareti en son yanar. Metin hep görünür. */}
      <ol ref={ref} className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
        {h.steps.map((s, i) => {
          const gate = i === last;
          return (
            <li key={s.title} className="border-t border-ink pt-4">
              <div className="flex items-center gap-3">
                <span
                  className={`relative inline-flex h-6 w-6 items-center justify-center border ${gate ? 'border-accent' : 'border-ink'}`}
                >
                  <motion.span
                    data-mark
                    aria-hidden="true"
                    className={`absolute inset-0 flex items-center justify-center ${gate ? 'bg-accent text-paper' : 'bg-ink text-on-ink'}`}
                    initial={false}
                    animate={{ opacity: seen ? 1 : 0 }}
                    transition={{
                      duration: reduced ? 0.15 : 0.3,
                      ease: EASE,
                      delay: reduced ? 0 : 0.15 + i * 0.35 + (gate ? 0.25 : 0),
                    }}
                  >
                    <CheckIcon />
                  </motion.span>
                </span>
                <span className="mono-tab text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 text-2xl leading-tight">{s.title}</h3>
              <p className="mt-2 text-[0.98rem] text-muted">{s.body}</p>
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
