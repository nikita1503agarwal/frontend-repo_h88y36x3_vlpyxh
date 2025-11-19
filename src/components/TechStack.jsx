import React from 'react'

const tools = [
  { name: 'Google Ads', cat: 'Acquisition' },
  { name: 'Meta Ads', cat: 'Acquisition' },
  { name: 'Google Tag Manager', cat: 'Tracking' },
  { name: 'GA4', cat: 'Analytics' },
  { name: 'Meta CAPI', cat: 'Tracking' },
  { name: 'Server-side Tagging', cat: 'Infra' },
]

export default function TechStack() {
  return (
    <section id="stack" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Tech stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((t) => (
            <div key={t.name} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-slate-400 text-sm mt-1">{t.cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
