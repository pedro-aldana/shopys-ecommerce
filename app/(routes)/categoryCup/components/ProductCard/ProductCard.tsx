/* eslint-disable @next/next/no-img-element */
import { IconButton } from "@/components/Shared/IconButton/IconButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export  function ProductCard() {
  
    const router = useRouter()

  return (
    <Link href={''} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
        <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-white w-fit uppercase">text</p>
        </div>

        <Carousel
             opts={{
                align: "start"
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                <CarouselItem className="group">
                    <img src="/images/goku.jpg" alt="Image" className="rounded-xl w-full h-80" />
                    <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                        <div className="flex justify-center gap-x-6">
                            <IconButton onClick={()=> console.log('object')} icon={<Expand size={20}/>} className="text-gray-600" />

                            <IconButton onClick={() => console.log('product')} icon={<ShoppingCart size={20} className="text-gray-600"/>} />
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <p className="text-2xl text-center">Taza Dragon ball z</p>
            <p className="font-bold text-center">$ 20,000</p>
        </Carousel>
    </Link>
  )
}
