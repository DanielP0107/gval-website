import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import logoGval from '../assets/logo1.png'
const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-15 h-15 rounded flex items-center justify-center p-1">
                <img src={logoGval} alt="G-Val" className="w-8 h-8 object-contain" />
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold tracking-tight block">G-VAL</span>
                <span className="text-[10px] text-primary-500 uppercase tracking-[0.2em]">Ingeniería y Construcción</span>
              </div>
            </div>
            <p className="text-primary-400 text-sm leading-relaxed">
              Construyendo con excelencia técnica y compromiso profesional.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: FiInstagram, href: '#' },
                { icon: FiLinkedin, href: '#' },
                { icon: FiMail, href: 'mailto:contacto@gvalingenieria.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 border border-primary-700 hover:border-white flex items-center justify-center transition-all hover:bg-white hover:text-primary-900"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-6">Navegación</h4>
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#servicios', label: 'Servicios' },
              { href: '#historia', label: 'Historia' },
              { href: '#proyectos', label: 'Proyectos' },
              { href: '#contactar', label: 'Contacto' },
            ].map((link, idx) => (
              <a key={idx} href={link.href} className="block py-1.5 text-sm text-primary-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-6">Servicios</h4>
            {[
              'Construcción Civil',
              'Ingeniería Eléctrica',
              'Obras Públicas',
              'Remodelaciones',
              'Consultoría',
            ].map((service, idx) => (
              <p key={idx} className="py-1.5 text-sm text-primary-300">
                {service}
              </p>
            ))}
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-6">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-300">
              <p>Av. Principal 123Psje. Gustavo carrasco 274, placilla<br />Valparaíso, Chile</p>
              <p>+569 8189 3633</p>
              <p>gerencia@gvalingenieria.cl</p>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-primary-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-500">
          <p>&copy; 2024 G-Val Ingeniería y Construcción. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Desarrollado por Daniel Peralta</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer