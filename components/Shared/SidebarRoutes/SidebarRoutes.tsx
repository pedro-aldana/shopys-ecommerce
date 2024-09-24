"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Shirt,DoorClosed,House,Coffee,ShoppingBasket,Package,FolderKanban } from "lucide-react";
import { signOut } from "next-auth/react";
import SingleItem from "../SingleItem/SingleItem";

export  function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/admin" label="Inicio" icon={House}/>
      <SingleItem href="/admin/shirt" label="Camisas" icon={Shirt}/>
      <SingleItem href="/admin/cup" label="Tazas" icon={Coffee}/>
      <SingleItem href="/admin/accessory" label="Acesorios" icon={Package}/>
      <SingleItem href="/admin/category" label="Categorias" icon={FolderKanban}/>
      <SingleItem href="/admin/order" label="Ordenes" icon={ShoppingBasket}/>

        <div className="mt-24">
        <SingleItem  onClick={()=> signOut()} href="/" label="Cerrar Sesion" icon={DoorClosed}/>
        </div>
      
    </div>
  )
}
