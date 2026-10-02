export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";
export const localeCookie = "NEXT_LOCALE";

// Verdi brukt i <html lang> og hreflang
export const htmlLang: Record<Locale, string> = {
    no: "nb",
    en: "en",
};

export const ogLocale: Record<Locale, string> = {
    no: "nb_NO",
    en: "en_GB",
};

export function hasLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

// Bytter ut (eller legger til) språksegmentet i en sti, f.eks. /no/registration -> /en/registration
export function localizePath(pathname: string, locale: Locale) {
    const segments = pathname.split("/");
    if (hasLocale(segments[1] ?? "")) segments[1] = locale;
    else segments.splice(1, 0, locale);
    return segments.join("/").replace(/\/$/, "") || `/${locale}`;
}

export function languageAlternates(path: string) {
    return Object.fromEntries(locales.map((locale) => [htmlLang[locale], `/${locale}${path}`]));
}
