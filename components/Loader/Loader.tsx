import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex items-center justify-center w-full min-h-1/2 text-brown-900 gap-x-4 text-2xl font-Bebas-Neue'>
        <span>
            <LoaderCircle className='animate-spin-slow text-2xl' width={30} strokeWidth={4}/>
        </span>
        <span>Cargando...</span>
    </div>
  )
}
