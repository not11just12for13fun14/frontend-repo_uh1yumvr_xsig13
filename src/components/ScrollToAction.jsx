import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollToAction() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.1, 0.6, 1], [60, 0, -40])
  const opacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1])

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_50%,rgba(99,102,241,0.10),transparent)]" />
      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800 p-10 text-center">
          <p className="text-blue-200/80">Scrolling past the tour?</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">Add the bot and lock down your server</h3>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all">Add to Discord</a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-blue-200/80 ring-1 ring-white/15 hover:text-white hover:ring-white/30 transition-all">See features</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
