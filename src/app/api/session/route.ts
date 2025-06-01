import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.json({ loggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log('decoded', decoded)
    return NextResponse.json({ loggedIn: true, user: decoded });
  } catch (err) {
    return NextResponse.json({ loggedIn: false });
  }
}