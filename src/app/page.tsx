import Image from "next/image";
import MobileMenu from "./MobileMenu";
import SocialIcon from "./SocialIcon";

const navigation = [
    { label: "Kurs", href: "#classes" },
    { label: "Arrangementer", href: "#events" },
    { label: "Fellesskapet", href: "#club" },
    { label: "Om oss", href: "#about" },
    { label: "Kontakt", href: "#contact" },
];

const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/p/House-of-Mambo-Bergen-61592891530613/" },
    { label: "Instagram", href: "https://www.instagram.com/houseofmambo_bergen/" },
];

const highlights = [
    {
        number: "01",
        title: "Mambo On2",
        subtitle: "Partnerwork for alle nivåer",
        description: "Kurs for nybegynnere, litt øvede og viderekomne med fokus på timing, kontakt og trygghet på dansegulvet.",
    },
    {
        number: "02",
        title: "Solotrening",
        subtitle: "Fotarbeid, musikalitet og bevegelse",
        description: "Trening på åpent nivå som utvikler shines, musikalsk forståelse og naturlig kroppsbevegelse.",
    },
    {
        number: "03",
        title: "Fellesskap",
        subtitle: "Sosialdans, workshops og showteam",
        description: "Et inkluderende dansemiljø i Bergen der mennesker trener, møtes, opptrer og nyter musikken sammen.",
    },
];

const offerings = [
    {
        schedule: "Mandag",
        icon: "♛",
        title: "Mambo partnerwork",
        subtitle: "Litt øvet og viderekommen",
        description: "Utvikle timing, partnerkontakt, turmønstre og trygghet i sosialdans med Elias på Bergen Internasjonale Kultursenter.",
        action: "Meld interesse",
        meta: "19:15 & 20:30",
    },
    {
        schedule: "Tirsdag",
        icon: "♟",
        title: "Fotarbeid og musikalitet",
        subtitle: "Solokurs på åpent nivå",
        description: "Tren shines, musikalitet og kroppsbevegelse med Alberto. Anbefalt for dansere med minst tre måneders salsaerfaring.",
        action: "Meld interesse",
        meta: "19:00 — 20:00",
    },
    {
        schedule: "Onsdag",
        icon: "♜",
        title: "Mambo nybegynner",
        subtitle: "Grunnkurs i partnerwork",
        description: "Lær grunnleggende Salsa On2, kontakt mellom fører og følger og verktøyene du trenger for å føle deg trygg på dansegulvet.",
        action: "Meld interesse",
        meta: "19:00 — 20:00",
    },
];

const timetable = [
    { time: "19:15", title: "Mandag · Mambo Partnerwork litt øvet", detail: "On2 partnerwork med Elias", place: "Bergen Internasjonale Kultursenter", status: "8 uker" },
    { time: "20:30", title: "Mandag · Mambo Partnerwork viderekommen", detail: "On2 partnerwork med Elias", place: "Bergen Internasjonale Kultursenter", status: "8 uker" },
    { time: "19:00", title: "Tirsdag · Fotarbeid, musikalitet og kroppsbevegelse", detail: "Solotrening på åpent nivå med Alberto", place: "Forandringshuset V13", status: "8 uker" },
    { time: "19:00", title: "Onsdag · Mambo Partnerwork nybegynner", detail: "Grunnleggende On2 partnerwork med Elias", place: "Forandringshuset V13", status: "8 uker" },
];

const courseDetails = [
    "Ett komplett 8-ukerskurs",
    "690 kr for heltidsstudenter",
    "Pakkerabatt ved påmelding til flere kurs",
    "Registreringsavgift på 50 kr er inkludert i kursprisen",
];

