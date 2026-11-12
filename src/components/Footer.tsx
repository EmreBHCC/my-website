import { useLang } from '../i18n/lang-context';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:px-8 md:flex-row md:items-baseline md:justify-between">
        <p className="max-w-[62ch]">{t.footer.colophon}</p>
        <div className="mono-tab flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span>
            {t.hero.name} · {new Date().getFullYear()}
          </span>
          <a href="#top" className="ulink text-ink">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
