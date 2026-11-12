import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { content } from '../content';
import type { Lang } from '../content/types';
import { LangContext } from './lang-context';
import { readStored, writeStored } from '../theme/storage';

function initialLang(): Lang {
  return readStored('lang') === 'en' ? 'en' : 'tr';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const toggle = useCallback(() => {
    const next: Lang = lang === 'tr' ? 'en' : 'tr';
    writeStored('lang', next);
    setLang(next);
  }, [lang]);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
