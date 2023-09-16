import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
export const middleware = (request: NextRequest) => {
  if( request.nextUrl.pathname.startsWith('/todos')) {
    return NextResponse.rewrite(new URL('/todos', request.url))
  }

  // return NextResponse.redirect(new URL('/', request.url))
}

export default middleware;

export const config = {
  matcher: ['/todos']
}
