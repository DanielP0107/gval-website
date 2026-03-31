import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "56981893633"; // Tu número configurado
  const message = "Hola G-VAL, me gustaría solicitar una cotización para un proyecto.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip elegante que aparece al hacer hover */}
      <span className="mr-3 px-4 py-2 bg-primary-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl">
        ¿Necesitas asesoría?
      </span>

      {/* Botón Principal */}
      <div className="w-14 h-14 bg-primary-900 text-white flex items-center justify-center rounded-sm shadow-2xl transition-all duration-300 hover:bg-accent-500 hover:-translate-y-1 active:scale-95 border border-white/10">
        <FaWhatsapp className="w-7 h-7" />
        
        {/* Pulso sutil de notificación (opcional) */}
        <span className="absolute inline-flex h-full w-full rounded-sm bg-accent-500 opacity-20 animate-ping -z-10"></span>
      </div>
    </a>
  );
};

export default WhatsAppButton;