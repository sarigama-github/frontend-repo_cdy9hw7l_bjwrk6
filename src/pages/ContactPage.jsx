import Layout from '../components/Layout'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">Tell us about your project or support needs. Our engineers will get back to you promptly.</p>
        <Contact />
      </div>
    </Layout>
  )
}
