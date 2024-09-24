export type ProductCardProps = {
    products: {
        id: string;
        productName: string;
        image: string;
        size: string | '';
        price: number;  // Add this line if you want to include price
    }[];
}