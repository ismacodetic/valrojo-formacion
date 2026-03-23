'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image 
            src={logo}
            alt="Valrojo Formación - Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-primary-600 hidden sm:inline">Valrojo Formación</span>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="#inicio" className="text-gray-700 hover:text-primary-600 transition">Inicio</Link>
            <Link href="#sobre" className="text-gray-700 hover:text-primary-600 transition">Sobre Nosotros</Link>
            <Link href="#cursos" className="text-gray-700 hover:text-primary-600 transition">Cursos</Link>
            <Link href="#contacto" className="text-gray-700 hover:text-primary-600 transition">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
