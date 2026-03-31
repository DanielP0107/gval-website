import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'


import logoBlanco from '../assets/logo1b.png'
import logoNegro from '../assets/logo1.png'

interface HeaderProps {
  isScrolled: boolean 
}

const Header = ({ isScrolled }: HeaderProps) => { 
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const links = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#historia', label: 'Nosotros', id: 'historia' },
    { href: '#servicios', label: 'Servicios', id: 'servicios' },
    { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  ]

  // Observador para detectar en qué sección estamos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
      isScrolled 
        ? 'border-gray-100 bg-white shadow-md' 
        : 'border-transparent bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre G-VAL */}
          <a href="#inicio" className="flex items-center gap-4 group">
            {/* Contenedor del Logo: Cambia de imagen según el scroll */}
            <div className="relative h-12 w-auto overflow-hidden">
              <img 
                src={isScrolled ? logoNegro : logoBlanco} 
                alt="G-Val Logo" 
                className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-105" 
              />
            </div>
            
            {/* Texto del Logo */}
            <div className="leading-tight border-l pl-4 border-white/20">
              <span className={`text-xl font-black tracking-tighter block transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                G-VAL
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold block transition-colors duration-300 ${
                isScrolled ? 'text-slate-500' : 'text-white/70'
              }`}>
                Ingeniería y Construcción
              </span>
            </div>
          </a>

          {/* Menú de Navegación (Escritorio) */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 relative group ${
                  activeSection === link.id 
                    ? (isScrolled ? 'text-slate-900' : 'text-white') 
                    : (isScrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/60 hover:text-white')
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                  activeSection === link.id ? 'w-full bg-current' : 'w-0 group-hover:w-full bg-current'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Botón Contactar */}
          <a
            href="#contactar"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-primary-900 text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-accent-500 transition-all shadow-md active:scale-95"
          >
            <span>Contactar</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-primary-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-6 absolute left-0 right-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
            <div className="px-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-xs font-bold uppercase tracking-[0.16em] py-4 px-4 transition-all ${
                    activeSection === link.id 
                      ? 'text-slate-900 bg-slate-50 border-l-4 border-slate-900' 
                      : 'text-slate-500 border-l-4 border-transparent hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contactar"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.16em] w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Contactar</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header