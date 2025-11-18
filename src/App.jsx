import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_0%,rgba(15,23,42,1)_100%)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Trust />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
