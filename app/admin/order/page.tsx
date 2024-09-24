import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Header } from "./Header/Header";
import { Table } from "./Table/Table";

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

  const orders = await db.order.findMany();

  if (!user) {
    return redirect('/');
  }
  return (
    <div>
      <Header/>
      <div className="mt-12">
        <Table orders={orders}/>
      </div>
      
    </div>
  )
}
