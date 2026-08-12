import { motion } from 'framer-motion'
import { Brain, Users, GraduationCap } from 'lucide-react'

export default function About() {
  const coreValues = [
    {
      title: 'Problem Solver',
      icon: Brain,
      description: 'I focus on understanding requirements, data models, and business objectives before writing code. I map user flows and database relations to create robust solutions.'
    },
    {
      title: 'User Focused',
      icon: Users,
      description: 'Interfaces must be intuitive. I prioritize clear hierarchy, premium typography, and accessibility in design, ensuring applications feel natural to navigate.'
    },
    {
      title: 'Continuous Learner',
      icon: GraduationCap,
      description: 'Technology moves fast. I continuously refine my frontend, backend, and data processing skills, adapting to modern frameworks and coding standards.'
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-xl pointer-events-none"></div>
              {/* Avatar artwork with photo support */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Decorative circuit lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="w-24 h-24 rounded-full border-2 border-indigo-500/40 bg-zinc-800 flex items-center justify-center overflow-hidden shadow-xl mb-4 relative">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Muhammad Reza"
                    className="w-full h-full object-cover object-center relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-heading font-black shadow-lg absolute inset-0 z-0">
                    IS
                  </div>
                </div>
                <span className="font-heading font-bold text-white text-lg">Muhammad Reza</span>
                <span className="text-xs text-zinc-500 mt-1">Information Systems Student</span>
                <span className="text-[10px] text-zinc-600 mt-0.5">UI/UX & Web Developer</span>
              </div>
            </div>
          </div>

          {/* Narrative Story Side */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6"
            >
              Designing With Logic, <span className="gradient-accent-text">Developing With Precision</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4 text-zinc-400 font-sans text-sm md:text-base leading-relaxed font-light"
            >
              <p>
                Bachelor of Information Systems with expertise in UI/UX Design, Web Development, and Systems Analysis. Proficient in developing web applications using PHP, MySQL, HTML, CSS, JavaScript, and Figma for user interface design. Possesses strong analytical thinking and communication skills, with the ability to work effectively both independently and collaboratively to deliver user-centered digital solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col items-center mb-12">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">Why Work With Me?</h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg text-center font-sans">
              I align product aesthetics with deep logical architecture to build robust user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col text-left items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-3">{val.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">{val.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
