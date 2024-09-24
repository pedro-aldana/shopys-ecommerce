import { Shirt } from "@prisma/client";

export type InfoProductsProps = {
    shirt: {
        id: string;
        productName: string;
        description: string | null; // Permite que sea null
        image: string | null;
        price: number;
        size: string | null;
    };
};