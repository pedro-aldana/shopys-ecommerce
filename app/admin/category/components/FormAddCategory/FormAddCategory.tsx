"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "./FormAddCategory.form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormAddCategoryProps } from "./FormAddCategory.types"
import { Upload } from "lucide-react";
import { UploadButton } from "@/lib/uploadThing";
import { toast } from "@/hooks/use-toast"







export  function FormAddCategory(props: FormAddCategoryProps) {

  const {closeDialog} = props
  const router = useRouter();

  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/category",values)
      toast({title: 'Categoria Creada'})

      form.reset({
        name: "",
        image: "",
        description: "",
      })
      closeDialog()
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive"
      })
    }
  };


  return (
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="md:grid-cols-2 gap-y-2 gap-x-4 grid space-y-2"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />

<FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen Categoria</FormLabel>
              <FormControl>
                <div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src=""
                      alt="Imagen"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="w-[200px]">
                      {showUploadPhoto ? (
                        <UploadButton
                          className="rounded-md text-slate-800 bg-slate-200 mt-3"
                          {...field}
                          endpoint="imagen" // Asegúrate de que este coincida
                          onClientUploadComplete={(res) => {
                            if (res && res.length > 0) {
                              form.setValue("image", res?.[0].url);
                              setPhotoUploaded(true);
                            } else {
                              console.error("No se recibió un archivo válido.");
                            }
                          }}
                          onUploadError={(error: Error) => {
                            console.log("Error al subir la imagen:", error);
                          }}
                        />
                      ) : (
                        <Button
                          onClick={() => setShowUploadPhoto((prev) => !prev)}
                        >
                          <Upload className="mr-2 w-4 h-4" /> Subir Foto
                        </Button>
                      )}
                    </div>
                  </div>
                  {photoUploaded && <p className="text-sm">Imagen subida</p>}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

     

     

    
      

      {/* Campo de Descripción */}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      

      <div className="col-span-2 flex justify-end mt-4">
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  </Form>
  )
}
