import { z } from "zod"


export const formSchema = z.object({
    productName: z.string().min(2).max(50),
    description: z.string(),
    image: z.string().url().optional(),
    isFeatured: z.boolean().default(false),
    price: z.number(),
    userId: z.string(),
    categoryId:  z.string().min(2).max(50),
   
})