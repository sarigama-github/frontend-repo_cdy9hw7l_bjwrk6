import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(217,70,239,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-3 text-slate-300">Tell us about your project and we’ll craft a solution that fits your goals and budget.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 grid gap-4 sm:grid-cols-2"
          >
            <input required placeholder="Full name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <input required placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <input placeholder="Company" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <input placeholder="Phone" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <textarea required placeholder="Your message" rows="5" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500/50" />
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">Send message</button>
              <span className="text-slate-300 text-sm">{status}</span>
            </div>
          </motion.form>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur relative"
          >
            <iframe
              title="Google Map placeholder"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127638.32074418401!2d32.507!3d0.322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb565f30c9a5%3A0x5b0a1a9f8a2d7db3!2sKampala!5e0!3m2!1sen!2sug!4v1700000000000"
              className="grayscale contrast-125 opacity-80"
              allowFullScreen
            ></iframe>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
