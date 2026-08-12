import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Projects />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
