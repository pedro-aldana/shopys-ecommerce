"use client"

import { formatPrice } from "@/lib/formatPrice"
import { Order } from "@prisma/client"
import { useRouter } from "next/navigation"


export type TableProps = {
    orders: Order[]
}

export  function Table(props:TableProps) {

  const {orders} = props  
  const router = useRouter()  
  

 

  
  return (
    <section className="container px-4 mx-auto">
    <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Nombre
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Apellido
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Ciudad
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Departamento
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Direccion
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Telefono
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Total
                                </th>
                               

                                <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {orders.map((order)=>(
                                 <tr key={order.id}>
                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                     <div className="inline-flex items-center gap-x-3">
                                         <span>{order.firstName}</span>
                                     </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.lastName}</td>
                                 <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                     <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                         
 
                                         <h2 className="text-sm font-normal">{order.city}</h2>
                                     </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                     <div className="flex items-center gap-x-2">
                                        
                                         <div>
                                             <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{order.department}</h2>
                                             
                                         </div>
                                     </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                     <div className="flex items-center gap-x-2">
                                        
                                         <div>
                                             <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{order.address}</h2>
                                             
                                         </div>
                                     </div>
                                 </td>
                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.phone}</td>
                                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{formatPrice(order.totalAmount)}</td>
                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
                                     <div className="flex items-center gap-x-6">
                                         <button onClick={()=> router.push(`/admin/orde/${order.id}`)}  className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                             Orden
                                         </button>
 
                                         <button className="text-red-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                             {order.status}
                                         </button>
                                     </div>
                                 </td>
                             </tr>    
                            ))}
                           

                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

   
</section>
  )
}
