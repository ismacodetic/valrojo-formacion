import fondo from '@/public/images/fondo.jpg'

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="text-white py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('${fondo.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container-custom text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Valrojo Formación
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-100">
          Tu academia de referencia en formación digital
        </p>
        <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
          Formación presencial y a distancia adaptada a tus necesidades. 
          Desde lo básico hasta lo avanzado en tecnologías digitales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Explorar Cursos
          </button>
          <button className="btn-secondary border-white text-white hover:bg-white/20">
            Más Información
          </button>
        </div>
      </div>
    </section>
  )
}
