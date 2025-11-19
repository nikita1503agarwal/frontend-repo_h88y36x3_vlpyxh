import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from './MotionSection'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* Animated background glows */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="absolute top-0 right-[-10%] w-[45rem] h-[45rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.22), transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={stagger(0.08, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div>
            <motion.div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-xs mb-5" variants={fadeInUp}>
              <span>Google Ads</span>
              <span>•</span>
              <span>Meta Ads</span>
              <span>•</span>
              <span>GTM & GA4</span>
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight" variants={fadeInUp}>
              Profit-focused performance marketing with bulletproof tracking
            </motion.h1>
            <motion.p className="mt-5 text-slate-300 text-lg" variants={fadeInUp}>
              I help brands scale paid traffic profitably by pairing high-ROI campaign strategy with accurate conversion tracking across GA4, GTM, and ad platforms.
            </motion.p>
            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg shadow transition-colors">
                Book a Call
              </a>
              <a href="#cases" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-lg border border-white/10">
                See Results
              </a>
            </motion.div>
            <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300 text-sm" variants={stagger(0.06, 0.2)}>
              {[
                { k: '$30M+', s: 'Ad spend managed' },
                { k: '3–5x', s: 'Typical ROAS lift' },
                { k: '200+', s: 'Tracking setups' },
                { k: '15+', s: 'Industries' },
              ].map((item) => (
                <motion.div key={item.s} className="bg-white/5 rounded-lg p-3 border border-white/10" variants={fadeInUp}>
                  <p className="text-2xl font-bold text-white">{item.k}</p>
                  <p>{item.s}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeInUp}>
            <div className="relative bg-gradient-to-br from-blue-600/20 to-emerald-500/20 border border-white/10 rounded-2xl p-6 overflow-hidden">
              <motion.div
                className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-emerald-400/10 blur-2xl"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative grid grid-cols-2 gap-4">
                {["Google Ads","Meta Ads","GA4","GTM","CAPI","Offline Conversions"].map((item, i) => (
                  <motion.div key={item} className="bg-slate-900/70 border border-white/10 rounded-xl p-4" variants={fadeInUp} transition={{ delay: i * 0.04 }}>
                    <p className="text-slate-300 text-sm">Capability</p>
                    <p className="text-white font-semibold mt-1">{item}</p>
                    <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p className="text-slate-400 text-sm mt-4" variants={fadeIn}>
                Real outcomes: lower CAC, higher LTV, and tracking you can trust.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
