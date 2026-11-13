import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/lang-context';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';

/** "2025 sonrası" bölümünün ilk yarısı: nasıl çalışıyorum. Section sarmalayıcısı Recent.tsx'te. */
export function HowBody() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce<HTMLOListElement>(15);
  const h = t.how;

  return (
    <div>
      <Reveal>
        <h3 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] leading-[1.1]">{h.title}</h3>
        <p className="mt-4 max-w-[62ch] text-muted">{h.intro}</p>
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
                <h4 className="font-serif text-2xl leading-tight"><NoBreak>{s.title}</NoBreak></h4>
                <p className="mt-2 max-w-[56ch] text-[0.98rem] text-muted">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <Reveal className="mt-14">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.proofs.map((p) => (
            <div key={p.label + p.value} className="card-comic flex flex-col p-5">
              <dd className="order-1 mono-tab text-[clamp(2.2rem,1.6rem+2.2vw,3rem)] font-medium leading-none text-accent">
                {p.value}
              </dd>
              <dt className="order-2 mt-3 text-[0.95rem] text-ink">{p.label}</dt>
              <dd className="order-3 mt-4"><span className="sticker sticker-yellow text-xs">{p.date}</span></dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-12">
        <p className="max-w-[60ch] border-l-2 border-accent pl-5 font-serif text-xl leading-snug md:text-2xl">
          {h.note}
        </p>
      </Reveal>
    </div>
  );
}
