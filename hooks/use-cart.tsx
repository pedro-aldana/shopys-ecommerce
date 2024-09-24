import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Shirt } from '@/types/shirt'
import { Cup } from '@/types/cup'
import { toast } from './use-toast'

interface CartStore {
  shirts: { product: Shirt, quantity: number }[];
  cups: { product: Cup, quantity: number }[];
  
  addShirt: (data: Shirt) => void;
  removeShirt: (id: string) => void;
  updateShirtQuantity: (id: string, quantity: number) => void;

  addCup: (data: Cup) => void;
  removeCup: (id: string) => void;
  updateCupQuantity: (id: string, quantity: number) => void;
  
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      shirts: [],
      cups: [],
      
      addShirt: (data: Shirt) => {
        const currentShirts = get().shirts;
        const existingShirt = currentShirts.find((item) => item.product.id === data.id);

        if (existingShirt) {
          return toast({
            title: 'El producto ya existe en el carrito',
            variant: 'destructive',
          });
        }

        set({
          shirts: [...currentShirts, { product: data, quantity: 1 }],
        });
        toast({
          title: 'Producto añadido al carrito 🛒',
        });
      },

      removeShirt: (id: string) => {
        set({
          shirts: get().shirts.filter((item) => item.product.id !== id),
        });
        toast({
          title: 'Producto eliminado del carrito 🗑️',
        });
      },

      updateShirtQuantity: (id: string, quantity: number) => {
        set({
          shirts: get().shirts.map((item) =>
            item.product.id === id ? { ...item, quantity } : item
          ),
        });
      },

      addCup: (data: Cup) => {
        const currentCups = get().cups;
        const existingCup = currentCups.find((item) => item.product.id === data.id);

        if (existingCup) {
          return toast({
            title: 'El producto ya existe en el carrito',
            variant: 'destructive',
          });
        }

        set({
          cups: [...currentCups, { product: data, quantity: 1 }],
        });
        toast({
          title: 'Producto añadido al carrito 🛒',
        });
      },

      removeCup: (id: string) => {
        set({
          cups: get().cups.filter((item) => item.product.id !== id),
        });
        toast({
          title: 'Producto eliminado del carrito 🗑️',
        });
      },

      updateCupQuantity: (id: string, quantity: number) => {
        set({
          cups: get().cups.map((item) =>
            item.product.id === id ? { ...item, quantity } : item
          ),
        });
      },

      removeAll: () => set({ shirts: [], cups: [] }),
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
