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
import { formSchema } from "./FormAddAccessory.form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { FormAddAccessoryProps } from "./FormAddAccessory.types";



export  function FormAddAccessory(props: FormAddAccessoryProps) {
  const { userId, categoryIds, closeDialog } = props;
  const router = useRouter();

  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      isFeatured: false,
      categoryId: "",
      price: 0,
      image: "",
      description: "",
      userId,
    },
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      values.price = Number(values.price);

      await axios.post("/api/accessory", values);
      toast({ title: "Acesorio Publicada ✅" });

      form.reset({
        productName: "",
        isFeatured: false,
        price: 0,
        description: "",
        image: ""
      });
      closeDialog();

      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid-cols-2 gap-y-2 gap-x-4 grid space-y-2">
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿A qué categoría pertenece?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una categoría" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoryIds.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Es un producto destacado?</FormLabel>
              <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Marcar como Destacado</FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="productName"
          render={({field}) => (
            <FormItem>
              <FormLabel>Nombre del producto</FormLabel>
              <FormControl>
                <Input {...field}/>
              </FormControl>
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
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
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

        {/* Otros campos del formulario */}
        <div className="col-span-2 flex justify-end mt-4">
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  )
}
