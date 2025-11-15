import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Dashboard',
    tag: 'Product UX',
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjMxOTc1MDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Healthcare App',
    tag: 'UX Research',
    image: 'https://images.unsplash.com/photo-1591608517093-3bb6aa9efe35?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGhjYXJlJTIwQXBwfGVufDB8MHx8fDE3NjMxOTc1MDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'AI Design System',
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
          <a href="#" className="text-neon/90 hover:text-neon">See all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">{p.tag}</p>
                <h3 className="mt-1 text-lg font-medium text-white">{p.title}</h3>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
