import React from 'react'

const testimonials = [
  { name: 'Ayesha K.', role: 'Ecommerce Founder', quote: 'We finally trust our numbers. After the tracking overhaul, our MER hit 3.2 and scaling became predictable.' },
  { name: 'David P.', role: 'B2B SaaS VP Growth', quote: 'Offline conversions + GTM cleanup cut our CAC by 40%. Clear reporting and better decision-making.' },
  { name: 'Sana R.', role: 'DTC Head of Growth', quote: 'Meta + Google synergy with CAPI and GA4 funnels brought 3x qualified leads in 60 days.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">What clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">{t.name} — {t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
