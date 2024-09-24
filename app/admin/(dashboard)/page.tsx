import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { TotalProducts } from "./TotalProducts/TotalProducts";


export default async function AdminPage() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect('/');
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  if (!user) {
    return redirect('/');
  }

  return (
    <div className="w-full">
      <h2 className="text-5xl font-semibold">Administra Shopys</h2>
      <div className="container relative mx-auto mt-12">
        <div className="pt-20 md:pt-0 min-h-[80vh] bg-[url('/images/mdt.jpg')] bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
          {/* Agregar un overlay con opacidad */}
          <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>

          <div className="relative max-2-3xl text-center text-white z-10">
            <h3 className="text-5xl font-semibold">La mejor Compañia Shopys MDT</h3>
            <p className="mt-2 text-xl md:mt-8">Ingenieros de fundamentos</p>
            <p className="mt-2 text-xl md:mt-2">Pedro Aldana</p>
            <p className="mt-2 text-xl md:mt-2">Camilo Zambrano</p>
          </div>

          <div className="relative flex justify-between z-10 mt-4">
            <p className="p-4 bg-white dark:text-black rounded-md">Catalogo</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

