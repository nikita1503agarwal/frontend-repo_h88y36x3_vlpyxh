import React, { useState } from 'react'
import { MotionSection, MotionCard } from './MotionSection'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, msg: data.message || 'Sent' })
      else setStatus({ ok: false, msg: data.detail || 'Failed' })
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  return (
    <MotionSection id="contact" className="bg-slate-950 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <MotionCard className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Book a Call</h2>
            <p className="text-slate-400 text-sm">Or email: hello@example.com</p>
          </div>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500" required />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500" required />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Project goals, budget, timeline" className="sm:col-span-2 bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 h-28" required />
            <button type="submit" className="sm:col-span-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg">Send</button>
          </form>
          {status && (
            <p className={`mt-4 text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>{status.msg}</p>
          )}
        </MotionCard>
      </div>
    </MotionSection>
  )
}
