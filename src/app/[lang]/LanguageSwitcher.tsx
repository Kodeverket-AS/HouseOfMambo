"use client";

import { usePathname } from "next/navigation";
import { htmlLang, locales, localizePath, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
    current: Locale;
    label: string;
    switchTo: string;
    names: Record<Locale, string>;
};

export default function LanguageSwitcher({ current, label, switchTo, names }: LanguageSwitcherProps) {
    const pathname = usePathname();

    return (
        <nav aria-label={label} className="flex items-center border border-white/10 bg-surface text-xs font-semibold uppercase tracking-[0.12em]">
            {locales.map((locale) => {
                const active = locale === current;
                return (
                    <a
                        key={locale}
                        href={localizePath(pathname, locale)}
                        hrefLang={htmlLang[locale]}
                        lang={htmlLang[locale]}
                        aria-current={active ? "true" : undefined}
                        aria-label={active ? names[locale] : switchTo.replace("{language}", names[locale])}
                        className={`grid min-h-11 min-w-11 place-items-center px-2 transition-colors ${active ? "bg-gold-main text-background" : "text-gold-champagne hover:text-gold-main"}`}
                    >
                        {locale}
                    </a>
                );
            })}
        </nav>
    );
}
