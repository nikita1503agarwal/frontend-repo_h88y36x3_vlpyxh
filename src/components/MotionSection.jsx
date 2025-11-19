import React from 'react'
import { motion } from 'framer-motion'

// Reusable animation presets
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export function MotionSection({ id, className = '', children }) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger()}
      >
        {children}
      </motion.div>
    </section>
  )
}

export const MotionCard = ({ className = '', children, delay = 0 }) => (
  <motion.div
    className={className}
    variants={fadeInUp}
    transition={{ delay }}
  >
    {children}
  </motion.div>
)

export const MotionText = ({ as: Tag = 'div', className = '', children, ...rest }) => (
  <motion.div as={Tag} className={className} variants={fadeInUp} {...rest}>
    {children}
  </motion.div>
)
