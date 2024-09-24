/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { InfoProduct, Shirt } from "./components/InfoProduct/InfoProduct";

interface ShirtPageProps {
  params: {
    shirtId: string;
  };
}

// Ajuste en el tipo de shirt para que sea compatible
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
    description: shirt.description || "No description available.", // Asegúrate de manejar el null
  };
}

export default async function ShirtPage({ params }: ShirtPageProps) {
  const shirt: Shirt | null = await db.shirt.findUnique({ // Asegúrate de que shirt tenga el tipo Shirt
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
          <InfoProduct shirt={shirt} />
        </div>
      </div>
    </div>
  );
}
