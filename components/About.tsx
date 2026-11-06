export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Sobre Nosotros</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Academia de Formación Integral
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                En Valrojo Formación nos dedicamos a acercar la tecnología digital a todas las personas,
                independientemente de su edad o nivel de conocimiento.
              </p>
              <p>
                Ofrecemos cursos presenciales y a distancia que van desde conocimientos básicos en herramientas
                digitales hasta niveles avanzados en disciplinas como diseño, fotografía y tecnologías emergentes.
              </p>
              <p>
                Nuestro objetivo es facilitar el día a día de nuestra comunidad, proporcionando
                los conocimientos necesarios para interactuar con administraciones públicas, gestionar
                datos bancarios y aprovechar al máximo las nuevas tecnologías.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-600">Estudiantes satisfechos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <p className="text-gray-600">Cursos disponibles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
              <p className="text-gray-600">Modalidades (presencial y online)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2">∞</div>
              <p className="text-gray-600">Posibilidades de aprendizaje</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué enseñamos?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">Nivel Básico</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Herramientas digitales básicas</li>
                <li>• Trámites por Internet</li>
                <li>• Email y comunicación digital</li>
                <li>• Móviles y apps</li>
                <li>• Redes sociales seguras</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">Sistema Operativo</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Entorno básico de PC</li>
                <li>• Mantenimiento de móviles</li>
                <li>• Ajustes y personalización</li>
                <li>• Instalación de aplicaciones</li>
                <li>• Seguridad digital</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">Nivel Avanzado</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Photoshop y edición</li>
                <li>• Fotografía digital</li>
                <li>• Diseño web y gráfico</li>
                <li>• Impresión 3D</li>
                <li>• Fotogrametría y drones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
