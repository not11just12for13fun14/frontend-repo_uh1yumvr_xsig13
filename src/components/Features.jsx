import React from 'react'
import { Shield, Zap, Link2, Fingerprint, Activity, Radar } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'Anti‑Raid & Flood Control',
    desc: 'Adaptive rate‑limits, behavior fingerprinting and dynamic cooldowns stop raids before they start.'
  },
  {
    icon: Link2,
    title: 'Malicious Link Scanner',
    desc: 'Zero‑day URL intel and sandbox checks catch phish and malware in real‑time.'
  },
  {
    icon: Fingerprint,
    title: 'Granular Role Hardening',
    desc: 'Lock down perms with policy templates, escalation gates and anomaly alerts.'
  },
  {
    icon: Activity,
    title: 'Audit Trails',
    desc: 'Searchable logs for joins, bans, edits and automod actions with exportable timelines.'
  },
  {
    icon: Zap,
    title: 'Micro‑latency',
    desc: 'Edge‑distributed actions keep response times consistently under 100ms.'
  },
  {
    icon: Radar,
    title: 'Threat Radar',
    desc: 'Live threat map visualizing raids and link waves across your servers.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Security that scales with you</h2>
          <p className="mt-3 text-blue-200/80">Built for communities of any size, with controls you can trust.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-600/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-slate-900 ring-1 ring-white/10">
                  {React.createElement(f.icon, { className: 'h-5 w-5 text-cyan-300' })}
                </div>
                <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
