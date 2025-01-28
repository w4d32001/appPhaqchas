import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex items-center justify-center w-full h-full text-gray-200 gap-x-4 text-xl font-Bebas-Neue'>
        <span>
            <LoaderCircle className='animate-spin-slow' strokeWidth={3}/>
        </span>
        <span>Cargando...</span>
    </div>
  )
}
