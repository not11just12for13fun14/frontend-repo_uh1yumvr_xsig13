import React from 'react'
import { CheckCircle2, Lock, ShieldCheck } from 'lucide-react'

export default function Trust() {
  return (
    <section id="trust" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <ShieldCheck className="mx-auto h-6 w-6 text-cyan-300" />
                  <div className="mt-3 text-2xl font-bold text-white">250k+</div>
                  <div className="text-xs text-blue-200/70">Servers protected</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <Lock className="mx-auto h-6 w-6 text-cyan-300" />
                  <div className="mt-3 text-2xl font-bold text-white">1.2B</div>
                  <div className="text-xs text-blue-200/70">Messages scanned</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-cyan-300" />
                  <div className="mt-3 text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-blue-200/70">Avg. rating</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Built with privacy at the core</h3>
            <p className="mt-3 text-blue-200/80">We collect only what is necessary to keep your community safe. Data is encrypted at rest and in transit, and you control retention policies.</p>
            <ul className="mt-6 space-y-3 text-blue-100/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>GDPR & CCPA ready</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>Independent security audits</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>Fine‑grained access controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
