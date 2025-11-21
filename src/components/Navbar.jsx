import { useState } from 'react'
import { Menu, X, Shield, Network, Cpu } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-tr from-cyan-500/40 to-fuchsia-500/40"></span>
              <div className="relative rounded-xl bg-slate-800/60 border border-white/10 p-2">
                <Network className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold leading-tight">Tech Crunch Limited</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 hidden sm:block">Network • Systems • Automation</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">
              <Shield className="h-4 w-4" /> Secure your network
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/80">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-2">
            <div className="flex flex-col gap-1 py-2">
              <NavLink href="#services" onClick={close}>Services</NavLink>
              <NavLink href="#team" onClick={close}>Team</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <a href="#contact" onClick={close} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium">
                <Cpu className="h-4 w-4" /> Get a quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