const footerGroups = [
    { title: "Kurs", items: ["Mambo On2 Partnerwork", "Fotarbeid og musikalitet", "Kroppsbevegelse", "Nybegynner til viderekommen"] },
    { title: "Ukeplan", items: ["Mandag: 19:15 og 20:30", "Tirsdag: 19:00", "Onsdag: 19:00", "Møt opp 5 minutter før timen"] },
    { title: "Fellesskap", items: ["Faste kurs", "Helgeworkshops", "Sosialdanser", "Showteam"] },
];

const calendarWeekdays = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
const calendarDays = [
    { day: 28, outside: true }, { day: 29, outside: true }, { day: 30, outside: true },
    ...Array.from({ length: 31 }, (_, index) => ({ day: index + 1, outside: false })),
    { day: 1, outside: true },
];

function getCalendarEvents(day: number, outside: boolean) {
    if (outside) return [];
    if ([5, 12, 19, 26].includes(day)) return ["19:15 Litt øvet", "20:30 Viderekommen"];
    if ([6, 13, 20, 27].includes(day)) return ["19:00 Fotarbeid"];
    if ([7, 14, 21, 28].includes(day)) return ["19:00 Nybegynner"];
    return [];
}

const eventCards = [
    {
        image: "/events/saturday-social.webp",
        date: "Lørdag 10. oktober",
        time: "20:00–01:00",
        title: "Saturday Social",
        subtitle: "Salsa · Bachata",
        place: "Litteraturhuset Bergen",
        description: "Første utgave av House of Mambos Saturday Social med førfestklasse, sosialdans og DJ-er.",
    },
    {
        image: "/events/pre-party-class.webp",
        date: "Lørdag 10. oktober",
        time: "20:00–21:00",
        title: "Førfestklasse",
        subtitle: "Cuban Salsa · Litt øvet",
        place: "Litteraturhuset Bergen",
        description: "Start kvelden med en Cuban Salsa-klasse med Juan David før dansegulvet åpner.",
    },
    {
        image: "/events/autumn-courses.webp",
        date: "24. august–28. oktober",
        time: "Mandag–onsdag",
        title: "Høstens kurs",
        subtitle: "Salsa On2 · Mambo",
        place: "Bergen sentrum",
        description: "Partnerwork, fotarbeid, musikalitet og kroppsbevegelse for flere nivåer.",
    },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
        </div>
    );
}

