"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition } from '../utils/animations'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
