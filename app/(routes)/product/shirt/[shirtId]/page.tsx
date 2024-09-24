/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { InfoProduct } from "./components/InfoProduct/InfoProduct"; // Asegúrate de que la importación sea correcta
import { Shirt as PrismaShirt } from "@prisma/client"; // Asegúrate de que estás importando el tipo correcto

interface ShirtPageProps {
  params: {
    shirtId: string;
  };
}

export async function generateMetadata({ params }: ShirtPageProps) {
  const shirt = await db.shirt.findUnique({
    where: { id: params.shirtId },
  });

  if (!shirt) {
    return {
      title: "Shirt Not Found",
    };
  }

  return {
    title: `${shirt.productName} | Shopy's`,
    description: shirt.description || "No description available.", // Manejar el null
  };
}

export default async function ShirtPage({ params }: ShirtPageProps) {
  const shirt: PrismaShirt | null = await db.shirt.findUnique({ // Asegúrate de que shirt tenga el tipo PrismaShirt
    where: { id: params.shirtId },
  });

  if (!shirt) {
    notFound();
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-square">
          <img
            src={shirt.image || "/default-image.jpg"}
            alt={shirt.productName}
            className="rounded-xl"
          />
        </div>

        <div className="sm:px-12">
          <InfoProduct shirt={shirt} /> {/* Asegúrate de que esto pase el tipo correcto */}
        </div>
      </div>
    </div>
  );
}
