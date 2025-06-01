import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const data = await req.json();
    const id = parseInt(data.id);

    if (!id) {
        return NextResponse.json({ error: 'Invalid or missing ID' }, { status: 400 });
    }
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Id is Not a Number ' }, { status: 400 });
    }


    try {
        const product = await prisma.product.findFirst({
            where: {id},
        })

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
         console.error("Error fetching product:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}