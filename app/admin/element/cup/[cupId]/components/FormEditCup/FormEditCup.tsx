/* eslint-disable @next/next/no-img-element */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { UploadButton } from "@/lib/uploadThing";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormEditCupProps } from "./FormEditCup.types";
import { formSchema } from "./FormEditCup.form";


export  function FormEditCup(props: FormEditCupProps) {

  const {dataCup} = props

  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: dataCup?.productName || "",
      isFeatured: dataCup?.isFeatured || false,
      price: dataCup?.price || 0,
      image: dataCup?.image || "",
      description: dataCup?.description || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/cup/${dataCup.id}`, values);
      toast({ title: "Taza actualizada correctamente" });
      router.push("/admin/cup");
    } catch (error) {
      toast({ title: "Error actualizando Taza", variant: "destructive" });
    }
  };

  return (
    <div className="max-w-md mx-auto">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Producto</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



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


<FormField
control={form.control}
name="image"
render={({ field }) => (
  <FormItem>
    <FormLabel>Imagen Producto</FormLabel>
    <FormControl>
      <div>
        <div className="flex gap-2 items-center">
          {/* Muestra la imagen existente si hay una URL */}
          {dataCup.image && (
            <img
              src={dataCup.image} // Aquí asignamos la URL de la imagen existente
              alt="Imagen"
              width={60}
              height={60}
              className="rounded-full"
            />
          )}
          <div className="w-[200px]">
            {showUploadPhoto ? (
              <UploadButton
                className="rounded-md text-slate-800 bg-slate-900  mt-3"
                {...field}
                endpoint="imagen" // Asegúrate de que este coincida
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    form.setValue("image", res[0].url);
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

        <Button type="submit" className="mt-4">
          Actualizar Taza
        </Button>
      </form>
    </Form>
  </div>
  )
}
