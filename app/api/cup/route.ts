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

        const cup = await db.cup.create({
            data: {
                productName,
                description,
                image,
                isFeatured,
                price,
                userId,
                categoryId
            },
        });

        return NextResponse.json(cup)
        
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
    
}