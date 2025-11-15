import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_120%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Let’s build something exceptional
        </motion.h2>
        <p className="mt-4 text-neutral-300">Open to collaborations, speaking, and new opportunities.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 inline-flex overflow-hidden rounded-lg border border-white/10"
        >
          <a
            href="mailto:hello@designer.studio"
            className="inline-flex items-center gap-2 bg-neutral-900/60 px-6 py-3 text-white/90 hover:text-neon transition-colors"
          >
            hello@designer.studio
          </a>
          <span className="inline-flex items-center bg-neon px-4 text-black font-medium">Contact</span>
        </motion.div>
      </div>
    </section>
  )
}
