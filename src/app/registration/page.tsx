import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReservationForm from "../ReservationForm";

export const metadata: Metadata = {
    title: "Course Registration | House of Mambo Bergen",
    description: "Register your interest for Salsa On2 and mambo courses with House of Mambo in Bergen.",
};

const registrationNotes = [
    "One complete 8-week course costs NOK 990.",
    "The full-time student price is NOK 690.",
    "Partnerwork courses may use waiting lists to balance leaders and followers.",
    "Your place is confirmed after you receive a reply from House of Mambo.",
];

export default function RegistrationPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-background">
            <header className="border-b border-white/8 bg-background/95">
                <div className="site-container flex min-h-[5.25rem] items-center justify-between gap-5 py-3">
                    <Link href="/" aria-label="House of Mambo home" className="group shrink-0">
                        <Image src="/images/house-of-mambo-logo.png" alt="House of Mambo Bergen" width={600} height={408} priority className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-14" />
                    </Link>
                    <Link href="/" className="btn-secondary btn-small text-center">← Back to home</Link>
                </div>
            </header>

            <section className="relative isolate border-b border-white/7">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-14 m:py-20">
                    <div className="mb-10 max-w-3xl">
                        <p className="section-eyebrow">House of Mambo Bergen</p>
                        <h1 className="title-primary mt-3 text-[clamp(3.2rem,8vw,5.75rem)] leading-[0.9]">Course registration</h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-text-main/60">Choose the course that fits your level and tell us a little about your dance experience. We will contact you about availability and the next steps.</p>
                    </div>

                    <div className="grid gap-8 l:grid-cols-[0.72fr_1.28fr] l:gap-12">
                        <aside className="space-y-5">
                            <div className="border border-white/8 bg-surface/70 p-6">
                                <p className="micro-label">Registration notes</p>
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
                                <p className="micro-label text-gold-main">Need help choosing?</p>
                                <p className="mt-3 text-base leading-7 text-text-main/68">Select the course that seems closest to your level and use the message field to tell us what you have danced before. We can help place you correctly.</p>
                            </div>
                        </aside>

                        <ReservationForm />
                    </div>
                </div>
            </section>

            <footer className="site-container flex flex-col justify-between gap-4 py-8 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/55 m:flex-row">
                <p>© 2026 House of Mambo Bergen. All rights reserved.</p>
                <Link href="/" className="transition-colors hover:text-gold-champagne">House of Mambo home</Link>
            </footer>
        </main>
    );
}
