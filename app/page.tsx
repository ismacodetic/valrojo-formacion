import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Courses from '@/components/Courses'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Valrojo Formación',
  description:
    'Academia de formación presencial y a distancia especializada en tecnologías digitales: herramientas digitales básicas, Photoshop, fotografía, diseño web, impresión 3D y fotogrametría con drones.',
  url: 'https://valrojoformacion.es',
  logo: 'https://valrojoformacion.es/images/logo.png',
  image: 'https://valrojoformacion.es/images/og-image.jpg',
  telephone: '+34645835353',
  email: 'info@valrojoformacion.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C/ Villardeciervos nº 56',
    addressLocality: 'Villanueva de Valrojo',
    addressRegion: 'Zamora',
    postalCode: '49337',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.94959396093441,
    longitude: -6.222854923538103,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </main>
  )
}
