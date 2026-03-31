import { FiArrowRight } from 'react-icons/fi'
import casaConcon from '../assets/casa concon.png'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoom_20s_linear_infinite_alternate]"
          style={{ backgroundImage: `url(${casaConcon})` }}
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 via-primary-900/70 to-primary-900/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 animate-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-accent-500" />
              <span className="text-accent-500 text-[30px] font-black uppercase tracking-[0.4em]">
                Ingeniería de vanguardia
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-10">
              CONSTRUIR<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>INNOVAR</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <a href="#proyectos" className="btn-solid group">
                Ver Proyectos
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
             
            </div>
          </div>

          {/* Side Stats/Card (Optional but looks premium) */}
          <div className="hidden lg:block lg:col-span-4 animate-reveal [animation-delay:200ms]">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-sm">
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Especialistas en proyectos residenciales y comerciales de alta complejidad a lo largo de todo Chile.
              </p>
              <div className="space-y-6">
                <div>
                  <span className="block text-4xl font-black text-white">+50</span>
                  <span className="text-[15px] text-accent-500 uppercase font-bold tracking-widest">Proyectos Entregados</span>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <span className="block text-4xl font-black text-white">5</span>
                  <span className="text-[15px] text-accent-500 uppercase font-bold tracking-widest">Años de Experiencia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </section>
  )
}

export default Hero