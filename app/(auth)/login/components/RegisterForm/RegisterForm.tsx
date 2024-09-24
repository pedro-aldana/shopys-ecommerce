"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
})



export  function RegisterForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
        username: "",
      },
  })

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.username,
      }),
    });

    if (response.status === 200) {
      router.push("/admin")
      toast({
        title: "Registro se ha realizado con éxito 🤙"
      })

    } else {

      toast({
        title: "Error al realizar el registro 😐",
        variant: "destructive",
      });
      
    }
    
}

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-5 space-y-3 text-black">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black dark:text-white">Email</FormLabel>
            <FormControl>
              <Input className="text-black dark:text-white" placeholder="email@email.com" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black dark:text-white">Usuario</FormLabel>
            <FormControl>
              <Input className="text-black dark:text-white" placeholder="Veguetta" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black dark:text-white">Contraseña</FormLabel>
            <FormControl>
              <Input className="text-black dark:text-white" placeholder="Shh..." type="password" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full">Registrar</Button>
    </form>
  </Form>
  )
}
