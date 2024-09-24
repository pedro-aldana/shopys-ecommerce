import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, {params}: {params: {cupId: string}}) {

    try {
        const {cupId} = params;
        const values = await req.json()

        if (!cupId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        const cup = await db.cup.update({
            where: {
                id: cupId,
            },
            data: {
                ...values,
            },
        });

        return NextResponse.json(cup)

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", {status: 500})
    }
    
}