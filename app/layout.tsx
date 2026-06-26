import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://valrojoformacion.es'
const SITE_NAME = 'Valrojo Formación'
const SITE_TITLE = 'Valrojo Formación - Academia de Formación Digital en Zamora'
const SITE_DESCRIPTION =
  'Academia de formación presencial y a distancia especializada en tecnologías digitales en Villanueva de Valrojo, Zamora. Cursos desde nivel básico hasta avanzado en herramientas digitales, fotografía, diseño, impresión 3D y drones.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
}

export const metadata: Metadata = {
  // Necesario para que Next.js resuelve las URLs absolutas de canonical y Open Graph
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Valrojo Formación',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'valrojo formación',
    'formación digital',
    'cursos online',
    'academia Zamora',
    'cursos informática Zamora',
    'tecnología',
    'herramientas digitales',
  ],
  // URL canónica: indica a Google que esta es la versión "oficial" de la página,
  // evitando que la autoridad se reparta entre valrojoformacion.es y el dominio de GitHub Pages.
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valrojo Formación - Academia de Formación Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
  // TODO: sustituir por el código real que entrega Google Search Console
  // al verificar la propiedad por meta tag (Settings > Ownership verification > HTML tag).
  // verification: {
  //   google: 'TU_CODIGO_DE_VERIFICACION',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
