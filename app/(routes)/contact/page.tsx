"use client"
import { useRouter } from "next/navigation";
import { RiWhatsappLine, RiInstagramLine, RiFacebookBoxLine } from "react-icons/ri";

export default function ContactPage() {

  const router = useRouter()
  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <h1 className="mb-12 text-3xl font-bold text-center">Contáctanos en nuestras redes</h1>

      <div className='grid sm:grid-cols-3 sm:gap-5'>
        <div className="flex justify-center">
          <RiWhatsappLine onClick={()=> router.push('https://wa.link/2tatau')} className="text-7xl text-green-600 cursor-pointer" />
        </div>

        <div className="flex justify-center">
          <RiInstagramLine onClick={()=> router.push('https://www.instagram.com/shopysmdt/')}  className="text-7xl text-pink-600 cursor-pointer" />
        </div>

        <div className="flex justify-center">
          <RiFacebookBoxLine onClick={()=> router.push('https://www.facebook.com/ShopysMdt1/')} className="text-7xl text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
