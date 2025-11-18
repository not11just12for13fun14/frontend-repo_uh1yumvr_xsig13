import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Invite the bot',
    desc: 'Authorize with Discord and select your server to get started in seconds.'
  },
  {
    step: '02',
    title: 'Choose a preset',
    desc: 'Pick from community, gaming, or enterprise security profiles. Customize any rule.'
  },
  {
    step: '03',
    title: 'Verify with flair',
    desc: 'Members complete quick, adaptive checks and get the right roles automatically.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur"
            >
              <div className="text-blue-300 font-mono">{s.step}</div>
              <h3 className="mt-2 text-white text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-blue-200/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
