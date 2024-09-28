/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { IconButton } from "../IconButton/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { Cup } from "@prisma/client";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/hooks/use-cart";

export type FeaturedCupsProps = {
    cups: Cup[];
};

export function FeaturedCups(props: FeaturedCupsProps) {
    const { cups } = props;
    const { addCup } = useCart();
    const router = useRouter();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-2xl sm:pb-8 uppercase">Mugs Destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {cups.map((cup) => (
                        <CarouselItem key={cup.id} className="md:basis-1/2 lg:basis-1/3 group">
                            <div className="p-1">
                                <Card className="py-4 border border-gray-200 shadow-none">
                                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                                        <img src={cup.image || "/default-image.jpg"} alt={cup.productName} />
                                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                            <div className="flex justify-center gap-x-6">
                                                <IconButton onClick={() => router.push(`/product/cup/${cup.id}`)} icon={<Expand size={20} />} className="text-gray-600" />

                                                <IconButton
                                                    onClick={() => {
                                                        const cupToAdd = {
                                                            id: cup.id,
                                                            productName: cup.productName,
                                                            description: cup.description || "", // Asegúrate de que no sea null
                                                            image: cup.image || "", // Asegúrate de que no sea null
                                                            price: cup.price,
                                                        };
                                                        addCup(cupToAdd); // Pasa el objeto correcto
                                                    }}
                                                    icon={<ShoppingCart size={20} />}
                                                    className="text-gray-600"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <div className="justify-between gap-4 px-8">
                                        <h3 className="text-lg font-bold">{cup.productName}</h3>
                                        <p className="mt-3 text-sm">{formatPrice(cup.price)}</p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
}
