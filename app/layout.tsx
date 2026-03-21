import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valrojo Formación - Academia de Formación Digital',
  description: 'Academia de formación presencial y a distancia especializada en tecnologías digitales. Cursos desde nivel básico hasta avanzado en herramientas digitales, fotografía, diseño y más.',
  keywords: 'formación digital, cursos online, academia, tecnología, herramientas digitales',
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
