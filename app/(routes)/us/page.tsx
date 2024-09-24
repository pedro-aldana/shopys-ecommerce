/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function UsPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-24 ">
        

        <div className="lg:w-1/2 p-4 text-center lg:text-left mx-12">
            <img src="/images/data.jpg" alt="" className='rounded-md' />
        
        </div>

        <div className='lg:w-1/2  lg:mt-0 mx-4 '>
        <h4 className="text-5xl font-extrabold uppercase">Nosotros</h4>
        <p className="my-2 text-xl">
        En Shopys, nos dedicamos a crear productos personalizados que reflejan la identidad y estilo de cada cliente. Especializados en la personalización de mugs, camisetas y accesorios, combinamos creatividad, calidad y atención al detalle en cada proyecto que realizamos. Nuestro equipo está comprometido con brindar un servicio excepcional, ofreciendo productos únicos y hechos a medida para todo tipo de ocasión, desde regalos especiales hasta artículos promocionales. Nos enorgullece trabajar con materiales de alta calidad y técnicas innovadoras para asegurar acabados impecables que destacan por su durabilidad. Creemos en la importancia de la personalización como una forma de expresión, y nuestro objetivo es ayudar a nuestros clientes a plasmar sus ideas de manera creativa y profesional.
        </p>
        </div>

       
    </div>
  )
}
