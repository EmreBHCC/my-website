import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useLang } from "../i18n/lang-context";

/** Artı / çarpı: aynı simge, kapatma düğmesinde 45° dönüp çarpıya dönüşür. */
export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

interface Props {
  /** Kartla aynı layoutId: kart pencereye genişler. */
  layoutId: string;
  titleId: string;
  onClose: () => void;
  children: ReactNode;
}

/** Kartın büyüyüp tam ekran pencereye dönüştüğü ortak kabuk (Projeler + Seçilmiş işler). */
export function CardModal({ layoutId, titleId, onClose, children }: Props) {
  const { t } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[70] grid place-items-center p-4 sm:p-8">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        layoutId={layoutId}
        className="card-comic relative max-h-[88vh] w-full max-w-3xl overflow-y-auto p-6 md:p-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.08 } }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.ui.close}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center border-2 border-ink bg-paper transition-transform hover:rotate-90"
          >
            <PlusIcon className="rotate-45" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </div>,
    document.body,
  );
}
