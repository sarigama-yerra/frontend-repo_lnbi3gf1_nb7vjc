import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_70%_-20%,rgba(16,185,129,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            Designing sleek, human-centered experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg text-neutral-300 max-w-xl"
          >
            I’m a UX designer crafting minimal interfaces with delightful micro-interactions for modern products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#work" className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 text-black font-medium shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:shadow-[0_0_50px_rgba(16,185,129,0.9)] transition-shadow">
              View Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-white/90 hover:text-neon hover:border-neon/60 transition-colors">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
