import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import TechStack from './components/TechStack'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <TechStack />
      <Pricing />
      <About />
      <Contact />
      <footer className="bg-slate-950 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Abdul Rahman. All rights reserved.</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Book a Call</a>
        </div>
      </footer>
      <ScrollTop />
    </div>
  )
}

export default App
