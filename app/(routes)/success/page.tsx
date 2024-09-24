"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import success from '../../../public/images/success.jpg'

const PageSuccess = () => {

    const {removeAll} = useCart()

    const handleBackToStore = () => {
        removeAll()
        router.push('/')
    }

    const router = useRouter()
    return ( 
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src={success} alt="success" width={250} height={500} className="rounded-lg" />

                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">En breve, nuestro equipo se pondrá manos a la obra para hacer el envio del pedido a tu domicilio </p>
                    <p>¡Disfruta de tu compra!</p>

                    <Button className="mt-2" onClick={handleBackToStore}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
     );
}
 
export default PageSuccess;