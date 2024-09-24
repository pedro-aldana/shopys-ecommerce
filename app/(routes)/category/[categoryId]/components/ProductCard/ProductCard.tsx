/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EyeIcon } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import { IconButton } from "@/components/Shared/IconButton/IconButton";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    id: string;
    productName: string;
    image: string | null;
    size?: string;
    price: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const productType = product.size ? "shirt" : "cup"; // Determinar el tipo de producto

  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
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
              src={product.image || '/placeholder.png'} // Placeholder si la imagen es null
              alt={product.productName}
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
}
