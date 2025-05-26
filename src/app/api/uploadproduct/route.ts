import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { body, image } from "framer-motion/client";

export async function POST(req : NextRequest) {
    try {
        const data = await req.json();

        const{
            name,
            image,
            description,
            price,
            quantity,
            category,
            vendorId,
        } = data;

        if (!name || !image || !description || !price || !quantity || !category || !vendorId) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const newProduct = await prisma.product.create({
            data : {
                name,
                image,
                description,
                price: parseFloat(price),
                quantity: parseInt(quantity),
                category,
                vendorId: parseInt(vendorId),
            },
        })

        return NextResponse.json(newProduct, { status: 201});

    } catch (error) {
        console.log('Error creating product:',error);
        return NextResponse.json({error : 'Internal server error'}, {status : 500});
    }
    
}