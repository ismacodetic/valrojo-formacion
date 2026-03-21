export default function Footer() {
  return (
    <>
      <Financiacion />
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Valrojo Formación</h3>
              <p className="text-gray-400">
                Academia de formación digital presencial y a distancia.
                Acercando la tecnología a todos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#cursos" className="hover:text-white transition">Cursos</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Cursos Básicos</a></li>
                <li><a href="#" className="hover:text-white transition">Cursos Avanzados</a></li>
                <li><a href="#" className="hover:text-white transition">Charlas y Talleres</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos de servicio</a></li>
                <li><a href="#" className="hover:text-white transition">Aviso legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
              <p>&copy; 2026 Valrojo Formación. Todos los derechos reservados.</p>
              <p className="text-gray-500">Diseñado por <a href="#" className="hover:text-white transition font-semibold">ismacodetic</a></p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

import Financiacion from './Financiation'
