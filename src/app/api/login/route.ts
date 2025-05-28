import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const {email, password} = await req.json();
    try {
        const isThereUser = await prisma.user.findUnique({where: {email}})
        if(!isThereUser){
            return NextResponse.json({ message: "Invalid credentials" }, {status:401});
        }

        const matchPassword = password == isThereUser.password;

        if (!matchPassword) {
            return NextResponse.json({ message: "Invalid credentials" }, {status:401});
        }

        if(matchPassword){
            return NextResponse.json({message : "Logged In Seccessfully", userId: isThereUser.id, userName:isThereUser.name}, {status:200})
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error: error }, { status: 500 });
    }
    
}