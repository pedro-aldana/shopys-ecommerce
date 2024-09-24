/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { formatPrice } from "@/lib/formatPrice";

export default async function page({
  params,
}: {
  params: { ordeId: string };
}) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  // Obtener todos los OrderItems por el orderId
  const orderItems = await db.orderItem.findMany({
    where: {
      orderId: params.ordeId,
    },
  });

  // Mapeamos los productos según el productType
  const products = await Promise.all(
    orderItems.map(async (item) => {
      let product;

      if (item.productType === "shirt") {
        product = await db.shirt.findUnique({
          where: { id: item.productId },
        });
      } else if (item.productType === "cup") {
        product = await db.cup.findUnique({
          where: { id: item.productId },
        });
      } else if (item.productType === "accessory") {
        product = await db.accessory.findUnique({
          where: { id: item.productId },
        });
      }

      return {
        ...item,
        product,
      };
    })
  );

  return (
    <>
    <h2 className="text-4xl font-semibold mb-4">Productos de la orden:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
      {products.map((orderItem) => (
        <div
          key={orderItem.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="h-60 w-full object-cover p-8 rounded-t-lg"
              src={orderItem.product?.image || ""}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {orderItem.product?.productName}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                Cantidad:
              </div>
              <span className="bg-blue-100 text-blue-800 text-zl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {orderItem.quantity}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatPrice(orderItem.price)}
              </span>
              
            </div>
          </div>
        </div>
      ))}
    </div>

   
    </>
  );
}
