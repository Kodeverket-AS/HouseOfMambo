import Image from "next/image";

const navigation = [
    { label: "Classes", href: "#classes" },
    { label: "Events", href: "#events" },
    { label: "The club", href: "#club" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/p/House-of-Mambo-Bergen-61592891530613/" },
    { label: "Instagram", href: "https://www.instagram.com/houseofmambo_bergen/" },
];

const highlights = [
    {
        number: "01",
        title: "Mambo On2",
        subtitle: "Partnerwork for every level",
        description: "Beginner, improver, and intermediate courses focused on timing, connection, and confident social dancing.",
    },
    {
        number: "02",
        title: "Solo training",
        subtitle: "Footwork, musicality & movement",
        description: "Open-level training that develops shines, musical interpretation, and natural body movement.",
    },
    {
        number: "03",
        title: "Community",
        subtitle: "Socials, workshops & showteams",
        description: "An inclusive Bergen dance community where people train, connect, perform, and enjoy the music together.",
    },
];

const offerings = [
    {
        schedule: "Monday",
        icon: "♛",
        title: "Mambo partnerwork",
        subtitle: "Improver & intermediate",
        description: "Build stronger timing, partner connection, turn patterns, and social-dance confidence with Elias at Bergen Internasjonale Kultursenter.",
        action: "Register interest",
        meta: "19:15 & 20:30",
    },
    {
        schedule: "Tuesday",
        icon: "♟",
        title: "Footwork & musicality",
        subtitle: "Open level solo course",
        description: "Train shines, musicality, and body movement with Alberto. Recommended for dancers with at least three months of salsa experience.",
        action: "Register interest",
        meta: "19:00 — 20:00",
    },
    {
        schedule: "Wednesday",
        icon: "♜",
        title: "Mambo beginner",
        subtitle: "Partnerwork foundations",
        description: "Learn Salsa On2 fundamentals, lead-and-follow connection, and the essential tools you need to feel comfortable on the social floor.",
        action: "Register interest",
        meta: "19:00 — 20:00",
    },
];

const timetable = [
    { time: "19:15", title: "Monday · Mambo Partnerwork Improver", detail: "On2 partnerwork with Elias", place: "Bergen Internasjonale Kultursenter", status: "8 weeks" },
    { time: "20:30", title: "Monday · Mambo Partnerwork Intermediate", detail: "On2 partnerwork with Elias", place: "Bergen Internasjonale Kultursenter", status: "8 weeks" },
    { time: "19:00", title: "Tuesday · Footwork, Musicality & Body Movement", detail: "Open-level solo training with Alberto", place: "Forandringshuset V13", status: "8 weeks" },
    { time: "19:00", title: "Wednesday · Mambo Partnerwork Beginner", detail: "On2 partnerwork foundations with Elias", place: "Forandringshuset V13", status: "8 weeks" },
];

const courseDetails = [
    "One complete 8-week course",
    "NOK 690 for full-time students",
    "Discounted bundles when registering for multiple courses",
    "NOK 50 registration fee included in the course price",
];

const footerGroups = [
    { title: "Courses", items: ["Mambo On2 Partnerwork", "Footwork & Musicality", "Body Movement", "Beginner to Intermediate"] },
    { title: "Weekly schedule", items: ["Monday: 19:15 & 20:30", "Tuesday: 19:00", "Wednesday: 19:00", "Arrive 5 minutes before class"] },
    { title: "Community", items: ["Regular classes", "Weekend workshops", "Social dance parties", "Showteams"] },
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

export default function Home() {
    return (
        <main id="home" className="min-h-screen overflow-x-hidden bg-background">
            <header className="sticky top-0 z-50 border-b border-white/8 bg-background/95 backdrop-blur-md">
                <div className="site-container flex h-[4.75rem] items-center justify-between m:h-[5.25rem]">
                    <a href="#home" className="group relative z-10 -ml-1 shrink-0 m:-ml-3 l:-ml-6 xl:-ml-24" aria-label="House of Mambo home">
                        <Image src="/images/house-of-mambo-logo.png" alt="House of Mambo Bergen" width={600} height={408} priority className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-20 l:h-24" />
                    </a>

                    <nav className="hidden items-center gap-8 l:flex" aria-label="Main navigation">
                        {navigation.map((item) => <a key={item.label} href={item.href} className="nav-link">{item.label}</a>)}
                    </nav>

                    <div className="hidden items-center gap-4 l:flex">
                        <a href="/registration" className="btn-primary btn-small">Course sign-up</a>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social-link" aria-label={`House of Mambo on ${social.label}`}><SocialIcon platform={social.label} /></a>
                            ))}
                        </div>
                    </div>

                    <details className="mobile-menu relative l:hidden">
                        <summary className="grid size-11 cursor-pointer list-none place-items-center border border-white/10 bg-surface text-gold-main [&::-webkit-details-marker]:hidden">
                            <span className="sr-only">Open navigation</span>
                            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /></span>
                        </summary>
                        <nav className="fixed inset-x-4 top-[5.25rem] z-50 flex max-h-[calc(100dvh-6.25rem)] flex-col overflow-y-auto border border-white/10 bg-surface p-2 shadow-2xl m:absolute m:inset-x-auto m:right-0 m:top-14 m:w-72" aria-label="Mobile navigation">
                            {navigation.map((item) => <a key={item.label} href={item.href} className="border-b border-white/6 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-text-main/75 last:border-0 hover:bg-white/5 hover:text-gold-main">{item.label}</a>)}
                            <a href="/registration" className="btn-primary mt-2 text-center">Course sign-up</a>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-white/10 px-3 py-3 text-center text-sm font-semibold uppercase tracking-[0.09em] text-gold-champagne"><SocialIcon platform={social.label} />{social.label}</a>)}
                            </div>
                        </nav>
                    </details>
                </div>
            </header>

            <section className="relative isolate">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-7 m:py-10 l:py-12">
                    <div className="mb-8 grid gap-2 border-b border-white/8 pb-4 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-text-main/60 m:mb-10 m:flex m:flex-wrap m:items-center m:justify-between m:gap-3">
                        <span className="text-gold-bronze">◆ Inclusive salsa & mambo community · Bergen, Norway</span>
                        <span>Classes · workshops · social dancing</span>
                    </div>

                    <div className="mb-8 flex flex-col justify-between gap-4 m:mb-10 l:flex-row l:items-end">
                        <div>
                            <h1 className="title-primary text-[clamp(3rem,15vw,5.8rem)] leading-[0.88] tracking-[0.045em] m:tracking-[0.065em]">House of Mambo</h1>
                            <p className="title-secondary mt-4 text-base m:text-xl">Bergen</p>
                        </div>
                        <p className="micro-label pb-1 text-left text-gold-champagne/65 l:text-right">The Mambo is alive</p>
                    </div>

                    <div className="grid gap-5 l:grid-cols-[1.3fr_0.88fr_0.88fr] l:items-start">
                        <div className="flex min-h-full flex-col justify-between gap-8 pr-0 l:pr-3">
                            <div>
                                <span className="mb-6 block h-px w-12 bg-gold-main" />
                                <p className="max-w-md text-base leading-7 text-text-main/72">An inclusive and inspiring community for Salsa On2 and mambo in Bergen. Learn the foundations, develop your musicality, grow through partnerwork, and become part of the social dance floor.</p>
                                <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
                                    <a href="#classes" className="btn-primary flex min-h-12 items-center justify-center text-center">Explore classes</a>
                                    <a href="/registration" className="btn-secondary flex min-h-12 items-center justify-center text-center">Course sign-up</a>
                                </div>
                            </div>

                            <dl className="grid max-w-md grid-cols-[0.8fr_1.3fr] gap-x-6 gap-y-3 border border-white/6 bg-surface/70 p-5">
                                <dt className="micro-label">Training</dt><dd className="micro-value">Salsa On2 / Mambo</dd>
                                <dt className="micro-label">Levels</dt><dd className="micro-value">Beginner to intermediate</dd>
                                <dt className="micro-label">Community</dt><dd className="micro-value">Classes · socials · showteams</dd>
                            </dl>
                        </div>

                        <figure className="group overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image src="/mambo.dance.png" alt="Salsa dancers inside the House of Mambo club" fill loading="eager" fetchPriority="high" sizes="(max-width: 1023px) 100vw, 30vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">Salsa On2</span>
                            </div>
                            <figcaption className="min-h-40 border-t border-white/8 p-5"><h3 className="card-title">Movement & connection</h3><p className="mt-3 text-base leading-7 text-text-main/70">Develop timing, musicality, body movement, and partner connection in a supportive training environment.</p></figcaption>
                        </figure>

                        <figure className="group overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image src="/mambo-dance.png" alt="House of Mambo acoustic dance floor and lounge" fill sizes="(max-width: 1023px) 100vw, 30vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne backdrop-blur-sm">Community floor</span>
                            </div>
                            <figcaption className="min-h-40 border-t border-white/8 p-5"><h3 className="card-title">Learn, dance, belong</h3><p className="mt-3 text-base leading-7 text-text-main/70">Regular courses, weekend workshops, social dance parties, and showteams bring Bergen&apos;s mambo community together.</p></figcaption>
                        </figure>
                    </div>

                    <div className="mt-9 flex flex-col items-start gap-4 border border-white/8 bg-surface/65 px-4 py-4 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-text-main/60 m:flex-row m:flex-wrap m:items-center m:justify-between m:gap-x-6 m:gap-y-3">
                        <span className="text-gold-bronze">● Follow the House of Mambo community:</span>
                        <div className="grid w-full grid-cols-2 gap-3 m:flex m:w-auto m:flex-wrap m:gap-5">
                            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/8 px-3 text-gold-champagne transition-colors hover:text-gold-main m:min-h-0 m:border-0 m:px-0"><SocialIcon platform={social.label} className="size-4" />{social.label} ↗</a>)}
                        </div>
                        <span>Classes ◆ Workshops ◆ Socials ◆ Showteams</span>
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

            <section id="events" className="site-container section-space">
                <div className="mb-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 l:flex-row l:items-end">
                    <SectionHeading eyebrow="Weekly training in Bergen" title="Courses & community" />
                    <p className="max-w-md text-base leading-7 text-text-main/65 l:text-right">Choose partnerwork or solo training, build your skills week by week, and bring what you learn onto the social dance floor.</p>
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
                        <div><p className="micro-label">Current 8-week course cycle</p><h3 className="font-bebas text-2xl tracking-[0.06em] text-text-main">Weekly course timetable</h3></div>
                        <p className="micro-label text-gold-champagne/65">● Course registration is open</p>
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

            <section className="border-y border-white/7 bg-[#0d0d0d]">
                <div className="site-container py-12 m:py-16">
                    <div className="grid gap-7 border border-white/8 bg-surface/70 p-6 m:p-8 l:grid-cols-[1fr_auto] l:items-center">
                        <div>
                            <p className="section-eyebrow">Course registration</p>
                            <h2 className="font-bebas mt-2 text-4xl tracking-[0.055em] text-gold-main uppercase">Ready to join?</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-text-main/70">Choose your course and send your details on our dedicated registration page. The form is ready for the Google Sheets connection when you want to add it.</p>
                        </div>
                        <a href="/registration" className="btn-primary inline-flex min-h-12 w-full items-center justify-center text-center l:w-auto">Open registration →</a>
                    </div>
                </div>
            </section>

            <section id="club" className="border-b border-white/7 bg-background">
                <div className="site-container section-space">
                    <div className="grid gap-10 l:grid-cols-[1fr_1fr] l:gap-8">
                        <div>
                            <SectionHeading eyebrow="More than weekly classes" title="The Bergen community" />
                            <p className="mt-6 max-w-xl text-base leading-7 text-text-main/58">House of Mambo creates an inclusive and inspiring community for Salsa On2 and mambo in Bergen. Regular courses are supported by weekend workshops, social dance parties, and showteams where dancers can keep developing together.</p>
                            <figure className="relative mt-7 aspect-[4/5] overflow-hidden border border-white/8 bg-black sm:aspect-[16/10]">
                                <Image src="/mambo.dance.png" alt="The House of Mambo grand ballroom and lounge" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_58%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" aria-hidden="true" />
                                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-end sm:justify-between">
                                    <div><p className="micro-label text-gold-champagne/70">Tuesday & Wednesday classes</p><p className="font-bebas text-xl tracking-[0.08em] text-text-main">Forandringshuset V13, 5017 Bergen</p></div>
                                    <p className="font-bebas text-2xl tracking-[0.04em] text-gold-main">Salsa On2</p>
                                </figcaption>
                            </figure>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Training</p><h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Weekly On2 courses</h3><p className="mt-2 text-sm leading-6 text-text-main/60">Beginner, improver, intermediate, and open-level solo work.</p></div>
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Community</p><h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Workshops & socials</h3><p className="mt-2 text-sm leading-6 text-text-main/60">Weekend training, social dance parties, and showteams.</p></div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <article id="course-signup" className="border border-white/8 bg-[#252525] p-6 m:p-8">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                    <div><h3 className="font-bebas text-2xl tracking-[0.06em] text-gold-main">♙ Course registration</h3><p className="micro-label mt-1 text-gold-champagne/55">One complete 8-week course</p></div>
                                    <p className="font-bebas text-3xl tracking-[0.04em] text-gold-main">NOK 990<span className="text-base text-text-main/50">/course</span></p>
                                </div>
                                <ul className="mt-7 space-y-4">
                                    {courseDetails.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-text-main/75"><span className="mt-1 text-gold-main" aria-hidden="true">◉</span><span>{item}</span></li>)}
                                </ul>
                                <a href="/registration" className="btn-primary mt-8 block text-center">Open registration</a>
                            </article>

                            <article className="border border-white/8 bg-surface/70 p-6">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className="micro-label">Current course information</p><p className="text-xs uppercase tracking-[0.1em] text-text-main/55">Autumn 2026</p></div>
                                <div className="mt-5 flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Course period</h4><p className="mt-1 text-sm leading-6 text-text-main/60">Monday 24 August — Wednesday 28 October</p></div><span className="micro-label text-gold-main">8 weeks</span></div>
                                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h4 className="text-sm font-semibold uppercase tracking-[0.09em] text-text-main/85">Before class</h4><p className="mt-1 text-sm leading-6 text-text-main/60">Please arrive 5 minutes before your class starts.</p></div><span className="micro-label text-gold-main">Welcome</span></div>
                            </article>

                            <blockquote className="border border-white/8 bg-surface/70 p-7 text-base italic leading-7 text-text-main/72">
                                <span className="mb-2 block font-serif text-3xl not-italic text-gold-main/45">“</span>
                                The Mambo is alive. Come learn, dance, and help us build Bergen&apos;s On2 community together.
                                <footer className="mt-5 flex flex-col items-start gap-4 not-italic sm:flex-row sm:items-center sm:justify-between">
                                    <cite className="micro-label">— House of Mambo Bergen</cite>
                                    <Image src="/images/house-of-mambo-logo.png" alt="House of Mambo Bergen" width={600} height={408} className="h-auto w-16 shrink-0 object-contain m:w-20" />
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="site-container section-space pb-10">
                    <div className="grid gap-6 border border-white/8 bg-[#252525] p-5 m:p-8 l:grid-cols-[1.15fr_0.85fr] l:items-center">
                    <div><p className="micro-label">Stay connected</p><h2 className="font-bebas text-3xl tracking-[0.055em] text-text-main">Follow classes, workshops & socials</h2><p className="mt-2 text-base leading-7 text-text-main/68">Follow House of Mambo for registration announcements, weekly course updates, workshops, social dance parties, and community highlights.</p></div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center"><SocialIcon platform={social.label} className="size-5" />{social.label} ↗</a>)}
                    </div>
                </div>

                <footer id="about" className="pt-14">
                    <div className="grid gap-10 border-b border-white/8 pb-12 m:grid-cols-2 l:grid-cols-[0.8fr_1fr_1.15fr_1.15fr]">
                        <div>
                            <Image src="/images/house-of-mambo-logo.png" alt="House of Mambo Bergen" width={600} height={408} className="h-auto w-32 object-contain m:w-40" />
                            <p className="micro-label mt-4 text-gold-champagne/50">House of Mambo Bergen</p>
                            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-text-main/60">An inclusive and inspiring community for Salsa On2, mambo, workshops, socials, and showteams in Bergen.</p>
                            <div className="mt-5 flex gap-2">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="social-link" aria-label={`House of Mambo on ${social.label}`}><SocialIcon platform={social.label} /></a>)}</div>
                        </div>
                        {footerGroups.map((group) => <div key={group.title}><h3 className="micro-label text-gold-main">{group.title}</h3><ul className="mt-4 space-y-2">{group.items.map((item) => <li key={item} className="text-sm leading-6 text-text-main/60">{item}</li>)}</ul></div>)}
                    </div>
                    <div className="flex flex-col justify-between gap-4 py-7 text-xs font-semibold uppercase tracking-[0.1em] text-text-main/55 m:flex-row">
                        <p>© 2026 House of Mambo Bergen AS. All rights reserved.</p>
                        <div className="flex flex-wrap gap-5"><a href="/registration" className="hover:text-gold-champagne">Course sign-up</a>{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-champagne"><SocialIcon platform={social.label} className="size-3" />{social.label}</a>)}</div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 border-t border-white/8 pt-7 text-text-main/55 m:flex-row m:items-end">
                        <div><p className="font-bebas text-xl tracking-[0.04em] text-gold-main">House of Mambo</p><p className="mt-1 text-xs leading-5 tracking-[0.1em]">Bergen, Norway · Salsa On2 · Classes · Workshops · Community</p></div>
                        <p className="text-xs uppercase leading-5 tracking-[0.1em]">© 2026 House of Mambo Bergen. All rights reserved.</p>
                    </div>
                </footer>
            </section>
        </main>
    );
}
