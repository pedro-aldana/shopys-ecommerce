import { z } from "zod"


export const formSchema = z.object({
    productName: z.string().min(2).max(50),
    isFeatured: z.boolean().default(false),
    price: z.number(),
    image: z.string().url().optional(),
    size: z.string().min(2).max(50),
    description: z.string(),
   
})