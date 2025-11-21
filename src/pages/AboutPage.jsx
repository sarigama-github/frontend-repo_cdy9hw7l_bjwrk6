import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">About Tech Crunch Limited</h1>
            <p className="text-slate-300 leading-relaxed mb-6">We design, secure, and automate critical infrastructure for organizations that can’t afford downtime. Our blend of networking, cybersecurity, electrical, and embedded expertise enables us to deliver end-to-end solutions—from strategy and architecture to implementation and support.</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span> ISO-aligned processes and rigorous change management.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400"></span> Vendor-agnostic designs that scale with your growth.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> 24/7 monitoring, observability, and rapid incident response.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop" alt="Server racks and network cables" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
