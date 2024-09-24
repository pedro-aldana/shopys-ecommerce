export type ProductCardProps = {
    product: {
        id: string;
        productName: string;
        image: string;
        size: string | '';
        price: number;  // Add this line if you want to include price
    };
}