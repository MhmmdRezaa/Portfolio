import { motion } from 'framer-motion'
import { Palette, Code2, Sparkles, CheckCircle2, Terminal, Layers } from 'lucide-react'

export default function Trust() {
  const metrics = [
    { value: '5+', label: 'Projects Completed', description: 'Websites & UI/UX Design.' },
    { value: '1+', label: 'Years Experience', description: 'Practical academic & self-taught builds.' },
    { value: '5+', label: 'Tech Stack Tools', description: 'From design layouts to production code.' },
  ]

  return (
    <section id="trust" className="py-24 relative border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
              <h3 className="font-heading font-black text-5xl md:text-6xl text-white mb-2 tracking-tight">
                <span className="gradient-accent-text">{metric.value}</span>
              </h3>
              <p className="font-heading font-semibold text-zinc-200 mb-1">{metric.label}</p>
              <p className="text-xs text-zinc-400 font-light">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Specialization & Core Pillars</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-4"
          >
            Core Competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-xl text-center font-sans text-sm md:text-base font-light"
          >
            Specialized in two main pillars: crafting modern UI/UX design systems in Figma and engineering fast web applications.
          </motion.p>
        </div>

        {/* Bento Dual Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: UI/UX Design Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-purple-950/20 via-zinc-900/60 to-zinc-950/80 p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-purple-500/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>

            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
                  Figma & Layouts
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3 group-hover:text-purple-200 transition-colors">
                UI/UX Design
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans font-light mb-8">
                Designing intuitive, user-centered digital interfaces. From research and wireframing to high-fidelity interactive Figma prototypes and design systems.
              </p>

              {/* Interactive Visual Design Canvas Widget */}
              <div className="w-full rounded-2xl bg-zinc-950/90 border border-white/10 p-5 mb-8 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">Figma Canvas • 100%</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-medium text-purple-200">Component Auto-Layout</span>
                    </div>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-mono">Tokens Active</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] text-zinc-400 block">Colors</span>
                      <div className="flex justify-center gap-1 mt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] text-zinc-400 block">Type</span>
                      <span className="text-xs font-bold text-white block mt-0.5">Inter</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] text-zinc-400 block">Grid</span>
                      <span className="text-xs font-bold text-emerald-400 block mt-0.5">12-Col</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {['Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Figma'].map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Web Development Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-blue-950/20 via-zinc-900/60 to-zinc-950/80 p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-indigo-500/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>

            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
                  Frontend
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3 group-hover:text-indigo-200 transition-colors">
                Web Development
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans font-light mb-8">
                Building responsive, performant, and cross-browser web applications with modern frameworks, clean code practices, and smooth UI animations.
              </p>

              {/* Interactive Code Editor Widget */}
              <div className="w-full rounded-2xl bg-zinc-950/90 border border-white/10 p-5 mb-8 shadow-inner relative overflow-hidden font-mono">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-zinc-300">App.jsx</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Compiled successfully
                  </span>
                </div>

                <div className="text-[12px] space-y-1.5 text-zinc-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-300">WebDev</span> = () ={'>'} {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-8 text-emerald-300">
                    {'<'}<span>Component</span> <span className="text-indigo-300">responsive</span>=<span className="text-amber-300">&#123;true&#125;</span> /'{'>'}
                  </div>
                  <div className="pl-4">
                    )
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            {/* Core Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {['React.js', 'Laravel', 'PHP & MySQL', 'JavaScript', 'HTML'].map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}



