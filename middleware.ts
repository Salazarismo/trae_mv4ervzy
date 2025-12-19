import { NextResponse } from 'next/server'

export const config = { matcher: ['/contact', '/api/contact'] }

export async function middleware() {
  return NextResponse.next()
}
