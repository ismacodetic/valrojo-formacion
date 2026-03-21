import Map from './Map'

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Contacta con Nosotros</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-5">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">📍</span> Ubicación
                  </h4>
                  <p className="text-sm text-gray-600">
                    C/ Villardeciervos nº 56<br />
                    CP 49337, Villanueva de Valrojo<br />
                    Zamora, España
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">📞</span> Teléfono
                  </h4>
                  <p className="text-sm text-gray-600">
                    <a href="tel:+34645835353" className="hover:text-primary-600 transition">
                      (+34) 645835353
                    </a>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">🕐</span> Horario
                  </h4>
                  <p className="text-sm text-gray-600">
                    De lunes a viernes<br />
                    de 09:00 a 19:00 horas
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">📧</span> Email
                  </h4>
                  <p className="text-sm text-gray-600">
                    <a href="mailto:info@valrojoformacion.com" className="hover:text-primary-600 transition">
                      info@valrojoformacion.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nos encontramos aquí</h3>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}