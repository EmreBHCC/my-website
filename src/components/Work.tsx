import type { Track, WorkItem } from '../content/types';
import { useLang } from '../i18n/lang-context';
import { NoBreak } from './NoBreak';
import { Reveal } from './Reveal';
import { ArrowUpRightIcon } from './Icons';

const TRACKS: Track[] = ['ai', 'product', 'game'];

const trackTone: Record<Track, string> = {
  ai: 'sticker-pink',
  product: '',
  game: 'sticker-purple',
};

function TrackTag({ track, label }: { track: Track; label: string }) {
  return (
    <span className={`sticker text-xs ${trackTone[track]}`}>{label}</span>
  );
}

function ShareList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((x) => (
        <li key={x} className="relative pl-5 text-[0.98rem]">
          <span aria-hidden="true" className="absolute left-0 top-[0.72em] h-px w-3 bg-ink" />
          {x}
        </li>
      ))}
    </ul>
  );
}

export function WorkRow({ item }: { item: WorkItem }) {
  const { t } = useLang();
  const big = !!item.featured;
  return (
    <Reveal>
      <article
        className={`group relative border-t border-ink pl-4 sm:pl-6 ${big ? 'py-10 md:py-14' : 'py-8 md:py-10'}`}
      >
        {/* Etkileşim: vaka satırında kenar işareti belirir */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
        />
        <header>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <TrackTag track={item.track} label={t.tracks[item.track].label} />
            <span className="mono-tab text-sm text-muted">{item.status}</span>
            <span className="mono-tab text-sm text-muted">{item.period}</span>
          </div>
          <h3
            className={`mt-3 leading-[1.1] ${big ? 'text-[clamp(2rem,1.4rem+2.6vw,3.25rem)]' : 'text-[clamp(1.5rem,1.2rem+1.2vw,2rem)]'}`}
          >
            <NoBreak>{item.name}</NoBreak>
          </h3>
        </header>

        <div className="mt-5 max-w-[68ch]">
          <p className="mono-tab text-xs uppercase tracking-wider text-muted">{t.ui.problem}</p>
          <p className={`mt-1 ${big ? 'font-serif text-xl leading-snug md:text-2xl' : ''}`}>{item.problem}</p>
        </div>

        {/* İmza öğe: Benim payım | Yapay zekânın payı */}
        <div className="card-comic mt-8 grid md:grid-cols-2">
          <div className="p-5 md:border-r-2 md:border-ink">
            <h4 className="font-sans text-sm font-semibold text-ink">{t.ui.mine}</h4>
            <ShareList items={item.mine} />
          </div>
          <div className="border-t-2 border-ink p-5 md:border-t-0">
            <h4 className="font-sans text-sm font-semibold text-muted">{t.ui.ai}</h4>
            <ShareList items={item.ai} />
          </div>
        </div>

        <div className={`mt-6 ${big ? 'bg-surface p-5 md:p-6' : ''}`}>
          <p className="mono-tab text-xs uppercase tracking-wider text-muted">{t.ui.evidence}</p>
          <ul className="mt-2 space-y-1.5">
            {item.evidence.map((e) => (
              <li key={e} className={`mono-tab relative pl-5 ${big ? 'text-[1rem]' : 'text-[0.92rem]'}`}>
                <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-2 w-2 bg-accent" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        {item.link && (
          <p className="mt-6 text-[0.95rem]">
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
      </article>
    </Reveal>
  );
}

/** "2025 sonrası" bölümünün ikinci yarısı; Section sarmalayıcısı Recent.tsx'te. */
export function WorkBody() {
  const { t } = useLang();
  const w = t.work;
  return (
    <div className="mt-16 border-t border-ink pt-8 md:mt-20">
      <Reveal>
        <h3 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] leading-[1.1]">{w.title}</h3>
        <p className="mt-4 max-w-[62ch] text-muted">{w.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {TRACKS.filter((k) => w.items.some((i) => i.track === k)).map((k) => (
            <li key={k} className="text-sm">
              <TrackTag track={k} label={t.tracks[k].label} />
              <span className="ml-2 text-muted">{t.tracks[k].note}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-10">
        {w.items.map((item) => (
          <WorkRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
