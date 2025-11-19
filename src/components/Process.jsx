import React from 'react'
import { MotionSection, MotionCard, fadeInUp } from './MotionSection'

const steps = [
  { num: '01', title: 'Audit & strategy', desc: 'Account and tracking audit → growth plan with targets, budget map, and KPIs.' },
  { num: '02', title: 'Tracking foundation', desc: 'GTM/GA4 setup, server-side tagging, offline conversions, consent mode.' },
  { num: '03', title: 'Launch & learn', desc: 'Rapid experiments across keywords, audiences, and creatives to find winners fast.' },
  { num: '04', title: 'Scale with control', desc: 'Aggressive but measured scaling with guardrails to protect MER and ROAS.' },
]

export default function Process() {
  return (
    <MotionSection id="process" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <MotionCard key={s.num} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6" delay={i * 0.05}>
              <span className="text-slate-400 text-sm">{s.num}</span>
              <h3 className="text-lg font-semibold text-white mt-1">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{s.desc}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
