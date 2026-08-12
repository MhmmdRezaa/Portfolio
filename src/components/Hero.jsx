import { motion } from 'framer-motion'
import { ArrowRight, Code, Sparkles, Database, Laptop, Smartphone } from 'lucide-react'

export default function Hero() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offsetPosition = element.offsetTop - 80
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-semibold text-indigo-300 tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Available for Freelance & Full-time Roles
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
          >
            Hi, I'm <span className="gradient-accent-text text-glow">Muhammad Reza</span>
            <span className="block mt-2 font-medium text-3xl md:text-4xl lg:text-5xl text-zinc-300">
              Building Experiences through UI/UX Design & Web Development
            </span>
          </motion.h1>


          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/5 transition-all hover:scale-[1.02] border border-white/10"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Right column: Interactive Premium Visual Mockup */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[340px] sm:w-[420px] aspect-square rounded-3xl glass-panel border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group"
          >
            {/* Ambient inner glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-500">
                reza-workspace.config
              </div>
            </div>

            {/* Mock Code Block */}
            <div className="flex-1 flex flex-col font-mono text-[11px] sm:text-xs text-indigo-300/80 text-left pt-6 gap-2 select-none">
              <p className="text-zinc-600 font-light">// Analytical developer persona</p>
              <p><span className="text-purple-400">const</span> developer = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-400">'Muhammad Reza'</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-400">'UI/UX & Frontend Architect'</span>,</p>
              <p className="pl-4">major: <span className="text-emerald-400">'Information Systems'</span>,</p>
              <p className="pl-4">passions: [<span className="text-amber-400">'Design System'</span>, <span className="text-amber-400">'Clean Code'</span>],</p>
              <p className="pl-4">solveProblems: <span className="text-indigo-400">()</span> =&gt; &#123;</p>
              <p className="pl-8 text-zinc-400">analyzeProcess().designUX().developClean();</p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>

            {/* Mock Designer Frame Component inside Visual */}
            <div className="h-28 glass-panel bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between px-4 mt-4 relative overflow-hidden">
              <div className="flex flex-col items-start gap-1">
                <div className="w-12 h-2 rounded bg-zinc-700"></div>
                <div className="w-20 h-1.5 rounded bg-zinc-800"></div>
                <div className="flex gap-1.5 mt-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/30 border border-indigo-500/40"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500/30 border border-purple-500/40"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500/30 border border-pink-500/40"></div>
                </div>
              </div>
              
              {/* Dynamic CSS Visual representation */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg animate-float">
                <Laptop className="w-7 h-7" />
              </div>
            </div>
          </motion.div>

          {/* Floating Badge 1: UI/UX Designer */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -left-6 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl glass-panel border border-purple-500/30 shadow-[0_8px_32px_rgba(139,92,246,0.15)] text-xs font-semibold text-purple-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            UI/UX Designer
          </motion.div>

          {/* Floating Badge 2: Frontend Developer */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-16 -right-6 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl glass-panel border border-indigo-500/30 shadow-[0_8px_32px_rgba(99,102,241,0.15)] text-xs font-semibold text-indigo-200"
          >
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            Frontend Developer
          </motion.div>

          {/* Floating Badge 3: Info Systems Student */}
          <motion.div
            animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-8 right-4 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl glass-panel border border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)] text-xs font-semibold text-amber-200"
          >
            <Database className="w-3.5 h-3.5 text-amber-400" />
            Systems Analyst
          </motion.div>

          {/* Floating Badge 4: Problem Solver */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-6 left-6 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl glass-panel border border-emerald-500/30 shadow-[0_8px_32px_rgba(16,185,129,0.15)] text-xs font-semibold text-emerald-200"
          >
            <Laptop className="w-3.5 h-3.5 text-emerald-400" />
            Problem Solver
          </motion.div>

        </div>
      </div>
    </section>
  )
}
