import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Enterprise Network Infrastructure
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Tech Crunch Limited
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            We design and deploy robust network systems that keep your business connected. From structured cabling to enterprise-grade wireless setups, we ensure speed, stability, and security for seamless communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">Explore services</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Request a quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
