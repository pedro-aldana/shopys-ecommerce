import { db } from "@/lib/db";
import { Category, Shirt, Cup } from "@prisma/client";
import { ProductCard } from "./components/ProductCard/ProductCard";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

type Product = {
  id: string;
  productName: string;
  image: string | null;
  size?: string;
  price: number;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = params;

  const category = await db.category.findUnique({
    where: { id: categoryId },
    include: {
      shirts: true,
      cups: true,
    },
  });

  if (!category) {
    return <p>Categoría no encontrada</p>;
  }

  const products: Product[] = [
    ...category.shirts.map((shirt: Shirt) => ({
      id: shirt.id,
      productName: shirt.productName,
      image: shirt.image,
      size: shirt.size,
      price: shirt.price
    })),
    ...category.cups.map((cup: Cup) => ({
      id: cup.id,
      productName: cup.productName,
      image: cup.image,
      price: cup.price,
    })),
  ];

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium mb-4">{category.name}</h1>
      <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
}