import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
    <footer className="border-t border-white/5 bg-[#050506] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-heading font-black text-white text-base shadow-[0_0_10px_rgba(124,58,237,0.2)]">
              R
            </div>
            <span className="font-heading font-bold text-white tracking-wide text-base">
              Reza<span className="text-indigo-400">.</span>
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-sans tracking-wide">
            Information Systems Student & Frontend Developer
          </span>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">About</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Action: Scroll Top */}
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-zinc-650 font-mono font-medium">
            &copy; {currentYear} Muhammad Reza. All rights reserved.
          </span>
          
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
