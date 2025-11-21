import Navbar from './Navbar'
import Background3D from './Background3D'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-clip">
      {/* Global 3D animated background per route */}
      <Background3D />

      <Navbar />
      <main className="pt-16">{children}</main>

      <footer className="border-t border-white/10 py-10 bg-slate-950/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Tech Crunch Limited — All rights reserved.</p>
          <div className="text-slate-400 text-sm">Network • Systems • Electrical • Automation • Security • Embedded</div>
        </div>
      </footer>
    </div>
  )
}
