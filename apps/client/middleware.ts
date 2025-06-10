import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = '/dashboard';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const jwt = request.cookies.get('jwt');
  const isProtectedRoute = pathname.startsWith(protectedRoutes);

  if (isProtectedRoute && !jwt) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs'
};
