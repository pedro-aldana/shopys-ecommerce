/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ButtonDropdown } from "./components/ButtonDropdown/ButtonDropdown";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const cart = useCart();
  const router = useRouter()

  const handleQuantityChange = (id: string, type: 'shirt' | 'cup', action: 'increment' | 'decrement') => {
    if (type === 'shirt') {
      const shirt = cart.shirts.find((item) => item.product.id === id);
      if (shirt) {
        const newQuantity = action === 'increment' ? shirt.quantity + 1 : Math.max(1, shirt.quantity - 1);
        cart.updateShirtQuantity(id, newQuantity);
      }
    } else {
      const cup = cart.cups.find((item) => item.product.id === id);
      if (cup) {
        const newQuantity = action === 'increment' ? cup.quantity + 1 : Math.max(1, cup.quantity - 1);
        cart.updateCupQuantity(id, newQuantity);
      }
    }
  };

  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <h1 className='mb-5 text-3xl font-bold'>Carrito de Compras</h1>

      {cart.shirts.length === 0 && cart.cups.length === 0 ? (
        <div className='text-lg'>Tu carrito está vacío 🛒, empieza poniendo un producto </div>
      ) : (
        <div className='grid sm:grid-cols-2 sm:gap-5'>
          <div>
            {cart.shirts.length > 0 && (
              <div>
                <h2 className='text-xl font-semibold mb-4'>Camisas</h2>
                {cart.shirts.map(({ product, quantity }) => (
                  <div key={product.id} className='border p-4 mb-4 rounded-lg'>
                    <img src={product.image} alt={product.productName} className='w-20 h-20 object-cover'/>
                    <h3 className='text-lg font-medium'>{product.productName}</h3>
                    <p className='text-gray-500'>{product.description}</p>
                    <p className='text-lg font-bold'>{formatPrice(product.price)}</p>

                    <div className='flex items-center gap-2'>
                      <button onClick={() => handleQuantityChange(product.id, 'shirt', 'decrement')}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleQuantityChange(product.id, 'shirt', 'increment')}>+</button>
                    </div>

                    <button 
                      className='mt-2 text-red-500' 
                      onClick={() => cart.removeShirt(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cart.cups.length > 0 && (
              <div>
                <h2 className='text-xl font-semibold mb-4'>Tazas</h2>
                {cart.cups.map(({ product, quantity }) => (
                  <div key={product.id} className='border p-4 mb-4 rounded-lg'>
                    <img src={product.image} alt={product.productName} className='w-20 h-20 object-cover'/>
                    <h3 className='text-lg font-medium'>{product.productName}</h3>
                    <p className='text-gray-500'>{product.description}</p>
                    <p className='text-lg font-bold'>{formatPrice(product.price)}</p>

                    <div className='flex items-center gap-2'>
                      <button onClick={() => handleQuantityChange(product.id, 'cup', 'decrement')}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleQuantityChange(product.id, 'cup', 'increment')}>+</button>
                    </div>

                    <button 
                      className='mt-2 text-red-500' 
                      onClick={() => cart.removeCup(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-xl">
            <div className="p-6 rounded-lg dark:bg-sky-950">
              <p className="mb-3 text-lg font-semibold">Detalles de la Orden</p>
              <Separator/>
              <div className="flex justify-between gap-5 my-4">
                <p>Orden Total</p>
                <p className="text-lg font-bold">
              Total : 
              {formatPrice([
                ...cart.shirts.map(({ product, quantity }) => product.price * quantity),
                ...cart.cups.map(({ product, quantity }) => product.price * quantity),
              ].reduce((total, price) => total + price, 0))}
            </p>
              </div>
              <div className="flex items-center justify-center w-full mt-3">
                <ButtonDropdown/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
