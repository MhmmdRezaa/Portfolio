import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Sparkles, Layers } from 'lucide-react'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'design', name: 'UI/UX Design' },
  ]

  const technologies = [
    {
      name: 'HTML5',
      category: 'frontend',
      categoryLabel: 'Frontend',
      role: 'Markup & Structure',
      desc: 'Semantic HTML5 architecture, web accessibility standards, and SEO optimization.',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      hoverGlow: 'group-hover:border-orange-500/40 group-hover:shadow-[0_0_25px_rgba(227,79,38,0.15)]',
      svg: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24 3.42 21.563L1.5 0z" fill="#E34F26" />
          <path d="M12 2.18v19.55l6.76-1.92L20.3 2.18H12z" fill="#EF652A" />
          <path d="M12 9.47H7.7l-.3-3.37H12V3.91H5.16l.9 10.12H12V9.47zm0 7.82l-3.37-.91-.22-2.47H6.18l.43 4.88 5.39 1.48v-2.98z" fill="#EBEBEB" />
          <path d="M12 9.47v4.58h3.07l-.29 3.24-2.78.75v2.98l5.39-1.48.56-6.31H12v-3.76z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'frontend',
      categoryLabel: 'Frontend',
      role: 'Styling & Layouts',
      desc: 'Responsive layouts, Flexbox/Grid systems, custom micro-animations, and fluid design.',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      hoverGlow: 'group-hover:border-blue-500/40 group-hover:shadow-[0_0_25px_rgba(51,169,220,0.15)]',
      svg: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24 3.42 21.563L1.5 0z" fill="#1572B6" />
          <path d="M12 2.18v19.55l6.76-1.92L20.3 2.18H12z" fill="#33A9DC" />
          <path d="M12 9.47H7.7l-.3-3.37H12V3.91H5.16l.9 10.12H12V9.47zm0 7.82l-3.37-.91-.22-2.47H6.18l.43 4.88 5.39 1.48v-2.98z" fill="#EBEBEB" />
          <path d="M12 9.47v4.58h3.07l-.29 3.24-2.78.75v2.98l5.39-1.48.56-6.31H12v-3.76z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      categoryLabel: 'Frontend',
      role: 'Interactivity & ES6+',
      desc: 'Async data fetching, event-driven interactions, state management, and DOM manipulation.',
      badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      hoverGlow: 'group-hover:border-yellow-500/40 group-hover:shadow-[0_0_25px_rgba(247,223,30,0.15)]',
      svg: (
        <div className="w-9 h-9 rounded-xl bg-[#F7DF1E] flex items-center justify-center font-extrabold text-black text-lg leading-none shadow-md">
          JS
        </div>
      )
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      categoryLabel: 'Frontend',
      role: 'UI Framework',
      desc: 'Rapid grid layouts, component styling, responsive modals, and utility helper classes.',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      hoverGlow: 'group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(111,66,193,0.15)]',
      svg: (
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-md">
          B
        </div>
      )
    },
    {
      name: 'PHP',
      category: 'backend',
      categoryLabel: 'Backend',
      role: 'Server Scripting',
      desc: 'Object-oriented backend programming, session security, and RESTful API endpoints.',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      hoverGlow: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_rgba(119,123,180,0.15)]',
      svg: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path d="M5.5 8.5h2.5c1.2 0 2 .6 2 1.6 0 1.2-.9 1.9-2.2 1.9H6.7l-.6 3.5H4.6l1.5-8.9zm1.7 2.1h.9c.5 0 .9-.3.9-.7 0-.4-.3-.6-.7-.6h-.8l-.4 2.3zm5.7-2.1h1.5l-.6 3.5h2.2l.6-3.5h1.5l-1.5 8.9h-1.5l.6-3.7h-2.2l-.6 3.7h-1.5l1.5-8.9zm6.4 0h2.5c1.2 0 2 .6 2 1.6 0 1.2-.9 1.9-2.2 1.9h-1.1l-.6 3.5h-1.5l1.5-8.9zm1.7 2.1h.9c.5 0 .9-.3.9-.7 0-.4-.3-.6-.7-.6h-.8l-.4 2.3z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'backend',
      categoryLabel: 'Backend',
      role: 'MVC Framework',
      desc: 'Eloquent ORM database modeling, Blade templating, authentication, and backend routing.',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      hoverGlow: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_25px_rgba(255,45,32,0.15)]',
      svg: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M23.6 6.4L13.8.7a1.6 1.6 0 0 0-1.6 0L2.4 6.4a1.6 1.6 0 0 0-.8 1.4v11.4a1.6 1.6 0 0 0 .8 1.4l9.8 5.7a1.6 1.6 0 0 0 1.6 0l9.8-5.7a1.6 1.6 0 0 0 .8-1.4V7.8a1.6 1.6 0 0 0-.8-1.4z" fill="#FF2D20" />
          <path d="M12 2.3l8.4 4.8-8.4 4.9-8.4-4.9L12 2.3zm-9 6.8l8.2 4.8v9.4L3 18.5V9.1zm18 9.4l-8.2 4.8v-9.4l8.2-4.8v9.4z" fill="#FFFFFF" opacity="0.3" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: 'database',
      categoryLabel: 'Database',
      role: 'Relational Database',
      desc: 'Relational database schema modeling, SQL query optimization, joins, and data security.',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      hoverGlow: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(0,117,143,0.15)]',
      svg: (
        <div className="w-9 h-9 rounded-xl bg-[#00758F] flex items-center justify-center shadow-md">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M18.5 16.5c-1.2-1.5-3.8-3.5-6.5-3.5-3.5 0-5.8 2.2-7 4.2 1.8-3.8 5.2-6.2 9-6.2 2.2 0 4.2.8 5.5 2.1l-1 3.4z" fill="#F29111" />
            <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-1.5 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFFFFF" opacity="0.8" />
          </svg>
        </div>
      )
    },
    {
      name: 'Figma',
      category: 'design',
      categoryLabel: 'Design',
      role: 'UI/UX Prototyping',
      desc: 'High-fidelity UI mockups, interactive component variants, wireframes, and design systems.',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      hoverGlow: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(10,207,131,0.15)]',
      svg: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 12A3 3 0 1 1 15 9a3 3 0 0 1-3 3z" fill="#1ABCFE" />
          <path d="M6 15a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0z" fill="#0ACF83" />
          <path d="M6 21a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0z" fill="#0ACF83" opacity="0.7" />
          <path d="M6 9a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" fill="#F24E1E" />
          <path d="M6 3a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" fill="#FF7262" />
          <path d="M12 0h3a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-3V0z" fill="#A259FF" />
        </svg>
      )
    }
  ]

  const filteredTech = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section id="tech-stack" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 tracking-wider uppercase mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Capabilities & Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-xl text-center font-sans text-sm md:text-base font-light leading-relaxed"
          >
            Modern software design tooling, web languages, and database systems engineered to build scalable web applications.
          </motion.p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30 border border-indigo-500'
                  : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                key={tech.name}
                className={`group relative rounded-2xl bg-[#0b0b0e] border border-white/10 p-6 flex flex-col justify-between text-left transition-all duration-300 ${tech.hoverGlow}`}
              >
                <div>
                  {/* Top Card Info: Icon & Category Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {tech.svg}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border tracking-wider uppercase ${tech.badgeColor}`}>
                      {tech.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-heading font-bold text-white text-lg mb-1 group-hover:text-indigo-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 font-medium mb-3">
                    {tech.role}
                  </p>

                  {/* Short Description */}
                  <p className="text-zinc-400 text-xs font-sans font-light leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                  <span>Production Ready</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

