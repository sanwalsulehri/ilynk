import { Variants } from 'framer-motion'

// Common animation variants for consistent animations across the app
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerChildren: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Hover animations
export const hoverScale: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

export const hoverLift: Variants = {
  hover: {
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

export const hoverRotate: Variants = {
  hover: {
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
}

// Button animations
export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" }
  }
}

// Card animations
export const cardHover: Variants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// Text reveal animations
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

// Floating animation for decorative elements
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Pulse animation
export const pulse: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Rotation animation
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}
