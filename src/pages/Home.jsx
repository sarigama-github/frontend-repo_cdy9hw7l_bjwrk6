import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section id="summary" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Robust network design and implementation for reliable, scalable infrastructure.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Advanced cybersecurity assessments, hardening, and monitoring.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Industrial automation and PLC integration with remote telemetry.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Electrical systems planning, UPS, and energy optimization.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Embedded systems prototyping, IoT, and edge computing solutions.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">24/7 support with SLAs tailored to your business needs.</div>
          </div>
        </div>
      </section>
      <Services />
      <Team />
      <Contact />
    </Layout>
  )
}
