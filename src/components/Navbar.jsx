import { useEffect, useState } from 'react'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'relative px-3 py-2 text-sm text-neutral-200/90 transition-colors hover:text-neon'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-neon/80 to-emerald-500/60 text-black shadow-[0_0_30px_rgba(16,185,129,0.6)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-white">UX Designer</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#work" className={linkClass}>
            <span className="absolute inset-x-3 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-transparent via-neon to-transparent transition-transform group-hover:scale-x-100" />
            Work
          </a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="#work" className="block text-neutral-200/90 hover:text-neon">Work</a>
          <a href="#about" className="block text-neutral-200/90 hover:text-neon">About</a>
          <a href="#contact" className="block text-neutral-200/90 hover:text-neon">Contact</a>
        </div>
      )}
    </header>
  )
}
