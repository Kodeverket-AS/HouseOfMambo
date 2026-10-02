import type { Metadata } from "next";
import { Inter, Montserrat, Bebas_Neue } from "next/font/google";
import { htmlLang, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "./locale";
import "../globals.css";

// 1. Laster inn Mambo-fontene med riktige variabler (som matcher globals.css)
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
    variable: "--font-bebas",
    subsets: ["latin"],
    weight: "400", // Bebas Neue finnes typisk kun i vekt 400
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

// Kun språkene i config er gyldige – alt annet gir 404
export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
    const lang = await getLocale(params);
    const dict = await getDictionary(lang);

    return (
        <html
            lang={htmlLang[lang]}
            className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable} h-full antialiased`}
        >
            <body className='min-h-full flex flex-col'>
                <a className="skip-link" href="#main-content">{dict.common.skipLink}</a>
                {children}
            </body>
        </html>
    );
}
