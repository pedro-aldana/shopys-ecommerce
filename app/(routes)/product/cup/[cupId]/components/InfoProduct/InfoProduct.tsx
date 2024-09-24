"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { useCart } from "@/hooks/use-cart"

export type Cup = {
    id: string
    productName: string
    description: string | null
    image: string | null
    price: number

}

export type InfoProductProps = {
    cup: Cup
}

export  function InfoProduct(props: InfoProductProps) {
  const {cup} = props
  const {addCup} = useCart()

  const cupToAdd = {
    id: cup.id,
    productName: cup.productName,
    description: cup.description || "", // Asegúrate de que no sea null
    image: cup.image || "", // Asegúrate de que no sea null
    price: cup.price,
   // Asegúrate de que no sea null
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{cup.productName}</h1>
      <p className="text-xl font-semibold">{formatPrice(cup.price)}</p>
      <Separator />
      <div>
        <h2 className="text-lg font-semibold mb-2">Descripcion</h2>
        <p>{cup.description || "No description available."}</p>
      </div>
      <Button onClick={()=> addCup(cupToAdd)} className="w-full">Agregar al Carrito</Button>
    </div>
  )
}
