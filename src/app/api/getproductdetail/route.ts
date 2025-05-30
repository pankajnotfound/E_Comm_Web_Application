import { prisma } from "@/lib/prisma";
import { Parisienne } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
    const skip = parseInt(searchParams.get('skip') || '0' );
    const take = parseInt(searchParams.get('take') || '10' );
    try {
        const getDetail = await prisma.product.findMany(({
            skip,
            take,
            orderBy: { id: 'asc' }
        }))

        const total = await prisma.product.count();

        return NextResponse.json( {getDetail, total}, {status: 201});
    } catch (error) {
        
    }
}