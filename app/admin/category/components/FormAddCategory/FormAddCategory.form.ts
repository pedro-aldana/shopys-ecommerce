import { z } from "zod"


export const formSchema = z.object({
    name: z.string().min(2).max(50),
    image: z.string().url().optional(),
    description: z.string(),
   
})