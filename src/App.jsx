import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <section id="contact" className="py-20 md:py-28 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build your growth engine</h2>
                <p className="mt-3 text-neutral-600 max-w-xl">
                  Tell me about your goals and timelines. I’ll review and reply with an action plan and opportunities I see.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                  <li>• Strategy-first, performance-obsessed</li>
                  <li>• Seamless collaboration and clear reporting</li>
                  <li>• Flexible engagements: audits, retainers, or sprints</li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-neutral-600">Name</label>
                      <input type="text" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-600">Email</label>
                      <input type="email" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm text-neutral-600">Company</label>
                    <input type="text" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                  </div>
                  <div className="mt-4">
                    <label className="text-sm text-neutral-600">Project Brief</label>
                    <textarea rows="4" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                  </div>
                  <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">
                    Request Proposal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} BlueMark Digital. All rights reserved.
      </footer>
    </div>
  )
}

export default App
