import { useCallback, useId, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { Track, WorkItem } from "../content/types";
import { useLang } from "../i18n/lang-context";
import { NoBreak } from "./NoBreak";
import { Reveal } from "./Reveal";
import { ArrowUpRightIcon } from "./Icons";
import { CardModal, PlusIcon } from "./CardModal";
import { EASE } from "./ease";

const TRACKS: Track[] = ["ai", "product", "game"];

const trackTone: Record<Track, string> = {
  ai: "sticker-accent",
  product: "",
  game: "sticker-purple",
};

function TrackTag({ track, label }: { track: Track; label: string }) {
  return <span className={`sticker text-xs ${trackTone[track]}`}>{label}</span>;
}

function ShareList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((x) => (
        <li key={x} className="relative pl-5 text-[0.98rem]">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.72em] h-px w-3 bg-ink"
          />
          {x}
        </li>
      ))}
    </ul>
  );
}

function Evidence({ items, big }: { items: string[]; big?: boolean }) {
  const { t } = useLang();
  return (
    <div className={big ? "bg-surface p-5 md:p-6" : ""}>
      <p className="mono-tab text-xs uppercase tracking-wider text-muted">
        {t.ui.evidence}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((e) => (
          <li
            key={e}
            className={`mono-tab relative pl-5 ${big ? "text-[1rem]" : "text-[0.92rem]"}`}
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-[0.62em] h-2 w-2 bg-accent"
            />
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ItemLink({ item }: { item: WorkItem }) {
  const { t } = useLang();
  if (!item.link) return null;
  return (
    <p className="text-[0.95rem]">
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
  );
}

/** Benim payım | Yapay zekânın payı, yan yana (modal ve akordeonda). */
function Shares({ item }: { item: WorkItem }) {
  const { t } = useLang();
  return (
    <div className="card-comic grid md:grid-cols-2">
      <div className="p-5 md:border-r-2 md:border-ink">
        <h4 className="font-sans text-sm font-semibold text-ink">
          {t.ui.mine}
        </h4>
        <ShareList items={item.mine} />
      </div>
      <div className="border-t-2 border-ink p-5 md:border-t-0">
        <h4 className="font-sans text-sm font-semibold text-muted">
          {t.ui.ai}
        </h4>
        <ShareList items={item.ai} />
      </div>
    </div>
  );
}

function Meta({ item }: { item: WorkItem }) {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
      <TrackTag track={item.track} label={t.tracks[item.track].label} />
      <span className="mono-tab text-sm text-muted">{item.status}</span>
      <span className="mono-tab text-sm text-muted">{item.period}</span>
    </div>
  );
}

/* ── Kısaltma 1: öne çıkan vaka. Payı iki sütun yerine sekme: aynı anda biri görünür. ── */
function FeaturedRow({ item }: { item: WorkItem }) {
  const { t } = useLang();
  const [tab, setTab] = useState<"mine" | "ai">("mine");
  const id = useId();
  const tabs = [
    { key: "mine" as const, label: t.ui.mine },
    { key: "ai" as const, label: t.ui.ai },
  ];
  return (
    <Reveal>
      <article className="border-t border-ink py-10 md:py-14">
        <Meta item={item} />
        <h3 className="mt-3 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.1]">
          <NoBreak>{item.name}</NoBreak>
        </h3>
        <div className="mt-5 max-w-[68ch]">
          <p className="mono-tab text-xs uppercase tracking-wider text-muted">
            {t.ui.problem}
          </p>
          <p className="mt-1 font-serif text-xl leading-snug md:text-2xl">
            {item.problem}
          </p>
        </div>

        <div className="card-comic mt-8">
          <div
            role="tablist"
            aria-label={`${t.ui.mine} / ${t.ui.ai}`}
            className="flex border-b-2 border-ink"
          >
            {tabs.map((x) => (
              <button
                key={x.key}
                role="tab"
                type="button"
                id={`${id}-${x.key}-tab`}
                aria-selected={tab === x.key}
                aria-controls={`${id}-${x.key}`}
                onClick={() => setTab(x.key)}
                className={`flex-1 px-4 py-3 text-left font-sans text-sm font-semibold transition-colors md:flex-none md:px-6 ${
                  tab === x.key
                    ? "bg-ink text-on-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
          {tabs.map((x) => (
            <div
              key={x.key}
              role="tabpanel"
              id={`${id}-${x.key}`}
              aria-labelledby={`${id}-${x.key}-tab`}
              hidden={tab !== x.key}
              className="p-5"
            >
              <ShareList items={item[x.key]} />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Evidence items={item.evidence} big />
        </div>
        {item.link && (
          <div className="mt-6">
            <ItemLink item={item} />
          </div>
        )}
      </article>
    </Reveal>
  );
}

/* ── Kısaltma 2: yapay zekâ vakaları. Satır başlık + 2 satır özet; tıklayınca yerinde açılır. ── */
function AccordionRow({ item }: { item: WorkItem }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <Reveal>
      <article className="group relative border-t border-ink pl-4 sm:pl-6">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
        />
        <h3 className="text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] leading-[1.1]">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`${id}-panel`}
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-start justify-between gap-6 py-7 text-left md:py-8"
          >
            <span className="block min-w-0">
              <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <TrackTag
                  track={item.track}
                  label={t.tracks[item.track].label}
                />
                <span className="mono-tab text-sm font-normal text-muted">
                  {item.status}
                </span>
              </span>
              <span className="mt-3 block">
                <NoBreak>{item.name}</NoBreak>
              </span>
              <span
                className={`mt-3 block max-w-[68ch] font-sans text-base font-normal leading-normal text-muted ${open ? "" : "line-clamp-2"}`}
              >
                {item.problem}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="mt-1 grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-paper"
            >
              <PlusIcon
                className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}
              />
            </span>
          </button>
        </h3>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              id={`${id}-panel`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pb-8 pr-2">
                <Shares item={item} />
                <Evidence items={item.evidence} />
                <ItemLink item={item} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

/* ── Kısaltma 3: ürün ve oyun vakaları. Küçük kart + "+"; tıklayınca pencere (Projeler ile aynı kabuk). ── */
function ModalCard({
  item,
  onOpen,
  hidden,
  buttonRef,
}: {
  item: WorkItem;
  onOpen: () => void;
  hidden: boolean;
  buttonRef: (el: HTMLButtonElement | null) => void;
}) {
  const { t } = useLang();
  return (
    <motion.button
      ref={buttonRef}
      type="button"
      layoutId={`work-card-${item.id}`}
      onClick={onOpen}
      aria-haspopup="dialog"
      className="card-comic group flex h-full w-full flex-col p-5 text-left transition-colors hover:border-accent focus-visible:outline-offset-4"
      style={{ visibility: hidden ? "hidden" : "visible" }}
    >
      <span className="flex items-start justify-between gap-3">
        <TrackTag track={item.track} label={t.tracks[item.track].label} />
        <span className="mono-tab text-xs text-muted">{item.period}</span>
      </span>
      <h3 className="mt-4 text-[clamp(1.3rem,1.1rem+0.8vw,1.6rem)] leading-[1.1]">
        <NoBreak>{item.name}</NoBreak>
      </h3>
      <span className="mt-3 line-clamp-3 text-[0.95rem] text-muted">
        {item.problem}
      </span>
      <span className="mt-auto flex items-end justify-between gap-3 pt-5">
        <span className="mono-tab line-clamp-2 text-xs text-muted">
          {item.status}
        </span>
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-paper transition-transform group-hover:rotate-90"
        >
          <PlusIcon />
        </span>
      </span>
    </motion.button>
  );
}

function WorkModal({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  const { t } = useLang();
  const titleId = `work-title-${item.id}`;
  return (
    <CardModal
      layoutId={`work-card-${item.id}`}
      titleId={titleId}
      onClose={onClose}
    >
      <div className="pr-12">
        <Meta item={item} />
      </div>
      <h3
        id={titleId}
        className="mt-3 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-[1.1]"
      >
        <NoBreak>{item.name}</NoBreak>
      </h3>
      <div className="mt-5 max-w-[68ch]">
        <p className="mono-tab text-xs uppercase tracking-wider text-muted">
          {t.ui.problem}
        </p>
        <p className="mt-1">{item.problem}</p>
      </div>
      <div className="mt-7">
        <Shares item={item} />
      </div>
      <div className="mt-6">
        <Evidence items={item.evidence} />
      </div>
      {item.link && (
        <div className="mt-6">
          <ItemLink item={item} />
        </div>
      )}
    </CardModal>
  );
}

/** "2025 sonrası" bölümünün ikinci yarısı; Section sarmalayıcısı Recent.tsx'te. */
export function WorkBody() {
  const { t } = useLang();
  const w = t.work;
  const [openId, setOpenId] = useState<string | null>(null);
  const buttons = useRef(new Map<string, HTMLButtonElement | null>());

  const featured = w.items.filter((i) => i.featured);
  const accordion = w.items.filter((i) => !i.featured && i.track === "ai");
  const cards = w.items.filter((i) => !i.featured && i.track !== "ai");
  const open = cards.find((i) => i.id === openId) ?? null;

  const close = useCallback(() => {
    setOpenId((id) => {
      if (id) setTimeout(() => buttons.current.get(id)?.focus(), 0);
      return null;
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="mt-16 border-t border-ink pt-8 md:mt-20">
        <Reveal>
          <h3 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] leading-[1.1]">
            {w.title}
          </h3>
          <p className="mt-4 max-w-[62ch] text-muted">{w.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {TRACKS.filter((k) => w.items.some((i) => i.track === k)).map(
              (k) => (
                <li key={k} className="text-sm">
                  <TrackTag track={k} label={t.tracks[k].label} />
                  <span className="ml-2 text-muted">{t.tracks[k].note}</span>
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <div className="mt-10">
          {featured.map((item) => (
            <FeaturedRow key={item.id} item={item} />
          ))}
          {accordion.map((item) => (
            <AccordionRow key={item.id} item={item} />
          ))}
        </div>

        {cards.length > 0 && (
          <div className="mt-6 grid gap-5 border-t border-ink pt-10 sm:grid-cols-2">
            {cards.map((item) => (
              <Reveal key={item.id} className="h-full">
                <ModalCard
                  item={item}
                  onOpen={() => setOpenId(item.id)}
                  hidden={openId === item.id}
                  buttonRef={(el) => buttons.current.set(item.id, el)}
                />
              </Reveal>
            ))}
          </div>
        )}

        <AnimatePresence>
          {open && <WorkModal key={open.id} item={open} onClose={close} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
