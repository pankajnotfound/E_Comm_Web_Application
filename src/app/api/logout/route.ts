import { NextResponse } from 'next/server'

// POST handler for logout
export async function POST() {
  const response = NextResponse.json({ success: true })

  // Set the cookie's maxAge to 0 to delete it
  response.cookies.set('auth_token', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
  })

  return response
}