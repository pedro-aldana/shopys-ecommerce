/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProfessionPage() {
  const router = useRouter()
  return (
    <div>
        {/* <a href="https://drive.google.com/file/d/1nB-n0ZIbck09jmolu2p0J__JDLfR99xb/view?usp=sharing" className='py-4 bg-white text-black'>Anime</a> */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-24 ">
        

        <div className="lg:w-1/2 p-4 text-center lg:text-left mx-12">
            <img src="/images/profesiones.png" alt="" className='rounded-md' />
        
        </div>

        <div className='lg:w-1/2  lg:mt-0 mx-4 '>
        <h4 className="md:text-5xl text-2xl font-extrabold uppercase">Catalogo de Mugs</h4>
        <p className="my-2 text-xl">
        Descubre nuestro catalogo de Profesiones y obten increibles descuentos
        </p>
        <Button onClick={()=> router.push('https://drive.google.com/file/d/19fkDkvy9xxCqJFVRXtn4E_0bkHjSCBe_/view?usp=sharing')} className='items-center'>Ver Catalogo</Button>
        </div>

       
    </div>
    </div>
  )
}
