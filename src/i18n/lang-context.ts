import { createContext, useContext } from 'react';
import type { Lang, SiteContent } from '../content/types';

export interface LangState {
  lang: Lang;
  t: SiteContent;
  toggle: () => void;
}

export const LangContext = createContext<LangState | null>(null);

export function useLang(): LangState {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('LangProvider eksik');
  return ctx;
}
