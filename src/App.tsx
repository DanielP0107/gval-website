import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton' 

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-white selection:bg-accent-500 selection:text-white">
      {/* Header recibe el estado del scroll para su transparencia */}
      <Header isScrolled={isScrolled} />
      
      <main>
        {}
        <Hero />
        
        {}
        <div className="relative">
          <Services />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />

      {}
      <WhatsAppButton />
    </div>
  )
}

export default App