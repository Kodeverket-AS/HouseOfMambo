import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, localeCookie, locales, localizePath, type Locale } from "./i18n/config";

function preferredLocale(request: NextRequest): Locale {
    const cookie = request.cookies.get(localeCookie)?.value;
    if (cookie && hasLocale(cookie)) return cookie;

    const languages = (request.headers.get("accept-language") ?? "")
        .split(",")
        .map((part) => {
            const [tag, q] = part.trim().split(";q=");
            return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
        })
        .filter(({ tag }) => tag)
        .sort((a, b) => b.q - a.q);

    for (const { tag } of languages) {
        const base = tag.split("-")[0];
        if (base === "nb" || base === "nn" || base === "no") return "no";
        if (hasLocale(base)) return base;
    }

    return defaultLocale;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathLocale = locales.find((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

    // Husker sist besøkte språk, slik at / sender brukeren tilbake dit neste gang
    if (pathLocale) {
        const response = NextResponse.next();
        if (request.cookies.get(localeCookie)?.value !== pathLocale) {
            response.cookies.set(localeCookie, pathLocale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
        }
        return response;
    }

    const url = request.nextUrl.clone();
    url.pathname = localizePath(pathname, preferredLocale(request));
    return NextResponse.redirect(url);
}

export const config = {
    // Hopper over interne Next-stier, API og filer med filendelse (bilder, favicon osv.)
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};
