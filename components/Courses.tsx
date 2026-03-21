interface Course {
  id: number
  title: string
  category: string
  description: string
  level: string
  modality: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Trámites digitales en organismos públicos",
    category: "Básico",
    description: "Aprende a realizar trámites en Seguridad Social, Hacienda, DGT, ITV y Catastro",
    level: "Principiante",
    modality: "Presencial y Online"
  },
  {
    id: 2,
    title: "Gestión de cuentas bancarias online",
    category: "Básico",
    description: "Consulta y gestiona tus datos bancarios de forma segura",
    level: "Principiante",
    modality: "Presencial y Online"
  },
  {
    id: 3,
    title: "Manejo de smartphones",
    category: "Básico",
    description: "Instalación, desinstalación de apps, limpieza y optimización del móvil",
    level: "Principiante",
    modality: "Presencial y Online"
  },
  {
    id: 4,
    title: "Sistema operativo Windows",
    category: "Básico",
    description: "Aprende lo esencial del entorno Windows para mejorar tu productividad",
    level: "Principiante",
    modality: "Presencial y Online"
  },
  {
    id: 5,
    title: "Correo electrónico",
    category: "Básico",
    description: "Crea, gestiona y organiza tu correo electrónico eficazmente",
    level: "Principiante",
    modality: "Presencial y Online"
  },
  {
    id: 6,
    title: "Seguridad en Redes Sociales",
    category: "Charlas",
    description: "Charlas informativas sobre usos y riesgos en redes sociales",
    level: "Para todos",
    modality: "Presencial"
  },
  {
    id: 7,
    title: "Photoshop Profesional",
    category: "Avanzado",
    description: "Edición de imágenes con los mejores conocimientos de Photoshop",
    level: "Avanzado",
    modality: "Presencial y Online"
  },
  {
    id: 8,
    title: "Fotografía Digital",
    category: "Avanzado",
    description: "Domina la fotografía digital desde composición hasta post-producción",
    level: "Avanzado",
    modality: "Presencial"
  },
  {
    id: 9,
    title: "Diseño Web",
    category: "Avanzado",
    description: "Crea sitios web profesionales con las tecnologías más modernas",
    level: "Avanzado",
    modality: "Online"
  },
  {
    id: 10,
    title: "Impresión 3D",
    category: "Avanzado",
    description: "Aprende todo sobre diseño y fabricación con impresoras 3D",
    level: "Avanzado",
    modality: "Presencial"
  },
  {
    id: 11,
    title: "Dibujo Técnico",
    category: "Avanzado",
    description: "Fundamentos del dibujo técnico aplicado a proyectos reales",
    level: "Avanzado",
    modality: "Presencial"
  },
  {
    id: 12,
    title: "Fotogrametría y Drones LIDAR",
    category: "Avanzado",
    description: "Tecnologías emergentes aplicadas a la vida general y profesional",
    level: "Avanzado",
    modality: "Presencial"
  }
]

export default function Courses() {
  const basicCourses = courses.filter(c => c.category === "Básico")
  const advancedCourses = courses.filter(c => c.category === "Avanzado")
  const workshops = courses.filter(c => c.category === "Charlas")

  const CourseCard = ({ course }: { course: Course }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
        <h4 className="text-white font-bold text-lg mb-2">{course.title}</h4>
        <div className="flex gap-2 text-sm text-primary-100">
          <span className="bg-primary-700 px-2 py-1 rounded">{course.level}</span>
          <span className="bg-primary-700 px-2 py-1 rounded">{course.modality}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{course.description}</p>
      </div>
    </div>
  )

  return (
    <section id="cursos" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nuestros Cursos</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Cursos Básicos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {basicCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Cursos Avanzados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advancedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Charlas y Talleres</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-gray-600 text-lg">
          ¿No encuentras lo que buscas? Diseñamos cursos según la demanda de nuestra comunidad.
          <br />
          <span className="font-semibold text-primary-600">¡Contáctanos para sugerencias!</span>
        </p>
      </div>
    </section>
  )
}
