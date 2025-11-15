import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_0%,rgba(16,185,129,0.1),transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">About</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              I design clean, accessible interfaces with a focus on motion and micro-interactions. My process blends research, rapid prototyping, and visual polish to deliver experiences that feel effortless.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { k: 'Experience', v: '6+ years' },
                { k: 'Focus', v: 'SaaS, Fintech, AI' },
                { k: 'Tools', v: 'Figma, Framer, Principle' },
              ].map((item) => (
                <div key={item.k} className="rounded-lg border border-white/10 bg-neutral-900/60 p-4">
                  <p className="text-xs text-neutral-400">{item.k}</p>
                  <p className="mt-1 text-white">{item.v}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 p-6">
              <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(16,185,129,0.15),transparent_36%)]" />
              <div className="relative">
                <p className="text-sm text-neutral-300">
                  Currently exploring how AI can enable more adaptive, context-aware interfaces.
                </p>
                <p className="mt-4 text-sm text-neutral-400">
                  Available for freelance and full-time roles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
