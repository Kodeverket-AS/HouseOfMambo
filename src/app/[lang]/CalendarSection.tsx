import { htmlLang, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const timeZone = "Europe/Oslo";

// Midlertidig løsning til kalenderen flyttes til Sanity.
// Uten kalender-ID vises en fiktiv eksempelkalender.
const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

type CalendarSectionProps = {
    lang: Locale;
    t: Dictionary["calendar"];
};

function embedUrl(id: string, lang: Locale) {
    const params = new URLSearchParams({
        src: id,
        ctz: timeZone,
        hl: lang === "no" ? "no" : "en",
        mode: "AGENDA",
        showTitle: "0",
        showPrint: "0",
        showCalendars: "0",
        showTz: "0",
    });
    return `https://calendar.google.com/calendar/embed?${params}`;
}

export default function CalendarSection({ lang, t }: CalendarSectionProps) {
    const locale = htmlLang[lang];
    const day = new Intl.DateTimeFormat(locale, { day: "numeric", timeZone });
    const month = new Intl.DateTimeFormat(locale, { month: "short", timeZone });
    const weekday = new Intl.DateTimeFormat(locale, { weekday: "long", timeZone });
    const time = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone });

    return (
        <section id="calendar" className="site-container section-space" aria-labelledby="calendar-title">
            <div className="mb-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 l:flex-row l:items-end">
                <div>
                    <p className="section-eyebrow">{t.eyebrow}</p>
                    <h2 id="calendar-title" className="section-title">{t.title}</h2>
                </div>
                <p className="max-w-md text-base leading-7 text-text-main/65 l:text-right">{t.intro}</p>
            </div>

            {calendarId ? (
                <div className="border border-white/8 bg-surface/80 p-2 m:p-3">
                    <iframe
                        src={embedUrl(calendarId, lang)}
                        title={t.iframeTitle}
                        loading="lazy"
                        className="h-[36rem] w-full border-0 bg-text-main"
                    />
                    <a href={`https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`} target="_blank" rel="noreferrer" className="micro-label mt-3 inline-flex min-h-11 items-center px-2 text-gold-main transition-colors hover:text-gold-champagne">{t.openInGoogle} ↗</a>
                </div>
            ) : (
                <div className="border border-white/8 bg-surface/80 p-5 m:p-7">
                    <p className="mb-2 border-l-2 border-gold-main/60 pl-3 text-sm leading-6 text-text-main/60">{t.sampleNotice}</p>
                    <ol>
                        {t.sampleEvents.map((event) => {
                            const start = new Date(event.start);
                            const end = new Date(event.end);
                            return (
                                <li key={event.start + event.title} className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-2 border-b border-white/8 py-5 last:border-0 m:grid-cols-[5rem_1fr_auto] m:items-center">
                                    <time dateTime={event.start} className="row-span-2 flex flex-col items-center justify-center border border-gold-bronze/30 bg-black/30 py-2 m:row-span-1">
                                        <span className="font-bebas text-3xl leading-none tracking-[0.04em] text-gold-main">{day.format(start)}</span>
                                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-champagne">{month.format(start).replace(".", "")}</span>
                                    </time>
                                    <div>
                                        <h3 className="text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-text-main/85">{event.title}</h3>
                                        <p className="mt-1 text-sm leading-6 text-text-main/60">
                                            <span className="capitalize">{weekday.format(start)}</span> · {time.format(start)}–{time.format(end)} · {event.place}
                                        </p>
                                    </div>
                                    <span className="justify-self-start border border-gold-bronze/30 px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-gold-champagne m:justify-self-end">{t.types[event.type as keyof typeof t.types]}</span>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            )}
        </section>
    );
}
