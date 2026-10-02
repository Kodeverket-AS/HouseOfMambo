import type { Metadata } from "next";
import Image from "next/image";
import { languageAlternates, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LanguageSwitcher from "../LanguageSwitcher";
import ReservationForm from "../ReservationForm";
import { getLocale } from "../locale";

export async function generateMetadata({ params }: PageProps<"/[lang]/registration">): Promise<Metadata> {
    const lang = await getLocale(params);
    const { meta } = (await getDictionary(lang)).registration;
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `/${lang}/registration`, languages: languageAlternates("/registration") },
        openGraph: { title: meta.title, description: meta.description, locale: ogLocale[lang] },
    };
}

export default async function RegistrationPage({ params }: PageProps<"/[lang]/registration">) {
    const lang = await getLocale(params);
    const { common, registration: t, form } = await getDictionary(lang);

    return (
        <main id="main-content" className="min-h-screen overflow-x-hidden bg-background" tabIndex={-1}>
            <header className="border-b border-white/8 bg-background/95">
                <div className="site-container flex min-h-[4.75rem] items-center justify-between gap-4 py-3 m:min-h-[5.25rem]">
                    <a href={`/${lang}`} aria-label={common.homeAria} className="group relative z-10 -ml-1 shrink-0 m:-ml-3 l:-ml-6 xl:-ml-24">
                        <Image src="/images/house-of-mambo-logo.webp" alt={common.logoAlt} width={600} height={408} priority sizes="(max-width: 767px) 82px, (max-width: 1023px) 118px, 142px" className="site-logo h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-20 l:h-24" />
                    </a>
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher current={lang} label={common.language.label} switchTo={common.language.switchTo} names={common.language.names} />
                        <a href={`/${lang}`} className="btn-secondary btn-small text-center">{t.back}</a>
                    </div>
                </div>
            </header>

            <section className="relative isolate border-b border-white/7">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-10 m:py-20">
                    <div className="mb-8 max-w-3xl m:mb-10">
                        <p className="section-eyebrow">{t.eyebrow}</p>
                        <h1 className="title-primary mt-3 text-[clamp(2.8rem,13vw,5.75rem)] leading-[0.92]">{t.title}</h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-text-main/60">{t.intro}</p>
                    </div>

                    <div className="grid gap-8 l:grid-cols-[0.72fr_1.28fr] l:gap-12">
                        <aside className="order-2 space-y-5 l:order-1">
                            <div className="border border-white/8 bg-surface/70 p-6">
                                <p className="micro-label">{t.notesTitle}</p>
                                <ul className="mt-5 space-y-4">
                                    {t.notes.map((note) => (
                                        <li key={note} className="flex gap-3 text-base leading-7 text-text-main/70">
                                            <span className="mt-1 text-gold-main" aria-hidden="true">◉</span>
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-l border-gold-main/45 bg-black/25 p-6">
                                <p className="micro-label text-gold-main">{t.helpTitle}</p>
                                <p className="mt-3 text-base leading-7 text-text-main/68">{t.helpText}</p>
                            </div>
                        </aside>

                        <div className="order-1 l:order-2">
                            <ReservationForm t={form} privacyHref={`/${lang}/privacy`} />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-container flex flex-col justify-between gap-4 py-8 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/75 m:flex-row">
                <p>{common.copyright}</p>
                <div className="flex flex-wrap gap-5"><a href={`/${lang}/privacy`} className="transition-colors hover:text-gold-champagne">{t.privacyLink}</a><a href={`/${lang}`} className="transition-colors hover:text-gold-champagne">{t.homeLink}</a></div>
            </footer>
        </main>
    );
}
