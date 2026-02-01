import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/dashboard
  if (pathname === '/admin/dashboard') {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // If no user, redirect to login
    if (!user) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard'],
};
