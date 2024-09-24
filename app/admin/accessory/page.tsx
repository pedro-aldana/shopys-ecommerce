import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { HeaderMain } from "./components/HeaderMain/HeaderMain";
import { TableData } from "./components/TableData/TableData";



export default async function page() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect('/');
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email,
    }
  });

  const categories = await db.category.findMany();
  const accessory = await db.accessory.findMany();

  if (!user) {
    return redirect('/');
  }


  return (
    <div>
      <HeaderMain userId={user.id} categoryId={categories}/>
      <TableData accessory={accessory}/>
    </div>
  )
}
