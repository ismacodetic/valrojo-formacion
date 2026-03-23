import Image from 'next/image'
import financiacion from '@/public/images/financiacion.jpg'

export default function Financiacion() {
  return (
    <div className="bg-primary-50 border-t-2 border-primary-200 py-8">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 font-semibold">
            ✓ Este proyecto está financiado por:
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image 
            src={financiacion}
            alt="Financiación - Gobierno de España y Fondos Next Generation UE"
            className="h-auto w-full max-w-2xl"
          />
        </div>
        <p className="text-xs text-gray-500 text-center mt-6 max-w-2xl mx-auto">
          Financiado por el Gobierno de España y la Unión Europea dentro del marco de recuperación, transformación y resiliencia.
        </p>
      </div>
    </div>
  )
}
