import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const input = await req.json();
    const userId = input.userId;
    console.log("Id is", userId)
    try {
        
        const orderDetails = await prisma.order.findMany({
            where:{userId}
        })
        return NextResponse.json({orderDetails}, {status:201})
    } catch (error) {
        return NextResponse.json({message: 'Error Fetching Order Details'}, {status:401})
    }
    
}