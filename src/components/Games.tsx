import { useLang } from '../i18n/lang-context';
import { Section } from './Section';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';

/** Oyun tasarımı bölümü: piksel pencere + karar günlüğü (görev listesi) + konuşma kutusu. */
export function Games() {
  const { lang, t } = useLang();
  const g = t.games;
  return (
    <Section id="games" index={6} label={t.nav.games} title={g.title} pixel>
      <Reveal>
        <p className="max-w-[62ch] text-muted">{g.intro}</p>
        <p className="mono-tab mt-6 inline-block border-l-4 border-third pl-4 text-[0.95rem]">{g.disclaimer}</p>
      </Reveal>

      <div className="mt-12 space-y-14">
        {g.items.map((item) => (
          <Reveal key={item.id}>
            <article className="pixel-box">
              {/* Pencere çubuğu: ad solda, üç kare sağda */}
              <header className="pixel-bar flex items-center justify-between gap-4 px-4 py-2.5 md:px-6">
                <h3 className="font-pixel text-[clamp(1.35rem,1.1rem+1.2vw,1.9rem)] font-semibold leading-[1.1] tracking-wide text-on-ink">
                  <NoBreak>{item.name}</NoBreak>
                </h3>
                <span aria-hidden="true" className="flex shrink-0 gap-1.5">
                  <i className="pixel-dot" />
                  <i className="pixel-dot" />
                  <i className="pixel-dot" />
                </span>
              </header>

              <div className="p-5 md:p-8">
                <p className="pixel-chip font-pixel text-base tracking-wide text-ink">{item.status}</p>
                <p className="mt-5 max-w-[64ch]">{item.summary}</p>

                <ol className="mt-8 space-y-7">
                  {item.decisions.map((d, i) => (
                    <li key={d.decision} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4">
                      <span aria-hidden="true" className="pixel-check mt-1" />
                      <div>
                        <div className="font-pixel flex flex-wrap gap-x-4 text-base tracking-wide text-muted">
                          <span>
                            {t.ui.decision} {i + 1}/{item.decisions.length}
                          </span>
                          {d.date && <span>{d.date}</span>}
                        </div>
                        <p className="mt-1.5 max-w-[64ch]">{d.decision}</p>
                        {d.quote && (
                          <blockquote className="pixel-box-sm mt-4 max-w-[60ch] px-4 py-3 font-serif text-lg italic leading-snug md:text-xl">
                            {d.quote}
                          </blockquote>
                        )}
                        {d.quoteOriginal && (
                          <p className="mt-3 max-w-[60ch] text-sm text-muted">
                            <span className="font-pixel mr-2 tracking-wide">{t.ui.originalQuote}</span>
                            <q lang={lang === 'en' ? 'tr' : undefined} className="font-serif italic">
                              {d.quoteOriginal}
                            </q>
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
