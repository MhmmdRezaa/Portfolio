import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageSquare } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple active link detection
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offsetPosition = element.offsetTop - 80
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(targetId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#050506]/85 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Profile Photo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 bg-zinc-800 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-105 group-hover:border-indigo-400 transition-all duration-300 relative">
              <img 
                src="public/images/logo.jpg" 
                alt="Muhammad Reza"
                className="w-full h-full object-cover object-center relative z-10"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0'
                }}
              />
              <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-heading font-bold text-white text-lg absolute inset-0 z-0">
                R
              </div>
            </div>
            <span className="font-heading font-semibold text-white tracking-wide text-lg">
              Muhammad Reza<span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 glass-panel px-1.5 py-1.5 rounded-full border border-white/5 bg-[#121216]/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.2)] hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[73px] left-0 w-full z-40 bg-[#050506] border-b border-white/5 py-8 px-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium py-2 border-b border-white/5 ${
                    activeSection === link.id ? 'text-indigo-400 font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
