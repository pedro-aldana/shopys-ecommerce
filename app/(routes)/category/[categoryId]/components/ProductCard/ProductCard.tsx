/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductCardProps } from "./ProductCard.types";
import { Expand, ShoppingCart,EyeIcon } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import { IconButton } from "@/components/Shared/IconButton/IconButton";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

export function ProductCard({ products }: ProductCardProps) {

  const router = useRouter()
  const {addShirt,addCup} = useCart()


  return (
    <div>
      {products.map((product) => {
        // Aquí puedes determinar si el producto es un 'Shirt' o 'Cup'
        const productType = product.size ? "shirt" : "cup"; // Supongo que si tiene 'size', es una camisa

        return (
          <div
            key={product.id}
             // Ajusta la URL según el tipo de producto
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
          >
            <p
              className={
                product.size
                  ? "px-2 py-1 text-[18px] text-white bg-black dark:bg-white rounded-full dark:text-black w-fit uppercase font-bold"
                  : "text-gray-500"
              }
            >
              {product.size ? product.size : ""}
            </p>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                <CarouselItem className="group">
                  <img
                    src={product.image}
                    alt="Image"
                    className="rounded-xl w-full h-80"
                  />
                  <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                      <IconButton
                        onClick={() => router.push(`/product/${productType}/${product.id}`)}
                        icon={<EyeIcon size={20} className="text-gray-600" />}
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <p className="text-2xl text-center">{product.productName}</p>

              <p className="font-bold text-center">
                {formatPrice(product.price)}
              </p>
            </Carousel>
          </div>
        );
      })}
    </div>
  );
}
