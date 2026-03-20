const stats = [
  { number: '50+', label: 'Proyectos Completados' },
  { number: '5+', label: 'Años de Experiencia' },
  { number: '100%', label: 'Compromiso' },
]
const values = [
  { title: 'Calidad', desc: 'Estándares superiores en cada proyecto' },
  { title: 'Innovación', desc: 'Tecnología y métodos de vanguardia' },
  { title: 'Sostenibilidad', desc: 'Construcción responsable' },
  { title: 'Compromiso', desc: 'Entrega puntual garantizada' },
]
const About = () => {
  return (
    <section id="historia" className="bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text */}
          <div>
            <p className="section-label">Nuestra Historia</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight mb-8">
              Construyendo con excelencia desde el primer día.
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-10">
              G-Val Ingeniería y Construcción nació con una visión clara: 
              transformar espacios con excelencia técnica y compromiso absoluto. 
              Cada proyecto es una oportunidad para superar expectativas.
            </p>
            {/* Values */}
            <div className="grid grid-cols-2 gap-8">
              {values.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-primary-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right - Stats */}
          <div className="flex flex-col justify-center">
            <div className="space-y-0">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`py-10 ${idx !== stats.length - 1 ? 'border-b border-primary-200' : ''}`}
                >
                  <div className="text-6xl md:text-7xl font-black text-primary-900 leading-none mb-2">
                    {stat.number}
                  </div>
                  <p className="text-primary-600 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About