export default function Home() {
    const googleCalendarEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL;
    const googleCalendarPublicUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_PUBLIC_URL;

    return (
        <main id="main-content" className="min-h-screen overflow-x-hidden bg-background" tabIndex={-1}>
            <header className="sticky top-0 z-50 border-b border-white/8 bg-background/95 backdrop-blur-md">
                <div className="site-container flex h-[4.75rem] items-center justify-between m:h-[5.25rem]">
                    <a href="#main-content" className="group relative z-10 -ml-1 shrink-0 m:-ml-3 l:-ml-6 xl:-ml-24" aria-label="House of Mambo forside">
                        <Image src="/images/house-of-mambo-logo.webp" alt="House of Mambo Bergen" width={600} height={408} priority sizes="(max-width: 767px) 82px, (max-width: 1023px) 118px, 142px" className="site-logo h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-20 l:h-24" />
                    </a>

                    <nav className="hidden items-center gap-8 l:flex" aria-label="Hovedmeny">
                        {navigation.map((item) => <a key={item.label} href={item.href} className="nav-link">{item.label}</a>)}
                    </nav>

                    <div className="hidden items-center gap-4 l:flex">
                        <a href="/registration" className="btn-primary btn-small">Meld deg på kurs</a>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={`social-link social-link--${social.label.toLowerCase()}`} aria-label={`House of Mambo på ${social.label}`}><SocialIcon platform={social.label} /></a>
                            ))}
                        </div>
                    </div>

                    <MobileMenu navigation={navigation} socialLinks={socialLinks} />
                </div>
            </header>

            <section className="relative isolate">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-7 m:py-10 l:py-12">
                    <div className="mb-8 grid gap-2 border-b border-white/8 pb-4 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-text-main/60 m:mb-10 m:flex m:flex-wrap m:items-center m:justify-between m:gap-3">
                        <span className="text-gold-bronze">◆ Inkluderende salsa- og mambomiljø · Bergen, Norge</span>
                        <span>Kurs · workshops · sosialdans</span>
                    </div>

                    <div className="mb-8 flex flex-col justify-between gap-4 m:mb-10 l:flex-row l:items-end">
                        <div>
                            <h1 className="title-primary text-[clamp(3rem,15vw,5.8rem)] leading-[0.88] tracking-[0.045em] m:tracking-[0.065em]">House of Mambo</h1>
                            <p className="title-secondary mt-4 text-base m:text-xl">Bergen</p>
                        </div>
                        <p className="micro-label pb-1 text-left text-gold-champagne/65 l:text-right">Mamboen lever</p>
                    </div>

                    <div className="grid gap-5 l:grid-cols-[1.3fr_0.88fr_0.88fr] l:items-stretch">
                        <div className="flex min-h-full flex-col justify-between gap-8 pr-0 l:pr-3">
                            <div>
                                <span className="mb-6 block h-px w-12 bg-gold-main" />
                                <p className="max-w-md text-base leading-7 text-text-main/72">Et inkluderende og inspirerende miljø for Salsa On2 og mambo i Bergen. Lær grunnteknikken, utvikle musikaliteten, bli tryggere i partnerwork og bli en del av det sosiale dansegulvet.</p>
                                <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
                                    <a href="#classes" className="btn-primary flex min-h-12 items-center justify-center text-center">Se kursene</a>
                                    <a href="/registration" className="btn-secondary flex min-h-12 items-center justify-center text-center">Meld deg på kurs</a>
                                </div>
                            </div>

                            <dl className="grid max-w-md grid-cols-[0.8fr_1.3fr] gap-x-6 gap-y-3 border border-white/6 bg-surface/70 p-5">
                                <dt className="micro-label">Trening</dt><dd className="micro-value">Salsa On2 / Mambo</dd>
                                <dt className="micro-label">Nivåer</dt><dd className="micro-value">Nybegynner til viderekommen</dd>
                                <dt className="micro-label">Fellesskap</dt><dd className="micro-value">Kurs · sosialdans · showteam</dd>
                            </dl>
                        </div>

                        <figure className="group flex h-full flex-col overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-black">
                                <Image src="/mambo-dance-main.webp" alt="Salsadansere på House of Mambo" fill priority loading="eager" fetchPriority="high" quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 317px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">Salsa On2</span>
                            </div>
                            <figcaption className="flex min-h-40 flex-1 flex-col border-t border-white/8 p-5"><h2 className="card-title">Bevegelse og kontakt</h2><p className="mt-3 text-base leading-7 text-text-main/70">Utvikle timing, musikalitet, kroppsbevegelse og partnerkontakt i et trygt og støttende treningsmiljø.</p></figcaption>
                        </figure>

                        <figure className="group flex h-full flex-col overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-black">
                                <Image src="/mambo-dance-floor.webp" alt="Dansegulvet og loungen på House of Mambo" fill quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 317px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">Felles dansegulv</span>
                            </div>
                            <figcaption className="flex min-h-40 flex-1 flex-col border-t border-white/8 p-5"><h2 className="card-title">Lær, dans, hør til</h2><p className="mt-3 text-base leading-7 text-text-main/70">Faste kurs, helgeworkshops, sosialdanser og showteam samler Bergens mambomiljø.</p></figcaption>
                        </figure>
                    </div>

                    <div className="mt-9 flex flex-col items-start gap-4 border border-white/8 bg-surface/65 px-4 py-4 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/60 m:flex-row m:flex-wrap m:items-center m:justify-between m:gap-x-6 m:gap-y-3">
                        <span className="text-gold-bronze">● Følg House of Mambo:</span>
                        <div className="grid w-full grid-cols-2 gap-3 m:flex m:w-auto m:flex-wrap m:gap-5">
                            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={`social-button social-button--${social.label.toLowerCase()}`}><SocialIcon platform={social.label} className="size-5" />{social.label}<span aria-hidden="true">↗</span></a>)}
                        </div>
                        <span>Kurs ◆ Workshops ◆ Sosialdans ◆ Showteam</span>
                    </div>

                    <div id="classes" className="mt-6 grid gap-4 m:grid-cols-3">
                        {highlights.map((item) => (
                            <article key={item.number} className="border border-white/7 bg-surface/70 p-5">
                                <h3 className="font-bebas text-2xl tracking-[0.075em] text-gold-main">{item.number} {item.title}</h3>
                                <p className="micro-label mt-1 text-gold-champagne/60">{item.subtitle}</p>
                                <p className="mt-3 text-base leading-7 text-text-main/65">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="courses-overview" className="site-container section-space">
                <div className="mb-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 l:flex-row l:items-end">
                    <SectionHeading eyebrow="Ukentlig trening i Bergen" title="Kurs og fellesskap" />
                    <p className="max-w-md text-base leading-7 text-text-main/65 l:text-right">Velg partnerwork eller solotrening, utvikle ferdighetene dine uke for uke og ta det du lærer med ut på dansegulvet.</p>
                </div>

                <div className="grid gap-5 m:grid-cols-3">
                    {offerings.map((item) => (
                        <article key={item.title} className="flex flex-col border border-white/7 bg-surface/70 p-5 m:min-h-[22rem] m:p-6">
                            <div className="flex items-center justify-between"><span className="border border-gold-bronze/25 bg-black/30 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne">{item.schedule}</span><span className="text-gold-champagne/75" aria-hidden="true">{item.icon}</span></div>
                            <h3 className="card-title mt-8 text-3xl">{item.title}</h3>
                            <p className="micro-label mt-2 text-gold-champagne/60">{item.subtitle}</p>
                            <p className="mt-4 text-base leading-7 text-text-main/70">{item.description}</p>
                            <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5"><a href="/registration" className="micro-label text-gold-main transition-colors hover:text-gold-champagne">{item.action} →</a><span className="text-xs uppercase tracking-[0.1em] text-text-main/55">{item.meta}</span></div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 border border-white/8 bg-surface/80 p-5 m:p-7">
                    <div className="flex flex-col justify-between gap-3 border-b border-white/8 pb-5 m:flex-row m:items-end">
                        <div><p className="micro-label">Pågående 8-ukersperiode</p><h3 className="font-bebas text-2xl tracking-[0.06em] text-text-main">Ukentlig timeplan</h3></div>
                        <p className="micro-label text-gold-champagne/65">● Kurspåmeldingen er åpen</p>
                    </div>
                    <div>
                        {timetable.map((item) => (
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

            <section id="events" className="border-y border-white/7 bg-[#160a0f]">
                <div className="site-container section-space">
                    <div className="mb-10 flex flex-col justify-between gap-5 l:flex-row l:items-end">
                        <SectionHeading eyebrow="Dette skjer hos House of Mambo" title="Kommende arrangementer" />
                        <p className="max-w-md text-base leading-7 text-text-main/70 l:text-right">Kurs, workshops og sosiale dansekvelder i Bergen. Følg oss på Facebook for siste nytt og oppdateringer.</p>
                    </div>

                    <div className="event-deck">
                        {eventCards.map((event) => (
                            <article key={event.title} className="event-card group">
                                <div className="event-card-image">
                                    <Image src={event.image} alt={`Plakat for ${event.title}`} fill quality={75} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), 360px" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" aria-hidden="true" />
                                    <span className="event-card-date">{event.date}</span>
                                </div>
                                <div className="event-card-content">
                                    <div className="flex items-start justify-between gap-4">
                                        <div><p className="micro-label text-gold-champagne/80">{event.subtitle}</p><h3 className="card-title mt-2">{event.title}</h3></div>
                                        <time className="event-card-time">{event.time}</time>
                                    </div>
                                    <p className="mt-4 text-base leading-7 text-text-main/70">{event.description}</p>
                                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                                        <span className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-text-main/70">{event.place}</span>
                                        <a href={socialLinks[0].href} target="_blank" rel="noreferrer" className="micro-label whitespace-nowrap text-gold-main hover:text-gold-champagne">Se på Facebook ↗</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="calendar" className="border-y border-white/7 bg-[#0d0d0d]">
                <div className="site-container section-space">
                    <div className="mb-8 flex flex-col justify-between gap-5 l:flex-row l:items-end">
                        <SectionHeading eyebrow="Kurs, workshops og sosialdans" title="Kalender" />
                        <p className="max-w-md text-base leading-7 text-text-main/70 l:text-right">Se kommende treninger og arrangementer. Kalenderen oppdateres fra House of Mambos Google Kalender.</p>
                    </div>

                    {googleCalendarEmbedUrl ? (
                        <div className="calendar-shell">
                            <iframe
                                title="House of Mambo arrangementskalender"
                                src={googleCalendarEmbedUrl}
                                className="calendar-frame"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    ) : (
                        <div className="calendar-preview">
                            <div className="calendar-toolbar">
                                <div>
                                    <p className="micro-label">House of Mambo</p>
                                    <h3 className="font-bebas text-3xl tracking-[0.055em] text-text-main">Oktober 2026</h3>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="calendar-preview-badge">Forhåndsvisning</span>
                                    {googleCalendarPublicUrl && <a href={googleCalendarPublicUrl} target="_blank" rel="noreferrer" className="btn-secondary btn-small">Åpne Google Kalender ↗</a>}
                                </div>
                            </div>

                            <div className="calendar-month" aria-label="Forhåndsvisning av kurskalender for oktober 2026">
                                {calendarWeekdays.map((weekday) => <div key={weekday} className="calendar-weekday">{weekday}</div>)}
                                {calendarDays.map((date, index) => {
                                    const events = getCalendarEvents(date.day, date.outside);
                                    return (
                                        <div key={`${date.day}-${index}`} className={`calendar-day${date.outside ? " calendar-day--outside" : ""}`}>
                                            <span className="calendar-date">{date.day}</span>
                                            <div className="calendar-events">
                                                {events.map((event) => <span key={event} className="calendar-event">{event}</span>)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="calendar-agenda">
                                <article><time>Man 5. okt. · 19:15</time><h4>Mambo Partnerwork · Litt øvet</h4><p>Bergen Internasjonale Kultursenter</p></article>
                                <article><time>Man 5. okt. · 20:30</time><h4>Mambo Partnerwork · Viderekommen</h4><p>Bergen Internasjonale Kultursenter</p></article>
                                <article><time>Tir 6. okt. · 19:00</time><h4>Fotarbeid og musikalitet</h4><p>Forandringshuset V13</p></article>
                                <article><time>Ons 7. okt. · 19:00</time><h4>Mambo Partnerwork · Nybegynner</h4><p>Forandringshuset V13</p></article>
                            </div>

                            <p className="calendar-note">Dette er en visuell forhåndsvisning. Den erstattes automatisk av den oppdaterte Google Kalenderen når kalenderlenken kobles til.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="border-y border-white/7 bg-[#0d0d0d]">
                <div className="site-container py-12 m:py-16">
                    <div className="grid gap-7 border border-white/8 bg-surface/70 p-6 m:p-8 l:grid-cols-[1fr_auto] l:items-center">
                        <div>
                            <p className="section-eyebrow">Kurspåmelding</p>
                            <h2 className="font-bebas mt-2 text-4xl tracking-[0.055em] text-gold-main uppercase">Klar for å bli med?</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-text-main/70">Velg kurs og send inn opplysningene dine på vår egen påmeldingsside. Skjemaet er klart for Google Sheets-tilkoblingen når du ønsker å legge den til.</p>
                        </div>
                        <a href="/registration" className="btn-primary inline-flex min-h-12 w-full items-center justify-center text-center l:w-auto">Åpne påmelding →</a>
                    </div>
                </div>
            </section>

            <section id="club" className="border-b border-white/7 bg-background">
                <div className="site-container section-space">
                    <div className="grid gap-10 l:grid-cols-[1fr_1fr] l:gap-8">
                        <div>
                            <SectionHeading eyebrow="Mer enn ukentlige kurs" title="Dansemiljøet i Bergen" />
                            <p className="mt-6 max-w-xl text-base leading-7 text-text-main/70">House of Mambo skaper et inkluderende og inspirerende miljø for Salsa On2 og mambo i Bergen. Faste kurs suppleres med helgeworkshops, sosialdanser og showteam der dansere kan fortsette å utvikle seg sammen.</p>
                            <figure className="relative mt-7 aspect-4/5 overflow-hidden border border-white/8 bg-black sm:aspect-16/10">
                                <Image src="/mambo-venue-text-free.webp" alt="Ballsalen og loungen på House of Mambo" fill loading="eager" quality={70} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 4rem), 552px" className="object-cover object-[center_58%]" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/10" aria-hidden="true" />
                                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-end sm:justify-between">
                                    <div><p className="micro-label text-gold-champagne/70">Kurs tirsdag og onsdag</p><p className="font-bebas text-xl tracking-[0.08em] text-text-main">Forandringshuset V13, 5017 Bergen</p></div>
                                    <div><p className="micro-label text-gold-champagne/70">Kapasitet</p><p className="font-bebas text-xl tracking-[0.08em] text-text-main">180 gjester</p></div>
                                </figcaption>
                            </figure>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Trening</p><h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Ukentlige On2-kurs</h3><p className="mt-2 text-sm leading-6 text-text-main/70">Nybegynner, litt øvet, viderekommen og soloarbeid på åpent nivå.</p></div>
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Fellesskap</p><h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Workshops og sosialdans</h3><p className="mt-2 text-sm leading-6 text-text-main/70">Helgetrening, sosialdanser og showteam.</p></div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <article id="course-signup" className="border border-white/8 bg-[#252525] p-6 m:p-8">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                    <div><h3 className="font-bebas text-2xl tracking-[0.06em] text-gold-main">♙ Kurspåmelding</h3><p className="micro-label mt-1 text-gold-champagne/75">Ett komplett 8-ukerskurs</p></div>
                                    <p className="font-bebas text-3xl tracking-[0.04em] text-gold-main">990 kr<span className="text-base text-text-main/75">/kurs</span></p>
                                </div>
                                <ul className="mt-7 space-y-4">
                                    {courseDetails.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-text-main/75"><span className="mt-1 text-gold-main" aria-hidden="true">◉</span><span>{item}</span></li>)}
                                </ul>
                                <a href="/registration" className="btn-primary mt-8 block text-center">Åpne påmelding</a>
                            </article>

                            <article className="border border-white/8 bg-surface/70 p-6">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className="micro-label">Aktuell kursinformasjon</p><p className="text-xs uppercase tracking-[0.1em] text-text-main/70">Høsten 2026</p></div>
                                <div className="mt-5 flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Kursperiode</h4><p className="mt-1 text-sm leading-6 text-text-main/70">Mandag 24. august — onsdag 28. oktober</p></div><span className="micro-label text-gold-main">8 uker</span></div>
                                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Før timen</h4><p className="mt-1 text-sm leading-6 text-text-main/70">Møt opp 5 minutter før timen starter.</p></div><span className="micro-label text-gold-main">Velkommen</span></div>
                            </article>

                            <blockquote className="border border-white/8 bg-surface/70 p-7 text-base italic leading-7 text-text-main/72">
                                <span className="mb-2 block font-serif text-3xl not-italic text-gold-main/45">“</span>
                                Mamboen lever. Kom og lær, dans og bygg Bergens On2-miljø sammen med oss.
                                <footer className="mt-5 flex flex-col items-start gap-4 not-italic sm:flex-row sm:items-center sm:justify-between">
                                    <cite className="micro-label">— House of Mambo Bergen</cite>
                                    <Image src="/images/house-of-mambo-logo.webp" alt="House of Mambo Bergen" width={600} height={408} sizes="(max-width: 767px) 64px, 80px" className="h-auto w-16 shrink-0 object-contain m:w-20" />
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="site-container section-space pb-10">
                    <div className="grid gap-6 border border-white/8 bg-[#252525] p-5 m:p-8 l:grid-cols-[1.15fr_0.85fr] l:items-center">
                    <div><p className="micro-label">Hold kontakten</p><h2 className="font-bebas text-3xl tracking-[0.055em] text-text-main">Følg kurs, workshops og sosialdans</h2><p className="mt-2 text-base leading-7 text-text-main/70">Følg House of Mambo for påmeldinger, ukentlige kursoppdateringer, workshops, sosialdanser og høydepunkter fra fellesskapet.</p></div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={`social-button social-button--large social-button--${social.label.toLowerCase()}`}><SocialIcon platform={social.label} className="size-6" />{social.label}<span aria-hidden="true">↗</span></a>)}
                    </div>
                </div>

                <footer id="about" className="pt-14">
                    <div className="grid gap-10 border-b border-white/8 pb-12 m:grid-cols-2 l:grid-cols-[0.8fr_1fr_1.15fr_1.15fr]">
                        <div>
                            <Image src="/images/house-of-mambo-logo.webp" alt="House of Mambo Bergen" width={600} height={408} sizes="(max-width: 767px) 128px, 160px" className="h-auto w-32 object-contain m:w-40" />
                            <p className="micro-label mt-4 text-gold-champagne/75">House of Mambo Bergen</p>
                            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-text-main/70">Et inkluderende og inspirerende miljø for Salsa On2, mambo, workshops, sosialdans og showteam i Bergen.</p>
                            <div className="mt-5 flex gap-2">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={`social-link social-link--${social.label.toLowerCase()}`} aria-label={`House of Mambo på ${social.label}`}><SocialIcon platform={social.label} /></a>)}</div>
                        </div>
                        {footerGroups.map((group) => <div key={group.title}><h3 className="micro-label text-gold-main">{group.title}</h3><ul className="mt-4 space-y-2">{group.items.map((item) => <li key={item} className="text-sm leading-6 text-text-main/60">{item}</li>)}</ul></div>)}
                    </div>
                    <div className="flex flex-col justify-between gap-4 py-7 text-xs font-semibold uppercase tracking-[0.1em] text-text-main/75 m:flex-row">
                        <p>© 2026 House of Mambo Bergen AS. Alle rettigheter forbeholdt.</p>
                        <div className="flex flex-wrap gap-5"><a href="/registration" className="hover:text-gold-champagne">Kurspåmelding</a><a href="/privacy" className="hover:text-gold-champagne">Personvern</a>{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-champagne"><SocialIcon platform={social.label} className="size-3" />{social.label}</a>)}</div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 border-t border-white/8 pt-7 text-text-main/75 m:flex-row m:items-end">
                        <div><p className="font-bebas text-xl tracking-[0.04em] text-gold-main">House of Mambo</p><p className="mt-1 text-xs leading-5 tracking-[0.1em]">Bergen, Norge · Salsa On2 · Kurs · Workshops · Fellesskap</p></div>
                        <p className="text-xs uppercase leading-5 tracking-[0.1em]">© 2026 House of Mambo Bergen. Alle rettigheter forbeholdt.</p>
                    </div>
                </footer>
            </section>
        </main>
    );
}
