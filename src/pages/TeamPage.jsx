import Layout from '../components/Layout'
import Team from '../components/Team'

export default function TeamPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Meet the Team</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">A multidisciplinary crew of network engineers, security specialists, and automation experts dedicated to your success.</p>
        <Team />
      </div>
    </Layout>
  )
}
