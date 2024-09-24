import { Separator } from '@/components/ui/separator'
import { RiWhatsappLine } from "react-icons/ri";

export default function PersonalizationPage() {
  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 border-b-2'>
        <h1 className="mb-5 text-3xl font-bold">Personalización!</h1>
        <div className='grid sm:grid-cols-2 sm:gap-5'>
                <div className='text-xl'>
                Ofrecemos un servicio de personalización de mugs, camisetas y accesorios, diseñado para brindar productos únicos y a medida, adaptados a las necesidades y preferencias de nuestros clientes. Utilizamos materiales de alta calidad y técnicas avanzadas de impresión para asegurar acabados duraderos y precisos. Nuestro enfoque incluye la personalización de diseños gráficos, logotipos, nombres y otros elementos visuales, ya sea para promociones empresariales, eventos especiales, regalos o uso personal. Nos comprometemos a ofrecer un servicio rápido y eficiente, garantizando que cada producto refleje la identidad y estilo individual de nuestros clientes.!
                </div>

                <div className='max-w-xl'>
                    <div className='p-6 rounded-lg'>
                        <p className="mb-3 text-2xl font-semibold text-center">Contáctanos y personaliza tus ideas</p>
                        <Separator/>
                        <a href='https://wa.link/2tatau' className='flex justify-center gap-5 my-4'>
                         <RiWhatsappLine className='text-6xl text-green-700 cursor-pointer'/>
                        </a>
                    </div>
                </div>

        </div>
    </div>
  )
}
