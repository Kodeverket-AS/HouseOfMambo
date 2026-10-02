import type { Metadata } from "next";
import Image from "next/image";
import { languageAlternates, ogLocale } from "@/i18n/config";
import { format, getDictionary } from "@/i18n/dictionaries";
import CalendarSection from "./CalendarSection";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { getLocale } from "./locale";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
    const lang = await getLocale(params);
    const { meta } = (await getDictionary(lang)).home;
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `/${lang}`, languages: languageAlternates("") },
        openGraph: { title: meta.title, description: meta.description, locale: ogLocale[lang] },
    };
}

const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/p/House-of-Mambo-Bergen-61592891530613/" },
    { label: "Instagram", href: "https://www.instagram.com/houseofmambo_bergen/" },
];

function SocialIcon({ platform, className = "size-4" }: { platform: string; className?: string }) {
    if (platform === "Facebook") {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.7-.1-1.5-.2-2.3-.2-2.8 0-4.7 1.7-4.7 4.8v1.6H7V13h3v8h3.7Z" />
            </svg>
        );
    }

    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
        </div>
    );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
    const lang = await getLocale(params);
    const dict = await getDictionary(lang);
    const { common, home } = dict;
    const { hero, events, join, club, contact, footer } = home;
    const socialAria = (platform: string) => format(common.socialAria, { platform });

    return (
        <main id="main-content" className="min-h-screen overflow-x-hidden bg-background" tabIndex={-1}>
            <header className="sticky top-0 z-50 border-b border-white/8 bg-background/95 backdrop-blur-md">
                <div className="site-container flex h-[4.75rem] items-center justify-between m:h-[5.25rem]">
                    <a href="#main-content" className="group relative z-10 -ml-1 shrink-0 m:-ml-3 l:-ml-6 xl:-ml-24" aria-label={common.homeAria}>
                        <Image src="/images/house-of-mambo-logo.webp" alt={common.logoAlt} width={600} height={408} priority sizes="(max-width: 767px) 82px, (max-width: 1023px) 118px, 142px" className="site-logo h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-20 l:h-24" />
                    </a>

                    <nav className="hidden items-center gap-6 l:flex xl:gap-8" aria-label={home.mainNavLabel}>
                        {dict.navigation.map((item) => <a key={item.label} href={item.href} className="nav-link">{item.label}</a>)}
                    </nav>

                    <div className="flex items-center gap-3 l:gap-4">
                    <div className="hidden items-center gap-4 l:flex">
                        <a href={`/${lang}/registration`} className="btn-primary btn-small">{common.courseSignup}</a>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social-link" aria-label={socialAria(social.label)}><SocialIcon platform={social.label} /></a>
                            ))}
                        </div>
                    </div>

                    <LanguageSwitcher current={lang} label={common.language.label} switchTo={common.language.switchTo} names={common.language.names} />
                    <MobileMenu navigation={dict.navigation} socialLinks={socialLinks} signupHref={`/${lang}/registration`} labels={{ ...dict.mobileMenu, courseSignup: common.courseSignup }} />
                    </div>
                </div>
            </header>

            <section className="relative isolate">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-7 m:py-10 l:py-12">
                    <div className="mb-8 grid gap-2 border-b border-white/8 pb-4 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-text-main/60 m:mb-10 m:flex m:flex-wrap m:items-center m:justify-between m:gap-3">
                        <span className="text-gold-bronze">{hero.tagline}</span>
                        <span>{hero.taglineSecondary}</span>
                    </div>

                    <div className="mb-8 flex flex-col justify-between gap-4 m:mb-10 l:flex-row l:items-end">
                        <div>
                            <h1 className="title-primary text-[clamp(3rem,15vw,5.8rem)] leading-[0.88] tracking-[0.045em] m:tracking-[0.065em]">House of Mambo</h1>
                            <p className="title-secondary mt-4 text-base m:text-xl">{hero.subtitle}</p>
                        </div>
                        <p className="micro-label pb-1 text-left text-gold-champagne/65 l:text-right">{hero.motto}</p>
                    </div>

                    <div className="grid gap-5 l:grid-cols-[1.3fr_0.88fr_0.88fr] l:items-stretch">
                        <div className="flex min-h-full flex-col justify-between gap-8 pr-0 l:pr-3">
                            <div>
                                <span className="mb-6 block h-px w-12 bg-gold-main" />
                                <p className="max-w-md text-base leading-7 text-text-main/72">{hero.intro}</p>
                                <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
                                    <a href="#classes" className="btn-primary flex min-h-12 items-center justify-center text-center">{hero.exploreClasses}</a>
                                    <a href={`/${lang}/registration`} className="btn-secondary flex min-h-12 items-center justify-center text-center">{common.courseSignup}</a>
                                </div>
                            </div>

                            <dl className="grid max-w-md grid-cols-[0.8fr_1.3fr] gap-x-6 gap-y-3 border border-white/6 bg-surface/70 p-5">
                                {hero.facts.map((fact) => <div key={fact.term} className="contents"><dt className="micro-label">{fact.term}</dt><dd className="micro-value">{fact.value}</dd></div>)}
                            </dl>
                        </div>

                        <figure className="group flex h-full flex-col overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-black">
                                <Image src="/mambo-dance-main.webp" alt={hero.cards[0].alt} fill priority loading="eager" fetchPriority="high" quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 317px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">{hero.cards[0].badge}</span>
                            </div>
                            <figcaption className="flex min-h-40 flex-1 flex-col border-t border-white/8 p-5"><h2 className="card-title">{hero.cards[0].title}</h2><p className="mt-3 text-base leading-7 text-text-main/70">{hero.cards[0].text}</p></figcaption>
                        </figure>

                        <figure className="group flex h-full flex-col overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-black">
                                <Image src="/mambo-dance-floor.webp" alt={hero.cards[1].alt} fill quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 317px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">{hero.cards[1].badge}</span>
                            </div>
                            <figcaption className="flex min-h-40 flex-1 flex-col border-t border-white/8 p-5"><h2 className="card-title">{hero.cards[1].title}</h2><p className="mt-3 text-base leading-7 text-text-main/70">{hero.cards[1].text}</p></figcaption>
                        </figure>
                    </div>

                    <div className="mt-9 flex flex-col items-start gap-4 border border-white/8 bg-surface/65 px-4 py-4 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/60 m:flex-row m:flex-wrap m:items-center m:justify-between m:gap-x-6 m:gap-y-3">
                        <span className="text-gold-bronze">{hero.follow}</span>
                        <div className="grid w-full grid-cols-2 gap-3 m:flex m:w-auto m:flex-wrap m:gap-5">
                            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/8 px-3 text-gold-champagne transition-colors hover:text-gold-main m:min-h-0 m:border-0 m:px-0"><SocialIcon platform={social.label} className="size-4" />{social.label} ↗</a>)}
                        </div>
                        <span>{hero.followTags}</span>
                    </div>

                    <div id="classes" className="mt-6 grid gap-4 m:grid-cols-3">
                        {home.highlights.map((item) => (
                            <article key={item.number} className="border border-white/7 bg-surface/70 p-5">
                                <h3 className="font-bebas text-2xl tracking-[0.075em] text-gold-main">{item.number} {item.title}</h3>
                                <p className="micro-label mt-1 text-gold-champagne/60">{item.subtitle}</p>
                                <p className="mt-3 text-base leading-7 text-text-main/65">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="events" className="site-container section-space">
                <div className="mb-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 l:flex-row l:items-end">
                    <SectionHeading eyebrow={events.eyebrow} title={events.title} />
                    <p className="max-w-md text-base leading-7 text-text-main/65 l:text-right">{events.intro}</p>
                </div>

                <div className="grid gap-5 m:grid-cols-3">
                    {events.offerings.map((item) => (
                        <article key={item.title} className="flex flex-col border border-white/7 bg-surface/70 p-5 m:min-h-[22rem] m:p-6">
                            <div className="flex items-center justify-between"><span className="border border-gold-bronze/25 bg-black/30 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne">{item.schedule}</span><span className="text-gold-champagne/75" aria-hidden="true">{item.icon}</span></div>
                            <h3 className="card-title mt-8 text-3xl">{item.title}</h3>
                            <p className="micro-label mt-2 text-gold-champagne/60">{item.subtitle}</p>
                            <p className="mt-4 text-base leading-7 text-text-main/70">{item.description}</p>
                            <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5"><a href={`/${lang}/registration`} className="micro-label text-gold-main transition-colors hover:text-gold-champagne">{item.action} →</a><span className="text-xs uppercase tracking-[0.1em] text-text-main/55">{item.meta}</span></div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 border border-white/8 bg-surface/80 p-5 m:p-7">
                    <div className="flex flex-col justify-between gap-3 border-b border-white/8 pb-5 m:flex-row m:items-end">
                        <div><p className="micro-label">{events.timetableEyebrow}</p><h3 className="font-bebas text-2xl tracking-[0.06em] text-text-main">{events.timetableTitle}</h3></div>
                        <p className="micro-label text-gold-champagne/65">{events.registrationOpen}</p>
                    </div>
                    <div>
                        {events.timetable.map((item) => (
                            <div key={item.title} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-3 border-b border-white/8 py-5 last:border-0 m:grid-cols-[5rem_1fr_auto_auto] m:items-center">
                                <time className="font-bebas text-2xl tracking-[0.04em] text-gold-main">{item.time}</time>
                                <div className="col-span-2 m:col-span-1"><h4 className="text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-text-main/85">{item.title}</h4><p className="mt-1 text-sm leading-6 text-text-main/60">{item.detail}</p></div>
                                <span className="col-span-2 text-xs uppercase leading-5 tracking-[0.08em] text-text-main/60 m:col-span-1">{item.place}</span>
                                <span className="col-start-2 row-start-1 justify-self-end border border-gold-bronze/30 px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold-champagne m:col-start-auto m:row-start-auto">{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CalendarSection lang={lang} t={dict.calendar} />

            <section className="border-y border-white/7 bg-[#0d0d0d]">
                <div className="site-container py-12 m:py-16">
                    <div className="grid gap-7 border border-white/8 bg-surface/70 p-6 m:p-8 l:grid-cols-[1fr_auto] l:items-center">
                        <div>
                            <p className="section-eyebrow">{join.eyebrow}</p>
                            <h2 className="font-bebas mt-2 text-4xl tracking-[0.055em] text-gold-main uppercase">{join.title}</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-text-main/70">{join.text}</p>
                        </div>
                        <a href={`/${lang}/registration`} className="btn-primary inline-flex min-h-12 w-full items-center justify-center text-center l:w-auto">{join.cta}</a>
                    </div>
                </div>
            </section>

            <section id="club" className="border-b border-white/7 bg-background">
                <div className="site-container section-space">
                    <div className="grid gap-10 l:grid-cols-[1fr_1fr] l:gap-8">
                        <div>
                            <SectionHeading eyebrow={club.eyebrow} title={club.title} />
                            <p className="mt-6 max-w-xl text-base leading-7 text-text-main/58">{club.intro}</p>
                            <figure className="relative mt-7 aspect-[4/5] overflow-hidden border border-white/8 bg-black sm:aspect-[16/10]">
                                <Image src="/mambo-dance-main.webp" alt={club.imageAlt} fill loading="eager" quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 552px" className="object-cover object-[center_58%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" aria-hidden="true" />
                                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-end sm:justify-between">
                                    <div><p className="micro-label text-gold-champagne/70">{club.imageEyebrow}</p><p className="font-bebas text-xl tracking-[0.08em] text-text-main">{club.imageAddress}</p></div>
                                    <p className="font-bebas text-2xl tracking-[0.04em] text-gold-main">{club.imageBadge}</p>
                                </figcaption>
                            </figure>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                {club.features.map((feature) => <div key={feature.title} className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">{feature.label}</p><h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-text-main/60">{feature.text}</p></div>)}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <article id="course-signup" className="border border-white/8 bg-[#252525] p-6 m:p-8">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                    <div><h3 className="font-bebas text-2xl tracking-[0.06em] text-gold-main">{club.pricing.title}</h3><p className="micro-label mt-1 text-gold-champagne/75">{club.pricing.subtitle}</p></div>
                                    <p className="font-bebas text-3xl tracking-[0.04em] text-gold-main">{club.pricing.price}<span className="text-base text-text-main/75">{club.pricing.perCourse}</span></p>
                                </div>
                                <ul className="mt-7 space-y-4">
                                    {club.pricing.details.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-text-main/75"><span className="mt-1 text-gold-main" aria-hidden="true">◉</span><span>{item}</span></li>)}
                                </ul>
                                <a href={`/${lang}/registration`} className="btn-primary mt-8 block text-center">{club.pricing.cta}</a>
                            </article>

                            <article className="border border-white/8 bg-surface/70 p-6">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className="micro-label">{club.info.eyebrow}</p><p className="text-xs uppercase tracking-[0.1em] text-text-main/55">{club.info.season}</p></div>
                                <div className="mt-5 flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">{club.info.periodTitle}</h4><p className="mt-1 text-sm leading-6 text-text-main/60">{club.info.periodText}</p></div><span className="micro-label text-gold-main">{club.info.periodBadge}</span></div>
                                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">{club.info.beforeTitle}</h4><p className="mt-1 text-sm leading-6 text-text-main/60">{club.info.beforeText}</p></div><span className="micro-label text-gold-main">{club.info.beforeBadge}</span></div>
                            </article>

                            <blockquote className="border border-white/8 bg-surface/70 p-7 text-base italic leading-7 text-text-main/72">
                                <span className="mb-2 block font-serif text-3xl not-italic text-gold-main/45">“</span>
                                {club.quote}
                                <footer className="mt-5 flex flex-col items-start gap-4 not-italic sm:flex-row sm:items-center sm:justify-between">
                                    <cite className="micro-label">{club.quoteAuthor}</cite>
                                    <Image src="/images/house-of-mambo-logo.webp" alt={common.logoAlt} width={600} height={408} sizes="(max-width: 767px) 64px, 80px" className="h-auto w-16 shrink-0 object-contain m:w-20" />
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="site-container section-space pb-10">
                    <div className="grid gap-6 border border-white/8 bg-[#252525] p-5 m:p-8 l:grid-cols-[1.15fr_0.85fr] l:items-center">
                    <div><p className="micro-label">{contact.eyebrow}</p><h2 className="font-bebas text-3xl tracking-[0.055em] text-text-main">{contact.title}</h2><p className="mt-2 text-base leading-7 text-text-main/68">{contact.text}</p></div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center"><SocialIcon platform={social.label} className="size-5" />{social.label} ↗</a>)}
                    </div>
                </div>

                <footer id="about" className="pt-14">
                    <div className="grid gap-10 border-b border-white/8 pb-12 m:grid-cols-2 l:grid-cols-[0.8fr_1fr_1.15fr_1.15fr]">
                        <div>
                            <Image src="/images/house-of-mambo-logo.webp" alt={common.logoAlt} width={600} height={408} sizes="(max-width: 767px) 128px, 160px" className="h-auto w-32 object-contain m:w-40" />
                            <p className="micro-label mt-4 text-gold-champagne/75">{footer.name}</p>
                            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-text-main/60">{footer.about}</p>
                            <div className="mt-5 flex gap-2">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social-link" aria-label={socialAria(social.label)}><SocialIcon platform={social.label} /></a>)}</div>
                        </div>
                        {footer.groups.map((group) => <div key={group.title}><h3 className="micro-label text-gold-main">{group.title}</h3><ul className="mt-4 space-y-2">{group.items.map((item) => <li key={item} className="text-sm leading-6 text-text-main/60">{item}</li>)}</ul></div>)}
                    </div>
                    <div className="flex flex-col justify-between gap-4 py-7 text-xs font-semibold uppercase tracking-[0.1em] text-text-main/75 m:flex-row">
                        <p>{footer.companyCopyright}</p>
                        <div className="flex flex-wrap gap-5"><a href={`/${lang}/registration`} className="hover:text-gold-champagne">{common.courseSignup}</a><a href={`/${lang}/privacy`} className="hover:text-gold-champagne">{common.privacy}</a>{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-champagne"><SocialIcon platform={social.label} className="size-3" />{social.label}</a>)}</div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 border-t border-white/8 pt-7 text-text-main/75 m:flex-row m:items-end">
                        <div><p className="font-bebas text-xl tracking-[0.04em] text-gold-main">House of Mambo</p><p className="mt-1 text-xs leading-5 tracking-[0.1em]">{footer.brandLine}</p></div>
                        <p className="text-xs uppercase leading-5 tracking-[0.1em]">{common.copyright}</p>
                    </div>
                </footer>
            </section>
        </main>
    );
}
