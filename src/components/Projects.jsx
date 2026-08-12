import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, AppWindow, Database, ShoppingBag, Terminal, CheckCircle2, ExternalLink } from 'lucide-react'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Open Trip Website',
      category: 'Web Development',
      image: 'src/assets/images/karimunjawavibestrip.jpg', 
      tech: ['PHP', 'JSON', 'Bootstrap'],
      shortDesc: 'A web-based platform that provides reservation services for tour packages and local accommodations in the Karimunjawa Islands.',
      challenge: 'Designing a clean information architecture to manage the numerous combinations of tour packages and accommodation types, as well as maintaining the website loading performance despite handling many high-resolution visual assets. Additionally, a conventional booking flow was considered unsuitable because tourists generally require real-time consultation before making a transaction.',
      solution: 'The system was built with hierarchical navigation so visitors can easily filter the tour packages. To simplify the booking flow, a Direct-to-WhatsApp form integration was implemented to instantly capture essential visitor data. Rating features and tourist reviews were also added to the user interface as social proof to build trust.',
      result: 'The system successfully improved operational efficiency since the website serves as an independent information center, reducing the admin workload in answering repetitive questions. Streamlining the transaction flow also accelerated customer service, increased sales conversion rates, and ultimately provided a highly professional digital image for the business.',
      type: 'web',
      demoUrl: 'https://karimunjawavibestrip.com/',
    },
    {
      id: 2,
      title: 'PRESTI',
      category: 'Web Development',
      image: 'src/assets/images/presti.jpg',
      tech: ['PHP', 'MySQL', 'Laravel'],
      shortDesc: 'A QR Code-Based Attendance and Tuition Fee Management System for schools, enabling automated attendance tracking and tuition payment verification.',
      challenge: 'Previously, the school attendance recording and tuition fee (SPP) management processes were handled manually, resulting in slow report generation, a higher risk of data entry errors, limited payment transparency for parents, and the accumulation of outdated student records that negatively affected database performance.',
      solution: 'PRESTI was developed to address these challenges by integrating a real-time QR Code-based attendance system, an online tuition payment verification portal for parents, and bulk data cleanup with isolated database backup features to ensure secure and efficient school data management.',
      result: 'The implementation of PRESTI successfully reduced the time required to generate attendance and financial reports by up to 80%, improved payment transparency and monitoring for parents, and maintained fast, responsive system performance by preventing the accumulation of obsolete data.',
      type: 'website',
      demoUrl: 'https://mtsalislamjepara.sch.id/presti', 
    },
    {
      id: 3,
      title: 'UI/UX Design',
      category: 'UI/UX Design',
      image: 'src/assets/images/uiux.jpg', 
      tech: ['Figma'],
      shortDesc: 'Create a mobile app design.',
      challenge: 'High page bounce rates and abandoned shopping carts caused by sluggish page transitions and multi-step checkout processes.',
      solution: 'Designed and built a headless e-commerce architecture with a React-Tailwind SPA frontend and a robust Laravel REST API backend, optimizing asset delivery and introducing a streamlined single-page checkout flow.',
      result: 'Increased visitor conversion rate by 22% and decreased average page load times to under 1.2 seconds.',
      type: 'web',
      demoUrl: 'https://drive.google.com/file/d/119n1s2PwBwPLFI96lKHOtQvEXVut4keh/view?usp=drive_link',
    },
  ]

  // Render premium interactive CSS visuals for each project type
  const renderProjectVisual = (type) => {
    switch (type) {
      case 'mobile':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-purple-950 to-indigo-950 flex items-center justify-center p-6 select-none">
            {/* Phone Shell */}
            <div className="w-[140px] h-[240px] rounded-3xl border-4 border-zinc-700 bg-zinc-900 shadow-2xl flex flex-col p-2.5 relative overflow-hidden">
              <div className="w-16 h-3 bg-zinc-800 rounded-full mx-auto mb-2"></div>
              {/* App screen */}
              <div className="flex-1 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[8px] text-zinc-400 font-bold px-0.5">
                  <span>Stock List</span>
                  <span className="text-emerald-400">Live</span>
                </div>
                <div className="h-6 rounded bg-zinc-800 flex items-center px-1.5 justify-between">
                  <div className="w-8 h-1.5 bg-zinc-600 rounded"></div>
                  <span className="text-[7px] bg-emerald-500/20 text-emerald-400 font-bold px-1 py-0.5 rounded">420 qty</span>
                </div>
                <div className="h-6 rounded bg-zinc-800 flex items-center px-1.5 justify-between">
                  <div className="w-10 h-1.5 bg-zinc-600 rounded"></div>
                  <span className="text-[7px] bg-red-500/20 text-red-400 font-bold px-1 py-0.5 rounded">12 qty</span>
                </div>
                <div className="h-6 rounded bg-zinc-800 flex items-center px-1.5 justify-between">
                  <div className="w-7 h-1.5 bg-zinc-600 rounded"></div>
                  <span className="text-[7px] bg-emerald-500/20 text-emerald-400 font-bold px-1 py-0.5 rounded">80 qty</span>
                </div>
                {/* Visual Scanner Barcode button */}
                <div className="mt-auto h-7 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-[7px] text-white font-bold tracking-wider">SCAN ITEM</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'dashboard':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-emerald-950 to-teal-950 flex items-center justify-center p-6 select-none">
            {/* Monitor Shell */}
            <div className="w-[260px] h-[170px] rounded-xl border-4 border-zinc-700 bg-zinc-900 shadow-2xl flex flex-col p-2 relative overflow-hidden">
              {/* Dashboard Content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[7px] text-zinc-400 font-bold border-b border-white/5 pb-1">
                  <span>KPI Metrics Overview</span>
                  <span className="text-teal-400">Database Sync</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded bg-zinc-800 p-1 flex flex-col justify-between">
                    <span className="text-[5px] text-zinc-500">Sales Value</span>
                    <span className="text-[8px] font-bold text-white">$14.2K</span>
                  </div>
                  <div className="h-8 rounded bg-zinc-800 p-1 flex flex-col justify-between">
                    <span className="text-[5px] text-zinc-500">Profit Margin</span>
                    <span className="text-[8px] font-bold text-emerald-400">32.4%</span>
                  </div>
                  <div className="h-8 rounded bg-zinc-800 p-1 flex flex-col justify-between">
                    <span className="text-[5px] text-zinc-500">Stock Turn</span>
                    <span className="text-[8px] font-bold text-teal-400">4.2x</span>
                  </div>
                </div>
                {/* Analytical Chart Visual */}
                <div className="flex-1 rounded bg-zinc-850 border border-white/5 flex items-end p-2 gap-1 justify-around">
                  <div className="w-3.5 h-6 bg-teal-500/70 rounded-t"></div>
                  <div className="w-3.5 h-10 bg-teal-400 rounded-t"></div>
                  <div className="w-3.5 h-8 bg-emerald-500 rounded-t"></div>
                  <div className="w-3.5 h-12 bg-emerald-400 rounded-t"></div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'web':
      default:
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-amber-950 to-orange-950 flex items-center justify-center p-6 select-none">
            {/* Browser Shell */}
            <div className="w-[260px] h-[170px] rounded-xl border-4 border-zinc-700 bg-zinc-900 shadow-2xl flex flex-col relative overflow-hidden">
              {/* Browser bar */}
              <div className="h-3.5 bg-zinc-800 flex items-center justify-between px-2 border-b border-white/5">
                <div className="flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650"></span>
                </div>
                <div className="w-28 h-2 bg-zinc-700 rounded-full mx-auto"></div>
              </div>
              {/* E-commerce grid screen */}
              <div className="flex-1 flex flex-col p-2.5 gap-2">
                <div className="flex justify-between items-center text-[7px] text-zinc-400 font-bold">
                  <span>Modern Storefront</span>
                  <ShoppingBag className="w-2 h-2" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-zinc-850 rounded p-1 flex flex-col gap-1 items-center border border-white/5">
                    <div className="w-6 h-6 rounded bg-zinc-700"></div>
                    <div className="w-7 h-1 bg-zinc-600 rounded"></div>
                    <span className="text-[5px] text-amber-400 font-bold">$49.00</span>
                  </div>
                  <div className="bg-zinc-850 rounded p-1 flex flex-col gap-1 items-center border border-white/5">
                    <div className="w-6 h-6 rounded bg-zinc-700"></div>
                    <div className="w-7 h-1 bg-zinc-600 rounded"></div>
                    <span className="text-[5px] text-amber-400 font-bold">$89.00</span>
                  </div>
                  <div className="bg-zinc-850 rounded p-1 flex flex-col gap-1 items-center border border-white/5">
                    <div className="w-6 h-6 rounded bg-zinc-700"></div>
                    <div className="w-7 h-1 bg-zinc-600 rounded"></div>
                    <span className="text-[5px] text-amber-400 font-bold">$12.00</span>
                  </div>
                </div>
                <div className="h-4 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-[5px] text-amber-300 font-bold">PROCEED TO CHECKOUT (1-STEP)</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 tracking-wider uppercase mb-4"
          >
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-xl text-center font-sans text-sm md:text-base font-light"
          >
            A curated collection of systems representing backend integrations, analytical intelligence, and modern user interfaces.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group shadow-xl h-full"
            >
              {/* Project Preview visual */}
              <div className="aspect-[4/3] border-b border-white/5 overflow-hidden relative bg-zinc-950">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  renderProjectVisual(project.type)
                )}
                {/* Category badge */}
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Quick Live Link overlay */}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all flex items-center gap-1.5 px-3 text-[11px] font-medium shadow-lg"
                    title="Lihat Live Demo Project"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Project Text Info */}
              <div className="p-6 flex flex-col flex-1 justify-between items-start text-left">
                <div className="w-full">
                  <h3 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans font-light">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="w-full">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons (Inspect & Live Demo & Repo) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/10 text-white font-medium text-xs hover:bg-white hover:text-black hover:border-white transition-all"
                    >
                      Inspect Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/20 shrink-0"
                        title="Lihat Hasil Project (Live Demo)"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Expanded Modal (Drawer Overlay) */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl bg-[#0b0b0d] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="text-left mb-8 pr-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">
                    {activeProject.category}
                  </span>
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-white">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {activeProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex flex-col gap-6 text-left border-t border-white/5 pt-6">
                  {/* Challenge */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-base mb-1.5">The Challenge</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
                        {activeProject.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <AppWindow className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-base mb-1.5">The Solution</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-base mb-1.5">The Result</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light font-medium">
                        {activeProject.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Lihat Live Demo
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors ml-auto"
                  >
                    Tutup
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
