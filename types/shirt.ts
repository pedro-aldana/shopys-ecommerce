export interface Shirt {
    id: string;
    productName: string;
    description?: string | null;
    image?: string;
    price: number;
    size?: string;
}