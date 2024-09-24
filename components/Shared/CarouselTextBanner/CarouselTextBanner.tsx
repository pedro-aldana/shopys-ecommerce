"use client"


import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"


export const dataCarouselTop = [
    {
        id: 1,
        title: "PERSONALIZACION",
       
    },
    {
        id: 2,
        title: "SUBLIMACION",
       
    },
    {
        id: 3,
        title: "PUBLICIDAD",
        
    },
    {
        id: 4,
        title: "ENVIO EN 24/48 H",
    },
]



export  function CarouselTextBanner() {
  return (
    <div className="bg-gray-200 dark:bg-primary">
    <Carousel className="w-full max-w-4xl mx-auto" plugins={[
     Autoplay({
         delay: 2500
     })
    ]}>
     <CarouselContent>

         
         {dataCarouselTop.map(({id,title}) =>(
             <CarouselItem key={id}  className="cursor-pointer">
                <div>
                     <Card className="shadow-none border-none bg-transparent">
                         <CardContent className="flex flex-col justify-center p-2 items-center">
                             <p className="sm:text-lg text-wrap dark:text-white ">{title}</p>
                             
                         </CardContent>
                     </Card>
                </div>
             </CarouselItem>
         ))}

     </CarouselContent>
         
    </Carousel>
 </div>
  )
}
