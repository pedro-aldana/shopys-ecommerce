import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req:Request) {

    try {
        const {
           name,
           image,
           description     
        } = await req.json()


        const category = await db.category.create({
            data:{
                name,
                image,
                description
            },
        });

        return NextResponse.json(category)
        
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", {status: 500})
    }
    
}