import React from 'react'

const tiers = [
  {
    name: 'Audit & Plan',
    price: '$1,500',
    desc: 'Deep account + tracking audit with a 90-day growth plan.',
    features: ['Full GA4/GTM review', 'Ads account teardown', 'Roadmap + quick wins', 'Live walkthrough'],
  },
  {
    name: 'Performance Management',
    price: 'From $3,000/mo',
    desc: 'Hands-on management with weekly experiments and reporting.',
    features: ['Google + Meta', 'Creative & keyword testing', 'Budget scaling frameworks', 'Weekly reporting'],
  },
  {
    name: 'Tracking & Analytics',
    price: 'From $2,000',
    desc: 'Implementation of GTM/GA4 with server-side and offline conversions.',
    features: ['Data layer + events', 'Server-side tagging', 'Consent Mode v2', 'Attribution alignment'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{t.price}</p>
              <p className="mt-2 text-slate-300">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside flex-1">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
