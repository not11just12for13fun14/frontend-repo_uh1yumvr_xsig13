import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,rgba(15,23,42,0)_60%)]"></div>
        <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-indigo-500/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                Next‑gen Discord security
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
                Shield your community with a bot that never sleeps
              </h1>
              <p className="mt-5 text-lg text-blue-100/80 max-w-xl">
                AegisBot brings enterprise‑grade protection to your server: advanced anti‑raid, zero‑day link detection, real‑time audit trails and granular role hardening.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all">
                  Add to Discord
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-blue-200/80 ring-1 ring-white/15 hover:text-white hover:ring-white/30 transition-all">
                  See features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-blue-200/70">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>99.99% uptime</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>Realtime defense</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Privacy-first</div>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[460px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
