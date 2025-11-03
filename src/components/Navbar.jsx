import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/30 dark:border-white/10 rounded-full shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#hero" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
              BlueMark Digital
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
