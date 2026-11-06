import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logoUe from '@/public/images/logo-ue.webp'

const PDF_URL = '/docs/Creacion_Empresas_Academia_Formacion_Valrojo.pdf'

export const metadata: Metadata = {
  title: 'Ayudas',
  description:
    'Proyecto de creación de empresa de Academia de Formación Valrojo, apoyado por el ICECYL y cofinanciado por el Fondo Europeo de Desarrollo Regional (FEDER).',
  alternates: { canonical: 'https://valrojoformacion.es/ayudas/' },
}

export default function Ayudas() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-10 md:py-16">
        <Link href="/" className="text-primary-600 hover:underline text-sm">
          ← Volver a Valrojo Formación
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Image src={logoUe} alt="Unión Europea - FEDER" className="h-16 w-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Creación de empresa: Academia de Formación Valrojo
            </h1>
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

            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary-600 font-semibold hover:underline"
            >
              Abrir / descargar el PDF →
            </a>
          </div>

          <div className="w-full h-[70vh] lg:h-[85vh] lg:sticky lg:top-6 rounded-lg overflow-hidden shadow-md bg-white">
            <iframe
              src={PDF_URL}
              title="Documento de la ayuda - Creación de empresas Academia de Formación Valrojo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
