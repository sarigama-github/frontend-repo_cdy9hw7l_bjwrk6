const members = [
  { name: 'Mwanje Joseph', role: 'Sales Manager', bio: 'Leads and motivates the sales team, sets sales targets, develops strategies, and ensures goals are met.' },
  { name: 'John Smith', role: 'Technical Advisor', bio: 'Provides expert guidance on technical products or services, helping clients or teams solve problems and make informed decisions.' },
  { name: 'Haboya Emmanuel', role: 'Technical Advisor', bio: 'Provides expert guidance on technical products or services, helping clients or teams solve problems and make informed decisions.' },
  { name: 'Sarah Lee', role: 'Finance And Operations', bio: 'Manages budgets, expenses, and company resources while overseeing daily operations to ensure smooth business performance.' },
  { name: 'Kellen Muhoozi', role: 'Finance And Operations', bio: 'Manages budgets, expenses, and company resources while overseeing daily operations to ensure smooth business performance.' },
  { name: 'Mike Johnson', role: 'Project Cordinator', bio: 'Organizes, tracks, and supports projects by handling schedules, resources, and communication between teams.' },
  { name: 'Aaron Kamanzi', role: 'Project Cordinator', bio: 'Organizes, tracks, and supports projects by handling schedules, resources, and communication between teams.' },
  { name: 'Isaac Blades Kasende', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.' },
  { name: 'Sherwin Asingwire', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.' },
  { name: 'Mercyline Nafula', role: 'IT Specialist', bio: 'Provides technical support, manages computer systems, networks, and ensures technology runs smoothly.' },
  { name: 'Happy Kutentsa', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.' },
  { name: 'Daphine Kansime', role: 'Sales Representative', bio: 'Promotes and sells products or services directly to customers, builds relationships, and meets sales targets.' },
  { name: 'Emunot Sharma Emmanuel', role: 'Software Engineer', bio: 'Designs, develops, tests, and maintains software applications or systems to meet user needs.' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_40%,rgba(147,51,234,0.12),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the Team</h2>
          <p className="mt-3 text-slate-300">A multidisciplinary crew delivering mission-critical systems and support.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-500 to-fuchsia-500 opacity-20 blur-2xl group-hover:opacity-30 transition" />
              <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-semibold">
                {m.name.split(' ').map(s => s[0]).join('').slice(0,2)}
              </div>
              <h3 className="mt-4 text-white font-semibold">{m.name}</h3>
              <p className="text-cyan-300 text-sm">{m.role}</p>
              <p className="mt-2 text-slate-300 text-sm">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
