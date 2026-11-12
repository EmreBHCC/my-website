import { useEffect, useRef, useState } from 'react';

/**
 * Öğe bir kez görünür olunca (ya da görüntü alanının üstüne geçilince) true.
 * Hızlı atlamada (bağlantıyla en alta gitmek) gözlemci aradaki öğeler için tetiklenmez;
 * bu yüzden kaydırma kontrolü de var: öğenin üstü alt sınırın üstündeyse görünür sayılır.
 * Gözlemci yoksa ya da kurulamazsa true: içerik asla gizli kalmaz.
 */
export function useInViewOnce<T extends Element>(
  bottomMarginPct = 8
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let io: IntersectionObserver | undefined;
    const finish = () => {
      if (done) return;
      done = true;
      setSeen(true);
      io?.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * (1 - bottomMarginPct / 100)) finish();
    };

    if (typeof IntersectionObserver === 'undefined') {
      finish();
      return;
    }
    try {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) finish();
        },
        { rootMargin: `0px 0px -${bottomMarginPct}% 0px` }
      );
      io.observe(el);
    } catch {
      finish();
      return;
    }
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();

    return () => {
      done = true;
      io?.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [bottomMarginPct]);

  return [ref as React.RefObject<T>, seen];
}
