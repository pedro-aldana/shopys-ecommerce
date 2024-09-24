import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FormEditShirt } from "./components/FormEditShirt/FormEditShirt";

export default async function ElemenShirtPage({
    params,
}: {
    params: {shirtId: string};

}) {

  const session = await getServerSession();

    if (!session || !session.user?.email) {
      return redirect("/")
    }  

   const shirt = await db.shirt.findUnique({
    where: {
        id: params.shirtId
    }
   }) 

   

   if(!shirt){
    redirect("/")
  }


  return (
    <div>
       <h2 className="text-2xl font-bold">Editar Camisa</h2>
       <FormEditShirt dataShirt={shirt}/> 
    </div>
  )
}
