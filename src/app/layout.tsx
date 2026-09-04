import type { Metadata } from "next";
import { Inter, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
    title: "House of Mambo | Bergen",
    description: "Salsa On2 og mambo i Bergen – kurs, workshops, social dancing og et inkluderende dansemiljø.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='no'
            className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable} h-full antialiased`}
        >
            <body className='min-h-full flex flex-col'>{children}</body>
        </html>
    );
}
