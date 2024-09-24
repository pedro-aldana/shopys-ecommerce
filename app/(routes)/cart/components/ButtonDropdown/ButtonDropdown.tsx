"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormAddOrder } from "../FormAddOrder/FormAddOrder";

export function ButtonDropdown() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      {/* DropdownMenu que se abre con el botón */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Hacer Pedido <ChevronDown/> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          
          <DropdownMenuSeparator />
          {/* Opción para abrir el diálogo */}
          <DropdownMenuItem onClick={() => setOpenDialog(true)}>
            Llenar datos
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialog que se abre desde el DropdownMenu */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-center mb-2">Ingresa tus datos para procesar la orden</DialogTitle>
          </DialogHeader>
          <FormAddOrder/>
         
        </DialogContent>
      </Dialog>
    </div>
  );
}
