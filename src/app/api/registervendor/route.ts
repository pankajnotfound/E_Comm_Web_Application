import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {

    try {
        const { name, email, password, role } = await req.json();

        if (!name || !email || !password){
            return NextResponse.json("1 or More Fields Missing", {status: 400})
        }

        const sendData = await prisma.user.create({
            data:{
                name,
                email,
                password,
                role,
            }
        })
        console.log(sendData);
        return NextResponse.json(sendData , {status: 201})
    } catch (error) {
        console.log('Error creating User:',error);
        return NextResponse.json({error : 'Internal server error'}, {status : 500});
    }
    
}