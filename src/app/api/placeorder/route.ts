import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    try {
        const orderDetails = await req.json();
        const { productId, productName, productImage, quantity, price, status, position, userId } = orderDetails;
        console.log( productId, productName, productImage, quantity, price, status, position, userId);
        if (!productName || !productImage || !quantity || !price || !status || !position || !userId){
            console.log("idk man")
            return NextResponse.json("1 or More Fields Missing", {status: 400})
        }

        const putData = await prisma.order.create({
            data:{
                productName,
                productImage,
                quantity,
                price,
                status,
                position,
                userId,
            }
        })
        
        const getProductQuantity = await prisma.product.findUnique({
            where:{
                id:productId
            }
        })
        if (!getProductQuantity) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        const prevoiusQuantity = getProductQuantity?.quantity;

        const updateProductQuantity = await prisma.product.update({
            where: {
                id:productId
            },
            data:{
                quantity: (prevoiusQuantity - quantity)
            }
        })

        
        return NextResponse.json({putData, updateProductQuantity} , {status: 201})
    } catch (error) {
        console.log('Error creating User:',error);
        return NextResponse.json({error : 'Internal server error'}, {status : 500});
    }
}