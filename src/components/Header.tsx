import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import logoGval from '../assets/logo blanco g-val.png'

interface HeaderProps {
  isScrolled: boolean // Mantenemos la prop por si la usas en otro lado, pero ya no afecta al diseño
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const links = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#servicios', label: 'Servicios', id: 'servicios' },
    { href: '#historia', label: 'Nosotros', id: 'historia' },
    { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  ]

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary-100 bg-white shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre G-VAL */}
          <a href="#inicio" className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-primary-900 rounded-sm flex items-center justify-center">
              <img src={logoGval} alt="G-Val" className="w-8 h-8 object-contain" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-black tracking-tight block text-primary-900">G-VAL</span>
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-primary-600">Ingeniería y Construcción</span>
            </div>
          </a>

          {/* Menú de Navegación (Escritorio) */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 relative group ${
                  activeSection === link.id ? 'text-primary-900' : 'text-primary-600 hover:text-primary-900'
                }`}
              >
                {link.label}
                {/* Línea indicadora de sección activa */}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-primary-900 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Botón Contactar (Estilo Global) */}
          <a
            href="#contactar"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-primary-900 text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-accent-500 mb-8 transition-colors shadow-md active:scale-95"
          >
            <span>Contactar</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-primary-100 py-6 absolute left-0 right-0 shadow-xl animate-in fade-in slide-in-from-top-4">
            <div className="px-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-xs font-bold uppercase tracking-[0.16em] py-4 px-4 transition-all ${
                    activeSection === link.id 
                      ? 'text-primary-900 bg-primary-50 border-l-4 border-primary-900' 
                      : 'text-primary-600 border-l-4 border-transparent'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contactar"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-primary-900 text-white text-xs font-bold uppercase tracking-[0.16em] w-full"
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