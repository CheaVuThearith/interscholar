import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export function middleware (req:NextRequest) {
return NextResponse.redirect(new URL("/opportunities/scholarships", req.url))
};

export const config = {
    matcher: "/opportunities"
    
}
