import Image from 'next/image'
import fachada from '@/public/images/fachada.webp'

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Sobre Nosotros</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-64 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={fachada}
              alt="Fachada de la Academia de Formación Valrojo"
              fill
              className="object-cover object-left"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Academia de Formación Valrojo: creación de empresa y competencias digitales en el mundo rural
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Academia de Formación Valrojo nace con el propósito de acercar las competencias digitales
                a las personas del medio rural, favoreciendo el aprendizaje tecnológico y mejorando sus
                oportunidades de desarrollo profesional.
              </p>
              <p>
                El proyecto empresarial ha recibido apoyo del Instituto para la Competitividad Empresarial
                de Castilla y León (ICECYL), en el marco de la convocatoria de subvenciones para la creación
                de empresas de 2022, cofinanciada por el Fondo Europeo de Desarrollo Regional (FEDER).
              </p>
              <p>
                Esta ayuda ha hecho posible la ejecución de las obras de construcción y acondicionamiento
                del centro, así como la adquisición del equipamiento tecnológico y mobiliario necesario
                para su funcionamiento (equipos informáticos PC, tablets y mobiliario educativo y de oficina).
              </p>
            </div>

            <div className="mt-6 p-4 bg-primary-50 border-l-4 border-primary-500 rounded-r-lg">
              <p className="text-sm text-primary-700 font-medium">
                Proyecto cofinanciado por la Unión Europea a través del Fondo Europeo de Desarrollo Regional (FEDER).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
