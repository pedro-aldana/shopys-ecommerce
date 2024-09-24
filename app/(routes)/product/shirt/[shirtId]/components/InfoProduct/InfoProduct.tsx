"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { useCart } from "@/hooks/use-cart"

export type Shirt = {
  id: string
  productName: string
  description: string | null
  image: string | null
  price: number
  size: string | null
  
}

export type InfoProductProps = {
  shirt: Shirt
}

export function InfoProduct(props: InfoProductProps) {
  const { shirt } = props


  const {addShirt} = useCart()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{shirt.productName}</h1>
      <p className="text-xl font-semibold">{formatPrice(shirt.price)}</p>
      <Separator />
      <div>
        <h2 className="text-lg font-semibold mb-2">Descripcion</h2>
        <p>{shirt.description || "No description available."}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Talla</h2>
        <p>{shirt.size || "One size fits all"}</p>
      </div>
      <Button onClick={() => addShirt(shirt)}>Agregar al Carrito</Button>
    </div>
  )
}