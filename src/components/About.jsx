import React from 'react'
import { MotionSection, MotionCard } from './MotionSection'

export default function About() {
  return (
    <MotionSection id="about" className="bg-slate-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">About Muhammad</h2>
        <MotionCard className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
          <p className="text-slate-300">
            I’m a performance marketer specializing in Google Ads, Meta Ads, and conversion tracking. Over the past years, I’ve managed multi-million
            dollar budgets and built reliable analytics systems with GA4 and GTM so teams can scale with confidence. My approach combines rigorous testing,
            clean data, and clear reporting to drive profitable growth.
          </p>
        </MotionCard>
      </div>
    </MotionSection>
  )
}
