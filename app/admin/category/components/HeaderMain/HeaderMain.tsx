"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { dataHeaderMain } from "./HeaderMain.data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FormAddCategory } from "../FormAddCategory/FormAddCategory";

export  function HeaderMain() {

    const [typeElemet, setTypeElement] = useState<"category"|"">();
    const [openDialog,setOpenDialog] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false);

    const closeDialogAndDropdown = () => {
        setOpenDialog(false);
        setOpenDropdown(false);
    }


  return (
    <div className="flex justify-between items-center">
    <h1 className="text-xl md:text-3xl font-semibold">Administrar Categorias</h1>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
        <DropdownMenuTrigger asChild>
          <Button>
              Nueva <ChevronDown/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0">
          <DropdownMenuLabel>
            <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({icon:Icon, typeElement, text}) =>(
                    <Button key={typeElement} className="justify-start" variant="ghost" onClick={() => setTypeElement(typeElement)}>
                        <Icon className="w-4 h-4 mr-2"/>
                        {text}
                    </Button>
                  ))}
                   
                </div>
            </DialogTrigger>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Nueva Categoria</DialogTitle>
        </DialogHeader>
        {typeElemet === 'category' && <FormAddCategory  closeDialog={closeDialogAndDropdown}/>}
        
      </DialogContent>
    </Dialog>
  </div>
  )
}
