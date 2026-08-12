import { motion } from 'framer-motion'
import { Layout, Code2, GitBranch, Database, Check } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      icon: Layout,
      color: 'from-pink-500 to-rose-500 shadow-rose-500/10',
      tagline: 'Interfaces that convert.',
      description: 'Designing high-converting landing pages, user-centric mobile layouts, wireframes, and prototypes inside Figma. Incorporating modern design tokens, cohesive brand palettes, and strict layout grids.',
      bullets: ['User Flow mapping', 'Interactive Figma prototyping', 'Responsive web layout', 'Design Systems design']
    },
    {
      title: 'Web Development',
      icon: Code2,
      color: 'from-indigo-500 to-blue-500 shadow-indigo-500/10',
      tagline: 'Code built to perform.',
      description: 'Building fast, responsive, and cross-browser compatible websites using modern stacks like React.js, Tailwind CSS, Laravel, and Flutter. Prioritizing layout accessibility, SEO architecture, and loading speed.',
      bullets: ['React/Vite SPA builds', 'Tailwind utility styling', 'API routes integration', 'Mobile-first optimization']
    }
  ]

  return (
    <section id="services" className="py-24 relative border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 tracking-wider uppercase mb-4">
            Offerings
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
            Services & Expertise
          </h2>
          <p className="text-zinc-400 max-w-xl text-center font-sans text-sm md:text-base font-light">
            Providing tailored design and engineering solutions to build high-performance products and streamline operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/5 flex flex-col justify-between text-left relative overflow-hidden group h-full"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>

                <div>
                  {/* Top Bar with Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-xl">{service.title}</h3>
                      <p className="text-xs text-indigo-300 font-semibold">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bullets Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto border-t border-white/5 pt-6">
                  {service.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-center gap-2 text-zinc-350 text-xs font-medium font-sans">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
