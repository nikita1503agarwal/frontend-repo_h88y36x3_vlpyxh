import React from 'react'
import { motion } from 'framer-motion'
import { MotionSection, MotionCard, fadeInUp, stagger } from './MotionSection'

const services = [
  {
    title: 'Google Ads Management',
    desc: 'Full-funnel strategy across Search, PMax, YouTube. Aggressive testing, negative sculpting, and budget allocation to ROI.',
    bullets: ['Account audits', 'PMax + Search structure', 'YouTube creatives testing', 'B2B + Ecom playbooks'],
  },
  {
    title: 'Meta Ads Management',
    desc: 'Creative-led performance with CAPI, audience refinement, and learning phase mastery to scale profitably.',
    bullets: ['Creative testing systems', 'CAPI + Events', 'B2B lead gen + Ecom', 'Budget scaling frameworks'],
  },
  {
    title: 'GTM + GA4 Tracking',
    desc: 'Robust data layer design, server-side tracking, and GA4 events for reliable reporting across platforms.',
    bullets: ['GTM containers', 'GA4 events + funnels', 'Server-side tagging', 'Consent Mode v2'],
  },
  {
    title: 'Conversion Tracking Audits',
    desc: 'Find and fix attribution leaks. Align platforms, deduplicate events, and unlock hidden ROI.',
    bullets: ['Multi-platform parity', 'Event deduplication', 'Attribution sanity checks', 'Reporting clarity'],
  },
]

export default function Services() {
  return (
    <MotionSection id="services" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <motion.h2 className="text-3xl font-bold text-white" variants={fadeInUp}>Services</motion.h2>
          <motion.a href="#contact" className="text-blue-400 hover:text-blue-300" variants={fadeInUp}>Book a call →</motion.a>
        </div>
        <div className="grid md:grid-cols-2 gap-6" >
          {services.map((s, i) => (
            <MotionCard key={s.title} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6" delay={i * 0.05}>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
