import { useState } from 'react'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Reemplaza TU_ID_DE_FORMSPREE con el ID que te da Formspree al crear el formulario
      const response = await fetch("https://formspree.io/f/xpqynyog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contactar" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="section-label">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">
              Trabajemos<br />juntos
            </h2>
            <div className="w-12 h-1 bg-accent-500 mb-8"></div>
            <p className="text-lg text-primary-600 leading-relaxed mb-12">
              ¿Listo para iniciar tu próximo proyecto? Contáctanos y conversemos sobre cómo podemos ayudarte.
            </p>
            <div className="space-y-6">
              {[
                { icon: FiMapPin, label: 'Dirección', value: 'Psje. Gustavo carrasco 274, placilla, Valparaíso, Chile' },
                { icon: FiPhone, label: 'Teléfono', value: '+569 8189 3633' },
                { icon: FiMail, label: 'Email', value: 'gerencia@gvalingenieria.cl' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-primary-900 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right - Form */}
          <div>
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                Hubo un error al enviar el mensaje. Inténtalo de nuevo.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-primary-200 focus:border-primary-900 focus:ring-0 bg-transparent text-primary-900 placeholder-primary-400 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-primary-200 focus:border-primary-900 focus:ring-0 bg-transparent text-primary-900 placeholder-primary-400 transition-colors"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-primary-200 focus:border-primary-900 focus:ring-0 bg-transparent text-primary-900 placeholder-primary-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-primary-200 focus:border-primary-900 focus:ring-0 bg-transparent text-primary-900 placeholder-primary-400 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-solid disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FiSend className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact