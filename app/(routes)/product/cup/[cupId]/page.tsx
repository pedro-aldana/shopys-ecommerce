/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { InfoProduct } from "./components/InfoProduct/InfoProduct";

interface CupPageProps {
  params: {
    cupId: string;
  };
}

export async function generateMetadata({ params }: CupPageProps) {
  const cup = await db.cup.findUnique({
    where: { id: params.cupId },
  });

  if (!cup) {
    return {
      title: "Mug no encontrado",
    };
  }

  return {
    title: `${cup.productName} | Shopy's`,
    description: cup.description,
  };
}

export default async function CupPage({ params }: CupPageProps) {
  const cup = await db.cup.findUnique({
    where: { id: params.cupId },
  });

  if (!cup) {
    notFound();
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-square">
          <img
            src={cup.image || ""}
            alt={cup.productName}
            className="rounded-xl"
          />
        </div>

        <div className="sm:px-12">
          <InfoProduct cup={cup}/>
        </div>
      </div>
    </div>
  );
}
