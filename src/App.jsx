import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-clip">
      {/* Global animated background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-full opacity-[0.15] bg-[radial-gradient(800px_300px_at_50%_100%,#22d3ee,transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <footer className="border-t border-white/10 py-10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Tech Crunch Limited — All rights reserved.</p>
          <div className="text-slate-400 text-sm">Network • Systems • Electrical • Automation • Security • Embedded</div>
        </div>
      </footer>
    </div>
  )
}

export default App
