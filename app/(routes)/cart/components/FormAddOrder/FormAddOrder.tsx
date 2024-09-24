"use client";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import React, { useState } from "react";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  address: z.string().min(5).max(100),
  city: z.string().min(2).max(50),
  department: z.string().min(2).max(50),
  phone: z.string().min(8).max(50),
  totalAmount: z.number().positive(),  // Para asegurar que el monto es positivo
 
  items: z.array(z.object({
    productId: z.string(),
    productType: z.enum(['shirt', 'cup', 'accessory']),
    quantity: z.number().min(1),
    price: z.number().positive(),
  })),
});




export  function FormAddOrder() {
  const cart = useCart();
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    department: "",
    phone: "",
    items: cart.shirts.map(shirt => ({
      productId: shirt.product.id,
      productType: 'shirt',
      quantity: shirt.quantity,
      price: shirt.product.price,
    })).concat(cart.cups.map(cup => ({
      productId: cup.product.id,
      productType: 'cup',
      quantity: cup.quantity,
      price: cup.product.price,
    }))),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/orders', formData);
      toast({ title: "Orden creada", description: "Tu orden ha sido creada exitosamente."});
      console.log('Respuesta de éxito:', response.data);
      router.push('/success')
      // Aquí puedes limpiar el carrito o hacer otras acciones necesarias
    } catch (error) {
      console.error('Error al enviar la orden:', error);
      
      toast({ title: "Error",  variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-2 gap-4">
  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
    <input
      type="text"
      name="firstName"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="Juan"
      required
    />
  </div>

  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
    <input
      type="text"
      name="lastName"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="Pérez"
      required
    />
  </div>

  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
    <input
      type="text"
      name="address"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.address}
      onChange={handleChange}
      placeholder="Calle Falsa 123"
      required
    />
  </div>

  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
    <input
      type="text"
      name="city"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.city}
      onChange={handleChange}
      placeholder="Bogotá"
      required
    />
  </div>

  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento</label>
    <input
      type="text"
      name="department"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.department}
      onChange={handleChange}
      placeholder="Cundinamarca"
      required
    />
  </div>

  <div className="col-span-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
    <input
      type="tel"
      name="phone"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      value={formData.phone}
      onChange={handleChange}
      placeholder="3001234567"
      required
    />
  </div>

  <div className="col-span-2">
    <Button type="submit" className="w-full mt-4">Realizar Compra</Button>
  </div>
</form>

  
  );
  
}
