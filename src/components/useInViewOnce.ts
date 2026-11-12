import { useEffect, useRef, useState } from 'react';

/**
 * Öğe bir kez görünür olunca true. Gözlemci yoksa ya da kurulamazsa true (içerik asla gizli kalmaz).
 * Öğe zaten görüntü alanının üstünde kaldıysa (bağlantıyla atlama) da true.
 */
export function useInViewOnce<T extends Element>(
  rootMargin = '0px 0px -8% 0px'
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    let io: IntersectionObserver;
    try {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting || e.boundingClientRect.top < 0) {
              setSeen(true);
              io.disconnect();
              return;
            }
          }
        },
        { rootMargin }
      );
      io.observe(el);
    } catch {
      setSeen(true);
      return;
    }
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref as React.RefObject<T>, seen];
}
