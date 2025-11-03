import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DTC Beauty Launch',
    metric: '+218% ROAS',
    tag: 'Paid Social',
    gradient: 'from-pink-300 via-fuchsia-300 to-purple-300'
  },
  {
    title: 'B2B SaaS Pipeline',
    metric: '+142% SQLs',
    tag: 'Content + SEO',
    gradient: 'from-blue-300 via-sky-300 to-cyan-300'
  },
  {
    title: 'Lifestyle Brand Lift',
    metric: '3.1x Growth',
    tag: 'Influencer + UGC',
    gradient: 'from-amber-300 via-orange-300 to-rose-300'
  },
  {
    title: 'Local Services Domination',
    metric: '#1 on Maps',
    tag: 'Local SEO',
    gradient: 'from-emerald-300 via-green-300 to-teal-300'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Work() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-end justify-between mb-10"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Selected work & results
          </motion.h2>
          <motion.p variants={item} className="max-w-md text-neutral-600 hidden md:block">
            Case studies that highlight strategy, execution, and measurable impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white"
            >
              <div className={`h-56 bg-gradient-to-br ${p.gradient}`}></div>
              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">{p.tag}</div>
                <h3 className="mt-1 text-xl font-semibold text-neutral-900">{p.title}</h3>
                <div className="mt-3 inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 text-xs">
                  {p.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
