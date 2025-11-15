import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9))]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} UX Designer — All rights reserved.</p>
          <p className="text-neutral-500">Built with care and minimalism.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
