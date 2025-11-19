import React from 'react'
import { motion } from 'framer-motion'

const NavLink = ({ href, children }) => (
  <a href={href} className="text-slate-300 hover:text-white transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <motion.div
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div>
              <p className="text-white font-semibold leading-tight">Muhammad Abdul Rahman</p>
              <p className="text-xs text-slate-400 leading-tight">Performance Marketing & Tracking</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#cases">Case Studies</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition-colors">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
