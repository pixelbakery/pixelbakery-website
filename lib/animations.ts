// lib/animations.ts
import { Variants } from 'framer-motion'

export interface NavItemVariants extends Variants {
  offscreen: (delay: number) => any
  onscreen: (delay: number) => any
}

export const navItemVariants: NavItemVariants = {
  offscreen: (delay) => ({
    y: -300,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
      delay,
    },
  }),
  onscreen: (delay) => ({
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      duration: 1,
      delay,
    },
  }),
}
