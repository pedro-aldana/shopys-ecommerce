import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {

    try {

        const {
            productName,
            description,
            image,
            isFeatured,
            price,
            userId,
            categoryId    
        } = await req.json()

        const accessory = await db.accessory.create({
            data: {
                productName,
                description,
                image,
                isFeatured,
                price,
                userId,
                categoryId 
            }
        })

        return NextResponse.json(accessory)
        
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
    
}