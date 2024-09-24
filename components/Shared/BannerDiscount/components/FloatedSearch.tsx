import { MapIcon, MapPin } from 'lucide-react'
import { RiInstagramLine,RiFacebookBoxFill,RiWhatsappLine } from "react-icons/ri";
import React from 'react'

export default function FloatedSearch() {
  return (
    <div className='absolute bottom-10 md:-bottom-10 hidden md:flex mx-72     left-0 right-0 w-[75%] '>
        <div className='flex-col justify-between gap-4 py-4 bg-black/70 dark:bg-white/70 rounded-md md:flex md:flex-row backdrop-blur shadow-light'>

            <div className='relative md:mb-0 flex items-center gap-4  rounded-lg px-3 py-2 justify-between cursor-pointer'>
                <MapPin className='text-white dark:text-black'/>

                <div>
                    <p className=' text-white dark:text-black'>Localización</p>
                    <p className='text-xs text-white dark:text-black'>Barrancabermeja, Santander</p>
                </div>
            </div>
            <div className='relative md:mb-0 flex items-center gap-4  rounded-lg px-3 py-2 justify-between cursor-pointer'>
                <RiInstagramLine className='text-white dark:text-black text-2xl'/>

                <a href='https://www.instagram.com/shopysmdt/'>
                    <p className='text-white dark:text-black'>Instagram</p>
                    <p className='text-xs text-white dark:text-black'>@shopysmdt</p>
                </a>
            </div>
            <div className='relative md:mb-0 flex items-center gap-4  rounded-lg px-3 py-2 justify-between cursor-pointer'>
                <RiFacebookBoxFill className='text-white dark:text-black text-2xl'/>

                <a href='https://www.facebook.com/ShopysMdt1/'>
                    <p className='text-white dark:text-black'>Facebook</p>
                    <p className='text-xs text-white dark:text-black'>@ShopysMdt1</p>
                </a>
            </div>
            <div className='relative md:mb-0 flex items-center gap-4  rounded-lg px-3 py-2 justify-between cursor-pointer'>
                <RiWhatsappLine className='text-white dark:text-black text-2xl'/>

                <a href='https://wa.link/2tatau'>
                    <p className='text-white dark:text-black'>WhatsApp</p>
                    <p className='text-xs text-white dark:text-black'></p>
                </a>
            </div>

        </div>
    </div>
  )
}
