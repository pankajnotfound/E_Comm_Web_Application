import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req:NextRequest) {
    const {email, password} = await req.json();
    try {
        const user = await prisma.user.findUnique({where: {email}})
        if(!user){
            return NextResponse.json({ message: "Invalid credentials" }, {status:401});
        }

        const matchPassword = password == user.password;

        if (!matchPassword) {
            return NextResponse.json({ message: "Invalid credentials" }, {status:401});
        }
        const token = jwt.sign({id: user.id, email: user.email, name: user.name, role: user.role}, process.env.JWT_SECRET!, {expiresIn: '7d' });

        console.log('user id', user.id);
        console.log('user email', user.email);

        const response = NextResponse.json({
            message: "Logged In Successfully",
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            userRole: user.role,
            }, { status: 200 });

        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax',
            path: '/'
            });

        return response;

        
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error: error }, { status: 500 });
    }
    
}