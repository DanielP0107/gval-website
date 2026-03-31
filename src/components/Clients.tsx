// 1. IMPORTA LAS IMÁGENES (Asegúrate de que las rutas sean correctas en tu proyecto)
import logoAsmar from '../assets/Asmar.png'
import logoArmada from '../assets/Armada.png'
import logoEnel from '../assets/Enel.png'
import logoAlianza from '../assets/alianza.jpeg' 

const clients = [
  { name: 'Asmar', logo: logoAsmar },
  { name: 'Armada', logo: logoArmada },
  { name: 'Enel', logo: logoEnel },
  { name: 'Lycée Jean dAlembert', logo: logoAlianza },
]

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[25px] uppercase tracking-[0.3em] font-bold text-accent-500 mb-4">
            Confianza
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-primary-900 tracking-tighter">
            CLIENTES QUE RESPALDAN NUESTRO TRABAJO
          </h3>
          <div className="w-12 h-1 bg-primary-900 mx-auto mt-6"></div>
        </div>

        {}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex justify-center items-center min-w-[140px] transition-all duration-500"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-25 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients