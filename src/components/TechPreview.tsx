import { useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { techInfo } from '../content/techs';
import { useLang } from '../i18n/lang-context';

/**
 * React Bits Pro "Hover Preview" davranışı (pro.reactbits.dev/docs/components/hover-preview):
 * kelimenin üstünde imleç gezerken önizleme kartı belirir, imleci hafifçe izler ve döner.
 * Pro kaynağı lisanslı olduğu için bu, aynı davranışın kendi yazımım; görsel yerine
 * simple-icons logosu ve resmi site bağlantısı kullanıyor (ağ isteği yok).
 * Klavye: odak da önizlemeyi açar; bağlantı yeni sekmede resmi siteye gider.
 */
const MAX_ROTATION = 12;
const MAX_OFFSET = 15;

export function TechPreview({ label, children, className = '' }: { label: string; children?: ReactNode; className?: string }) {
  const info = techInfo(label);
  const reduced = useReducedMotion();
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, r: 0 });
  const ref = useRef<HTMLElement>(null);

  if (!info) return <span className={className}>{children ?? label}</span>;

  const onMove = (e: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const b = ref.current.getBoundingClientRect();
    const nx = (e.clientX - b.left) / b.width - 0.5;
    const ny = (e.clientY - b.top) / b.height - 0.5;
    setPos({ x: nx * 2 * MAX_OFFSET, y: ny * MAX_OFFSET, r: nx * 2 * MAX_ROTATION });
  };

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={info.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block cursor-pointer ${className}`}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onPointerMove={onMove}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children ?? label}
      <span className="sr-only"> {t.ui.opensInNewTab}</span>
      <AnimatePresence>
        {open && (
          <motion.span
            aria-hidden="true"
            role="presentation"
            className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-3 flex w-40 flex-col items-center gap-2 border-4 border-[var(--preview-border)] bg-white px-3 py-4 text-center shadow-[4px_4px_0_var(--ink)]"
            initial={{ opacity: 0, y: reduced ? 0 : 8, x: '-50%', rotate: 0, scale: reduced ? 1 : 0.9 }}
            animate={{ opacity: 1, y: pos.y, x: `calc(-50% + ${pos.x}px)`, rotate: pos.r, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : 4, scale: reduced ? 1 : 0.95, transition: { duration: reduced ? 0 : 0.15 } }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            <svg viewBox="0 0 24 24" width="56" height="56" focusable="false">
              <path d={info.path} fill={`#${info.hex}`} stroke="#251a4a" strokeWidth="0.5" paintOrder="stroke" />
            </svg>
            <span className="font-serif text-base leading-tight text-[#251a4a]">{info.name}</span>
            <span className="mono-tab text-[0.7rem] text-[#5b5478]">{new URL(info.href).hostname}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}
