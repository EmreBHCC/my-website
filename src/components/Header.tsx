import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang-context';
import { useTheme } from '../theme/theme-context';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

import { SECTION_IDS, type SectionId } from './sections';

function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    // Hero'ya dönünce etkin bölüm kalmasın.
    const onScroll = () => {
      const first = document.getElementById(SECTION_IDS[0]);
      if (first && window.scrollY < first.offsetTop - window.innerHeight * 0.4) setActive(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return active;
}

const iconBtn =
  'btn-comic btn-comic-sm h-9 min-w-9 justify-center text-ink';

export function Header() {
  const { lang, t, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }));
  const linkClass = (id: SectionId) =>
    `ulink ulink-quiet text-[0.9rem] ${active === id ? 'text-accent !decoration-current' : 'text-ink'}`;

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-serif text-lg font-medium tracking-tight text-ink">
          {t.hero.name}
        </a>

        <nav aria-label={t.ui.menu} className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={linkClass(l.id)}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.ui.switchLanguage}
            className={`${iconBtn} mono-tab text-[0.8rem] font-medium`}
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.ui.toLightTheme : t.ui.toDarkTheme}
            className={iconBtn}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.ui.close : t.ui.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={`${iconBtn} lg:hidden`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.ui.menu}
          className="border-t border-line bg-paper lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {links.map((l, i) => (
              <li key={l.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`flex items-baseline gap-4 py-3 ${active === l.id ? 'text-accent' : 'text-ink'}`}
                >
                  <span className="mono-tab text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-xl">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
