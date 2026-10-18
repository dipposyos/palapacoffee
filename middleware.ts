import { NextResponse, type NextRequest } from 'next/server';

const localeAliases: Record<string, string> = {
  ar: 'ar-DZ',
  ha: 'ha-NG',
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const forwardedProtocol = request.headers.get('x-forwarded-proto');
  const cloudflareVisitor = request.headers.get('cf-visitor') ?? '';
  const hostname = request.headers.get('host')?.split(':')[0] ?? url.hostname;
  const isHttp = url.protocol === 'http:' || forwardedProtocol === 'http' || cloudflareVisitor.includes('"scheme":"http"');

  if (isHttp || hostname === 'www.palapacoffee.com') {
    url.protocol = 'https:';
    url.hostname = 'palapacoffee.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  const firstSegment = url.pathname.split('/').filter(Boolean)[0] ?? 'en';
  if (localeAliases[firstSegment]) {
    url.pathname = url.pathname.replace(`/${firstSegment}`, `/${localeAliases[firstSegment]}`);
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-locale', firstSegment);
  requestHeaders.set('x-site-path', url.pathname);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon-512.png|apple-touch-icon.png|images/).*)'],
};

