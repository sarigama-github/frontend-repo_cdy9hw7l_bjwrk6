import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(34,211,238,0.15),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(217,70,239,0.12),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-3 text-slate-300">Tell us about your project and we’ll craft a solution that fits your goals and budget.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
          <input required placeholder="Full name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <input required placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <input placeholder="Company" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <input placeholder="Phone" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <textarea required placeholder="Your message" rows="5" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
            <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">Send message</button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
