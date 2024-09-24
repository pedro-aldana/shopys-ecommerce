"use client"

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";



export  function Footer() {
  const router = useRouter()


  return (
    <footer className="mt-24">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Menu</h3>
                        <p onClick={() => router.push('/us')} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">Nosotros</p>
                        <p onClick={() => router.push('/contact')} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">Contacto</p>
                        
                    </div>
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Dirección</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tienda Virtual Barrancabermeja, Santander</a>
                    </div>
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Políticas</h3>
                        <p onClick={() => router.push('/policies')} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">Políticas de Envío</p>
                        
                    </div>
                </div>

                <div className="flex justify-center mt-6 space-x-4">
                    <RiFacebookCircleFill onClick={()=> router.push('https://www.facebook.com/ShopysMdt1/')} className="text-3xl text-blue-600 dark:text-white cursor-pointer" />
                    <RiInstagramLine onClick={()=> router.push('https://www.instagram.com/shopysmdt/')} className="text-3xl text-pink-600 dark:text-white cursor-pointer" />
                    <RiWhatsappLine onClick={()=> router.push('https://wa.link/2tatau')} className="text-3xl text-green-700 dark:text-white cursor-pointer" />
                </div>
            </div>
        </div>

        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024 <Link href="#">Shopys</Link> Todos los derechos reservados.
        </span>
    </div>
</footer>
  )
}
