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




export default function OrderPage() {
  const cart = useCart();
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
      // Aquí puedes limpiar el carrito o hacer otras acciones necesarias
    } catch (error) {
      console.error('Error al enviar la orden:', error);
      
      toast({ title: "Error",  variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-y-4">
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Juan"
          required
        />
      </div>

      <div>
        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Pérez"
          required
        />
      </div>

      <div>
        <label>Dirección</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Calle Falsa 123"
          required
        />
      </div>

      <div>
        <label>Ciudad</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Bogotá"
          required
        />
      </div>

      <div>
        <label>Departamento</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Cundinamarca"
          required
        />
      </div>

      <div>
        <label>Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="3001234567"
          required
        />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
  
}
