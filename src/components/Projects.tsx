import { useState } from 'react'
import { FiPlay, FiArrowRight } from 'react-icons/fi'
import casaConcon from '../assets/casa concon.png'
import modulosAsmar from '../assets/modulos de trabajo asmar.jpeg'
import segundoPisoAsmar from '../assets/segundo piso asmar.jpeg'
import corrientesDebiles from '../assets/sistema corrientes debiles.jpeg'
import tableroAsmar from '../assets/tablero asmar.jpeg'
import tableroColegio from '../assets/trabajos tablero colegio.jpg'
import videoJardin from '../assets/video jardin ñuñoa.mp4'
const projects = [
  {
    id: 1,
    title: 'Casa Concón',
    category: 'Residencial',
    image: casaConcon,
  },
  {
    id: 2,
    title: 'Módulos de Trabajo ASMAR',
    category: 'Comercial',
    image: modulosAsmar,
  },
  {
    id: 3,
    title: 'Segundo Piso ASMAR',
    category: 'Comercial',
    image: segundoPisoAsmar,
  },
  {
    id: 4,
    title: 'Sistema Corrientes Débiles',
    category: 'Infraestructura',
    image: corrientesDebiles,
  },
  {
    id: 5,
    title: 'Tablero Eléctrico ASMAR',
    category: 'Infraestructura',
    image: tableroAsmar,
  },
  {
    id: 6,
    title: 'Tablero Eléctrico Colegio',
    category: 'Infraestructura',
    image: tableroColegio,
  },
]
const Projects = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <section id="proyectos" className="bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <p className="section-label">Proyectos</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight max-w-4xl">
          Brindamos a nuestros clientes altos estándares en la ejecución y entrega de proyectos.
        </h2>
      </div>
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden bg-primary-100 cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
              
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex items-center text-white/80 text-sm font-medium">
                  <span>Ver proyecto</span>
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              {/* Bottom bar - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="text-sm font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Video Section */}
      <div className="bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-4">Ultimo Proyecto</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Jardín Ñuñoa
              </h3>
              <p className="text-primary-400 text-lg leading-relaxed mb-8">
                Mira el resultado de nuestro trabajo en este proyecto residencial.
              </p>
              {!showVideo && (
                <button 
                  onClick={() => setShowVideo(true)}
                  className="btn-outline-white"
                >
                  <FiPlay className="w-4 h-4 mr-2" />
                  Reproducir Video
                </button>
              )}
            </div>
            <div className="relative aspect-video overflow-hidden bg-black">
              {!showVideo ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <video 
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  >
                    <source src={videoJardin} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={videoJardin} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects