import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
    try {

        const {
            productName,
            description,
            isFeatured,
            price,
            image,
            size,
            userId,
            categoryId,
        } = await req.json()

        const shirt = await db.shirt.create({
            data: {
                productName,
                description,
                isFeatured,
                price,
                image,
                size,
                userId,
                categoryId,
            },
        });

        return NextResponse.json(shirt)
        
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
}