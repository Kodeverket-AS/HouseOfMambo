import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReservationForm from "../ReservationForm";

export const metadata: Metadata = {
    title: "Kurspåmelding | House of Mambo Bergen",
    description: "Meld interesse for Salsa On2- og mambokurs hos House of Mambo i Bergen.",
};

const registrationNotes = [
    "Ett komplett 8-ukerskurs koster 990 kr.",
    "Prisen for heltidsstudenter er 690 kr.",
    "Partnerwork-kurs kan bruke ventelister for å balansere førere og følgere.",
    "Plassen din er bekreftet når du har fått svar fra House of Mambo.",
];

export default function RegistrationPage() {
    return (
        <main id="main-content" className="min-h-screen overflow-x-hidden bg-background" tabIndex={-1}>
            <header className="border-b border-white/8 bg-background/95">
                <div className="site-container flex min-h-[4.75rem] items-center justify-between gap-4 py-3 m:min-h-[5.25rem]">
                    <Link href="/" aria-label="House of Mambo forside" className="group relative z-10 -ml-1 shrink-0 m:-ml-3 l:-ml-6 xl:-ml-24">
                        <Image src="/images/house-of-mambo-logo.webp" alt="House of Mambo Bergen" width={600} height={408} priority sizes="(max-width: 767px) 82px, (max-width: 1023px) 118px, 142px" className="site-logo h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-20 l:h-24" />
                    </Link>
                    <Link href="/" className="btn-secondary btn-small text-center">← Forsiden</Link>
                </div>
            </header>

            <section className="relative isolate border-b border-white/7">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-10 m:py-20">
                    <div className="mb-8 max-w-3xl m:mb-10">
                        <p className="section-eyebrow">House of Mambo Bergen</p>
                        <h1 className="title-primary mt-3 text-[clamp(2.8rem,13vw,5.75rem)] leading-[0.92]">Kurspåmelding</h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-text-main/70">Velg kurset som passer nivået ditt, og fortell litt om danseerfaringen din. Vi kontakter deg om ledige plasser og veien videre.</p>
                    </div>

                    <div className="grid gap-8 l:grid-cols-[0.72fr_1.28fr] l:gap-12">
                        <aside className="order-2 space-y-5 l:order-1">
                            <div className="border border-white/8 bg-surface/70 p-6">
                                <p className="micro-label">Informasjon om påmelding</p>
                                <ul className="mt-5 space-y-4">
                                    {registrationNotes.map((note) => (
                                        <li key={note} className="flex gap-3 text-base leading-7 text-text-main/70">
                                            <span className="mt-1 text-gold-main" aria-hidden="true">◉</span>
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-l border-gold-main/45 bg-black/25 p-6">
                                <p className="micro-label text-gold-main">Trenger du hjelp til å velge?</p>
                                <p className="mt-3 text-base leading-7 text-text-main/70">Velg kurset som virker nærmest nivået ditt, og bruk meldingsfeltet til å fortelle hva du har danset før. Vi hjelper deg gjerne med å finne riktig nivå.</p>
                            </div>
                        </aside>

                        <div className="order-1 l:order-2">
                            <ReservationForm />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-container flex flex-col justify-between gap-4 py-8 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/75 m:flex-row">
                <p>© 2026 House of Mambo Bergen. Alle rettigheter forbeholdt.</p>
                <div className="flex flex-wrap gap-5"><a href="/privacy" className="transition-colors hover:text-gold-champagne">Personvern</a><Link href="/" className="transition-colors hover:text-gold-champagne">House of Mambo forside</Link></div>
            </footer>
        </main>
    );
}
