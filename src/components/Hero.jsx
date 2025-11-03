import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/40"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur"
            >
              Premium Digital Marketing Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900"
            >
              I grow brands with strategy, content, and performance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-neutral-600"
            >
              Performance-focused digital marketing for ambitious businesses. SEO, paid media, social, and creative that move the needle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-400 transition-colors"
              >
                View Work
              </a>
            </motion.div>
          </div>

          <div className="relative h-[360px] md:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden border border-neutral-200 shadow-inner">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
