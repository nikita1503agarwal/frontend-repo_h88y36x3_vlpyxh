import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-[0.08]" style={{background:"radial-gradient(1000px 400px at 20% 0%, #60a5fa33, transparent 70%), radial-gradient(1000px 400px at 80% 10%, #34d39933, transparent 70%)"}} />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-xs mb-5">
              <span>Google Ads</span>
              <span>•</span>
              <span>Meta Ads</span>
              <span>•</span>
              <span>GTM & GA4</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Profit-focused performance marketing with bulletproof tracking
            </h1>
            <p className="mt-5 text-slate-300 text-lg">
              I help brands scale paid traffic profitably by pairing high-ROI campaign strategy with accurate conversion tracking across GA4, GTM, and ad platforms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg shadow transition-colors">
                Book a Call
              </a>
              <a href="#cases" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-lg border border-white/10">
                See Results
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300 text-sm">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-2xl font-bold text-white">$30M+</p>
                <p>Ad spend managed</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-2xl font-bold text-white">3–5x</p>
                <p>Typical ROAS lift</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-2xl font-bold text-white">200+</p>
                <p>Tracking setups</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-2xl font-bold text-white">15+</p>
                <p>Industries</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative bg-gradient-to-br from-blue-600/20 to-emerald-500/20 border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {["Google Ads","Meta Ads","GA4","GTM","CAPI","Offline Conversions"].map((item) => (
                  <div key={item} className="bg-slate-900/70 border border-white/10 rounded-xl p-4">
                    <p className="text-slate-300 text-sm">Capability</p>
                    <p className="text-white font-semibold mt-1">{item}</p>
                    <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-4">Real outcomes: lower CAC, higher LTV, and tracking you can trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
