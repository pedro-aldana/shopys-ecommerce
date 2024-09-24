"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/hooks/use-cart";
import { InfoProductsProps } from "./InfoProducts.types";

export function InfoProduct(props: InfoProductsProps) {
  const { shirt } = props;
  const { addShirt } = useCart();

  const shirtToAdd = {
    id: shirt.id,
    productName: shirt.productName,
    description: shirt.description || "", // Asegúrate de que no sea null
    image: shirt.image || "", // Asegúrate de que no sea null
    price: shirt.price,
    size: shirt.size || "", // Asegúrate de que no sea null
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{shirt.productName}</h1>
      <p className="text-xl font-semibold">{formatPrice(shirt.price)}</p>
      <Separator />
      <div>
        <h2 className="text-lg font-semibold mb-2">Descripción</h2>
        <p>{shirt.description !== null ? shirt.description : "No description available."}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Talla</h2>
        <p>{shirt.size || "One size fits all"}</p>
      </div>
      <Button onClick={() => addShirt(shirtToAdd)}>Agregar al Carrito</Button>
    </div>
  );
}
