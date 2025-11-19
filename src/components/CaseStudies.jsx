import React from 'react'
import { motion } from 'framer-motion'
import { MotionSection, MotionCard, fadeInUp, fadeIn, stagger } from './MotionSection'

const cases = [
  {
    title: 'Ecom: 3.6x ROAS at scale',
    stat: '+212% revenue',
    detail: 'Scaled PMax + YouTube with clean GA4 tracking and product feed optimization. $800k/month spend.',
  },
  {
    title: 'B2B SaaS: -42% CAC',
    stat: '+68% SQLs',
    detail: 'Search + Performance Max with offline conversion imports and CRM integration for accurate attribution.',
  },
  {
    title: 'Lead Gen: +3x qualified leads',
    stat: '-35% CPL',
    detail: 'Meta + Google hybrid funnel with server-side tracking and aggressive creative testing.',
  },
]

export default function CaseStudies() {
  return (
    <MotionSection id="cases" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <motion.h2 className="text-3xl font-bold text-white" variants={fadeInUp}>Case Studies</motion.h2>
          <motion.a href="#contact" className="text-blue-400 hover:text-blue-300" variants={fadeInUp}>Get a free audit →</motion.a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <MotionCard key={c.title} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6" delay={i * 0.05}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white max-w-[70%]">{c.title}</h3>
                <span className="text-emerald-400 text-sm font-semibold">{c.stat}</span>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{c.detail}</p>
              <div className="mt-4 h-[6px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-emerald-400" initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
