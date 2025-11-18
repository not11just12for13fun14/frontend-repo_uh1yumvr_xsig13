import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = [
  {
    title: 'Realtime moderation overlays',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Incident timeline views',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Role permission diffing',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function ParallaxGallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -120])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -160])

  return (
    <section ref={ref} className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div style={{ y: y1 }} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
            <img src={items[0].img} alt="Gallery 1" className="h-80 w-full object-cover" />
            <div className="p-4 text-sm text-blue-200/80">{items[0].title}</div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
            <img src={items[1].img} alt="Gallery 2" className="h-80 w-full object-cover" />
            <div className="p-4 text-sm text-blue-200/80">{items[1].title}</div>
          </motion.div>
          <motion.div style={{ y: y3 }} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
            <img src={items[2].img} alt="Gallery 3" className="h-80 w-full object-cover" />
            <div className="p-4 text-sm text-blue-200/80">{items[2].title}</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
