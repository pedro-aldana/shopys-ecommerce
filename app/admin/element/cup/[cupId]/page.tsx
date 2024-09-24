import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FormEditCup } from "./components/FormEditCup/FormEditCup";

export default async function ElementCupPage({
  params,
}: {
  params: {cupId: string};
}) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/")
  } 

  const cup = await db.cup.findUnique({
    where: {
      id: params.cupId
    }
  })


  if (!cup) {
    redirect('/')
  }


  return (
    <div>
      <h2 className="text-2xl font-bold">Editar Tazas</h2>
      <FormEditCup dataCup={cup}/>
    </div>
  )
}
