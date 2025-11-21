import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
