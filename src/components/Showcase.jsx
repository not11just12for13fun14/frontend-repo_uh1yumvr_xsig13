import React from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    caption: 'Real-time threat intelligence'
  },
  {
    src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    caption: 'Audit trails and insights'
  },
  {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    caption: 'Role hardening presets'
  },
  {
    src: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a2f?q=80&w=1600&auto=format&fit=crop',
    caption: 'Link sandboxing results'
  }
]

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_220px_at_20%_50%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">See it in action</h2>
          <p className="mt-3 text-blue-200/80">A quick look at the dashboards and visuals that keep your community calm and secure.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
              <img src={img.src} alt="Showcase" className="h-72 w-full object-cover" />
              <figcaption className="flex items-center justify-between gap-2 p-4 text-sm">
                <span className="text-blue-200/80">{img.caption}</span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/80 group-hover:text-white group-hover:border-white/20 transition-colors">View details →</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
