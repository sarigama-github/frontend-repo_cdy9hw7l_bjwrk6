import { ShieldCheck, Wifi, Server, Cpu, Camera, Home, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Network Infrastructure Management',
    description: 'Structured cabling, enterprise wireless, and network security for fast, stable, and secure connectivity.',
    points: [
      'Structured cabling solutions',
      'Enterprise wireless networks',
      'Network security implementation'
    ],
    icon: Wifi,
    accent: 'from-cyan-500 to-fuchsia-500',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1887&auto=format&fit=crop'
  },
  {
    title: 'Computer Systems Administration',
    description: 'Server setup, desktop support, and 24/7 monitoring to keep your IT running smoothly.',
    points: [
      'Server setup and maintenance',
      'Desktop support and troubleshooting',
      'System monitoring and optimization'
    ],
    icon: Server,
    accent: 'from-emerald-500 to-cyan-500',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Electrical Installation',
    description: 'Safe and reliable wiring and power distribution that meets international standards.',
    points: [
      'Commercial electrical wiring',
      'Power distribution systems',
      'Energy-efficient solutions'
    ],
    icon: Zap,
    accent: 'from-amber-500 to-rose-500',
    img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1887&auto=format&fit=crop'
  },
  {
    title: 'Home & Office Automation',
    description: 'Smart lighting, climate control, and energy management for comfortable, efficient spaces.',
    points: [
      'Smart lighting systems',
      'Climate control automation',
      'Energy management solutions'
    ],
    icon: Home,
    accent: 'from-violet-500 to-fuchsia-500',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'CCTV & Alarm Security Systems',
    description: 'Advanced surveillance and alarm systems tailored to your property for maximum safety.',
    points: [
      'HD CCTV camera installation',
      'Intrusion detection systems',
      '24/7 monitoring solutions'
    ],
    icon: Camera,
    accent: 'from-blue-500 to-cyan-500',
    img: 'https://images.unsplash.com/photo-1568306281288-56c7b57a19a9?q=80&w=1969&auto=format&fit=crop'
  },
  {
    title: 'Embedded Systems',
    description: 'Custom IoT and industrial controllers with tight hardware-software integration.',
    points: [
      'Custom IoT solutions',
      'Industrial control systems',
      'Hardware-software integration'
    ],
    icon: Cpu,
    accent: 'from-pink-500 to-rose-500',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(217,70,239,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-slate-300">End-to-end technology solutions engineered for reliability, security, and scale.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, points, icon: Icon, accent, img }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg"
            >
              <div className="h-32 overflow-hidden">
                <img src={img} alt="" className="h-32 w-full object-cover opacity-70 group-hover:opacity-90 transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr ${accent} opacity-20 blur-2xl group-hover:opacity-30 transition`} />
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-xl blur-md bg-white/10" />
                    <div className="relative rounded-xl bg-white/5 border border-white/10 p-2">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
                <p className="mt-3 text-slate-300 text-sm">{description}</p>
                <ul className="mt-4 space-y-2 text-slate-300/90 text-sm">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-400" /> {p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
