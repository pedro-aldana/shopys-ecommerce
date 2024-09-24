import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, {params}: {params: {shirtId: string}}) {

    try {
        const {shirtId} = params;
        const values = await req.json()

        if (!shirtId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        const shirt = await db.shirt.update({
            where: {
                id: shirtId,
            },
            data: {
                ...values,
            },
        });

        return NextResponse.json(shirt)

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", {status: 500})
    }
    
}