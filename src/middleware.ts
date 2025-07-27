import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/utils/middleware/supabase-middleware';

export async function middleware(request: NextRequest) {
  const supabaseResponse = await updateSession(request);
  return supabaseResponse;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$).*)'],
};
