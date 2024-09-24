import { z } from "zod";

export const formSchema = z.object({
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
