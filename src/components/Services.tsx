const services = [
  {
    label: 'Quiénes Somos',
    text: 'Desde 2019 construyendo en Chile. En el mercado de la construcción e ingeniería eléctrica con compromiso y excelencia profesional.',
  },
  {
    label: 'Nuestra Misión',
    text: 'Ejecutar proyectos de alto impacto con los más altos estándares de calidad, seguridad y eficiencia en cada etapa del proceso.',
  },
  {
    label: 'Valores Fundamentales',
    text: 'Pasión. Integridad. Trabajo duro. Profesionalismo. Seguridad. Compromiso con nuestros clientes y comunidad.',
  },
]
const servicesList = [
  { title: 'Construcción Civil', description: 'Edificios residenciales, comerciales e industriales.' },
  { title: 'Ingeniería Eléctrica', description: 'Tableros, corrientes débiles y sistemas eléctricos.' },
  { title: 'Obras Públicas', description: 'Infraestructura urbana con tecnología de vanguardia.' },
  { title: 'Remodelaciones', description: 'Transformación de espacios existentes.' },
  { title: 'Consultoría Técnica', description: 'Asesoría especializada en construcción.' },
  { title: 'Gestión de Proyectos', description: 'Control total desde planificación hasta entrega.' },
]
const Services = () => {
  return (
    <section id="servicios" className="bg-white">
      {/* About strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {services.map((item, idx) => (
            <div key={idx}>
              <p className="section-label">{item.label}</p>
              <p className="text-lg text-primary-800 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-primary-100"></div>
      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <p className="section-label">Servicios</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight max-w-3xl mb-16">
          Soluciones integrales en ingeniería y construcción.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {servicesList.map((service, idx) => (
            <div key={idx} className="group">
              <div className="flex items-start space-x-4">
                <span className="text-sm font-bold text-primary-400 mt-1">0{idx + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services