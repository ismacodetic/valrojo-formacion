export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Valrojo Formación
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-primary-100">
          Tu academia de referencia en formación digital
        </p>
        <p className="text-lg mb-8 text-primary-100 max-w-2xl mx-auto">
          Formación presencial y a distancia adaptada a tus necesidades. 
          Desde lo básico hasta lo avanzado en tecnologías digitales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Explorar Cursos
          </button>
          <button className="btn-secondary border-white text-white hover:bg-primary-700">
            Más Información
          </button>
        </div>
      </div>
    </section>
  )
}
