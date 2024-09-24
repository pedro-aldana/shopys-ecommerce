import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"


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

export  function InfoProduct({cup}: InfoProductProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{cup.productName}</h1>
      <p className="text-xl font-semibold">{formatPrice(cup.price)}</p>
      <Separator />
      <div>
        <h2 className="text-lg font-semibold mb-2">Descripcion</h2>
        <p>{cup.description || "No description available."}</p>
      </div>
      <Button className="w-full">Agregar al Carrito</Button>
    </div>
  )
}
