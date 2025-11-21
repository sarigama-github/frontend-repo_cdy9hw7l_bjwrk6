import Layout from '../components/Layout'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">From enterprise networks to industrial automation, we deliver secure, scalable systems tailored to your mission-critical needs.</p>
        <Services />
      </div>
    </Layout>
  )
}
