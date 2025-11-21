import { ShieldCheck, Wifi, Server, Cable, Cpu, CircuitBoard, Camera, Gauge, Home, ThermometerSun, Zap } from 'lucide-react'

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
    accent: 'from-cyan-500 to-fuchsia-500'
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
    accent: 'from-emerald-500 to-cyan-500'
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
    accent: 'from-amber-500 to-rose-500'
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
    accent: 'from-violet-500 to-fuchsia-500'
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
    accent: 'from-blue-500 to-cyan-500'
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
    accent: 'from-pink-500 to-rose-500'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(34,211,238,0.15),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(217,70,239,0.12),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-slate-300">End-to-end technology solutions engineered for reliability, security, and scale.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, points, icon: Icon, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr ${accent} opacity-20 blur-2xl group-hover:opacity-30 transition`}></div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-xl blur-md bg-white/10"></span>
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
          ))}
        </div>
      </div>
    </section>
  )
}
