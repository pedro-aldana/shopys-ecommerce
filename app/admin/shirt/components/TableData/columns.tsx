"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { Category, Shirt } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Copy, MoreHorizontal, User } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnProps = Shirt;

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "productName",
    header: "Nombre",
  },
  {
    accessorKey: "image",
    header: "Imagen",
  },
  {
    accessorKey: "isFeatured",
    header: "Destacado",
  },
  
  {
    accessorKey: "actions",
    header: "Acciones",
    cell:({row}) => {
       

        const onEditElement = () => {
           window.location.href = `/admin/element/shirt/${row.original.id}`;
        }

        

        return (
            <div className="flex gap-2 justify-center items-center">
                
                <DropdownMenu>
                    <DropdownMenuTrigger>
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem onClick={onEditElement}>Editar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }
  },
]


