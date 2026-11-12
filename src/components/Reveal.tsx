import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInViewOnce } from './useInViewOnce';
import { EASE } from './ease';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Hareket 2: görünür olunca bir kez belirir. Reduced-motion: yalnız kısa opaklık. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial={false}
      animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 14 }}
      transition={{ duration: reduced ? 0.15 : 0.5, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
