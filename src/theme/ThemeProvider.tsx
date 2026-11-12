import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './theme-context';
import { writeStored } from './storage';

// İlk değeri index.html'deki satır içi betik data-theme olarak koydu; burada onu okuruz.
function initialTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-anim');
    root.setAttribute('data-theme', next);
    root.style.colorScheme = next;
    window.setTimeout(() => root.classList.remove('theme-anim'), 350);
    writeStored('theme', next);
    setTheme(next);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
