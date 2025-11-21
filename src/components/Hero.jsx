import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Enterprise Network Infrastructure
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Tech Crunch Limited
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            We build reliable, secure technology environments: high‑performance networks, smart automation, and mission‑critical systems for modern businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">Explore services</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Request a quote</a>
          </div>
        </motion.div>

        {/* Home summary bullets */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            'Network Infrastructure • Wired, Wireless, Security',
            'Computer Systems • Servers, Support, Monitoring',
            'Electrical • Wiring, Power, Efficiency',
            'Automation • Lighting, Climate, Energy',
            'Security • CCTV, Alarms, 24/7 Monitoring',
            'Embedded Systems • IoT & Industrial Control',
          ].map((item) => (
            <motion.li
              key={item}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur hover:bg-white/10 transition"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
