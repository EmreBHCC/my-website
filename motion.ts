import type { Transition, Variants } from 'framer-motion';

const baseTransition: Transition = {
  duration: 0.6,
  ease: [0.33, 1, 0.68, 1],
};

export const fadeInUp = (delay = 0, distance = 32): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      delay,
    },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ...baseTransition,
      delay,
    },
  },
});

export const scaleIn = (delay = 0, from = 0.88): Variants => ({
  hidden: {
    opacity: 0,
    scale: from,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...baseTransition,
      delay,
    },
  },
});

export const staggerContainer = (stagger = 0.16, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const viewportOnce = {
  once: true,
  amount: 0.2,
};
