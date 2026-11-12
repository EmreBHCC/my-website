import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';

export function Games() {
  const { lang, t } = useLang();
  const g = t.games;
  return (
    <Section id="games" index={3} label={t.nav.games} title={g.title}>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{g.intro}</p>
        <p className="mono-tab mt-6 inline-block border-l-2 border-accent pl-4 text-[0.95rem]">{g.disclaimer}</p>
      </Reveal>

      <div className="mt-10 space-y-14">
        {g.items.map((item) => (
          <Reveal key={item.id}>
            <article className="border-t border-ink pt-8">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <h3 className="text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] leading-[1.1]"><NoBreak>{item.name}</NoBreak></h3>
                <span className="mono-tab text-sm text-muted">{item.status}</span>
              </div>
              <p className="mt-4 max-w-[64ch]">{item.summary}</p>

              <ol className="mt-8 space-y-8 border-l border-line pl-5 sm:pl-8">
                {item.decisions.map((d) => (
                  <li key={d.decision} className="relative">
                    <span aria-hidden="true" className="absolute -left-[1.45rem] top-[0.55rem] h-2 w-2 bg-ink sm:-left-[2.45rem]" />
                    <div className="mono-tab flex flex-wrap gap-x-4 text-sm text-muted">
                      <span>{t.ui.decision}</span>
                      {d.date && <span>{d.date}</span>}
                    </div>
                    <p className="mt-1 max-w-[64ch]">{d.decision}</p>
                    {d.quote && (
                      <blockquote className="mt-3 max-w-[60ch] border-l-2 border-line pl-4 font-serif text-lg italic leading-snug md:text-xl">
                        {d.quote}
                      </blockquote>
                    )}
                    {d.quoteOriginal && (
                      <p className="mt-2 max-w-[60ch] pl-4 text-sm text-muted">
                        <span className="mono-tab mr-2">{t.ui.originalQuote}</span>
                        <q lang={lang === 'en' ? 'tr' : undefined} className="font-serif italic">
                          {d.quoteOriginal}
                        </q>
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
