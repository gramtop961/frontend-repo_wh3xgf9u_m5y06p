import { motion } from 'framer-motion'
import { Megaphone, Rocket, BarChart3, Palette } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Social Growth',
    desc: 'Full-funnel social strategies, content systems, and distribution that compound reach.'
  },
  {
    icon: Rocket,
    title: 'Paid Performance',
    desc: 'High-ROI media buying across Meta, Google, and TikTok with relentless testing.'
  },
  {
    icon: BarChart3,
    title: 'SEO & Content',
    desc: 'Authority-building SEO, content calendars, and analytics-driven optimization.'
  },
  {
    icon: Palette,
    title: 'Creative Production',
    desc: 'Thumb-stopping creative, UGC, and micro-ads engineered for conversion.'
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

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-end justify-between mb-10"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Services designed for impact
          </motion.h2>
          <motion.p variants={item} className="max-w-md text-neutral-600 hidden md:block">
            Every engagement is engineered for measurable growth, not vanity metrics.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
