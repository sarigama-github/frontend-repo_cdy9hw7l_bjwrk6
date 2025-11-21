import { motion } from 'framer-motion'

const members = [
  { name: 'Mwanje Joseph', role: 'Sales Manager', bio: 'Leads and motivates the sales team, sets sales targets, develops strategies, and ensures goals are met.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1887&auto=format&fit=crop' },
  { name: 'John Smith', role: 'Technical Advisor', bio: 'Provides expert guidance on technical products or services, helping clients or teams solve problems and make informed decisions.', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Haboya Emmanuel', role: 'Technical Advisor', bio: 'Provides expert guidance on technical products or services, helping clients or teams solve problems and make informed decisions.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Sarah Lee', role: 'Finance And Operations', bio: 'Manages budgets, expenses, and company resources while overseeing daily operations to ensure smooth business performance.', img: 'https://images.unsplash.com/photo-1531123414780-f742d3cbf070?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Kellen Muhoozi', role: 'Finance And Operations', bio: 'Manages budgets, expenses, and company resources while overseeing daily operations to ensure smooth business performance.', img: 'https://images.unsplash.com/photo-1544005314-2c9b59397732?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Mike Johnson', role: 'Project Cordinator', bio: 'Organizes, tracks, and supports projects by handling schedules, resources, and communication between teams.', img: 'https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Aaron Kamanzi', role: 'Project Cordinator', bio: 'Organizes, tracks, and supports projects by handling schedules, resources, and communication between teams.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Isaac Blades Kasende', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Sherwin Asingwire', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Mercyline Nafula', role: 'IT Specialist', bio: 'Provides technical support, manages computer systems, networks, and ensures technology runs smoothly.', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Happy Kutentsa', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Daphine Kansime', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Emunot Sharma Emmanuel', role: 'Software Engineer', bio: 'Designs, develops, tests, and maintains software applications or systems to meet user needs.', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1887&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(59,130,246,0.12),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(147,51,234,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the Team</h2>
          <p className="mt-3 text-slate-300">A multidisciplinary crew delivering mission-critical systems and support.</p>
        </div>

        <div className="mt-10 grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={m.img} alt={m.name} className="h-40 w-full object-cover object-center opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{m.name}</h3>
                <p className="text-cyan-300 text-sm">{m.role}</p>
                <p className="mt-2 text-slate-300 text-sm">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
