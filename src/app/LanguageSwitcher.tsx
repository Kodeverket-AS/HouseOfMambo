"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type Language = "no" | "en";

const translations: Record<string, string> = {
    "Hopp til hovedinnhold": "Skip to main content",
    Kurs: "Classes",
    Arrangementer: "Events",
    Galleri: "Gallery",
    Fellesskapet: "Community",
    "Om oss": "About us",
    Kontakt: "Contact",
    "Meld deg på kurs": "Register for classes",
    "House of Mambo forside": "House of Mambo home",
    "◆ Inkluderende salsa- og mambomiljø · Bergen, Norge":
        "◆ Inclusive salsa and mambo community · Bergen, Norway",
    "Kurs · workshops · sosialdans": "Classes · workshops · social dancing",
    "Mamboen lever": "Mambo lives",
    "Et inkluderende og inspirerende miljø for Salsa On2 og mambo i Bergen. Lær grunnteknikken, utvikle musikaliteten, bli tryggere i partnerwork og bli en del av det sosiale dansegulvet.":
        "An inclusive and inspiring community for Salsa On2 and mambo in Bergen. Learn the fundamentals, develop your musicality, grow more confident in partnerwork and become part of the social dance floor.",
    "Se kursene": "View classes",
    Trening: "Training",
    Nivåer: "Levels",
    "Nybegynner til viderekommen": "Beginner to advanced",
    "Kurs · sosialdans · showteam": "Classes · social dancing · show team",
    "Bevegelse og kontakt": "Movement and connection",
    "Utvikle timing, musikalitet, kroppsbevegelse og partnerkontakt i et trygt og støttende treningsmiljø.":
        "Develop timing, musicality, body movement and partner connection in a safe and supportive training environment.",
    "Felles dansegulv": "Shared dance floor",
    "Lær, dans, hør til": "Learn, dance, belong",
    "Faste kurs, helgeworkshops, sosialdanser og showteam samler Bergens mambomiljø.":
        "Weekly classes, weekend workshops, social dances and show team bring Bergen's mambo community together.",
    "● Følg House of Mambo:": "● Follow House of Mambo:",
    "Kurs ◆ Workshops ◆ Sosialdans ◆ Showteam":
        "Classes ◆ Workshops ◆ Social dancing ◆ Show team",
    "Partnerwork for alle nivåer": "Partnerwork for all levels",
    "Kurs for nybegynnere, litt øvede og viderekomne med fokus på timing, kontakt og trygghet på dansegulvet.":
        "Classes for beginners, improvers and advanced dancers focused on timing, connection and confidence on the dance floor.",
    Solotrening: "Solo training",
    "Fotarbeid, musikalitet og bevegelse": "Footwork, musicality and movement",
    "Trening på åpent nivå som utvikler shines, musikalsk forståelse og naturlig kroppsbevegelse.":
        "Open-level training that develops shines, musical understanding and natural body movement.",
    Fellesskap: "Community",
    "Sosialdans, workshops og showteam":
        "Social dancing, workshops and show team",
    "Et inkluderende dansemiljø i Bergen der mennesker trener, møtes, opptrer og nyter musikken sammen.":
        "An inclusive dance community in Bergen where people train, meet, perform and enjoy the music together.",
    "Ukentlig trening i Bergen": "Weekly training in Bergen",
    "Kurs og fellesskap": "Classes and community",
    "Velg partnerwork eller solotrening, utvikle ferdighetene dine uke for uke og ta det du lærer med ut på dansegulvet.":
        "Choose partnerwork or solo training, develop your skills week by week and take what you learn onto the dance floor.",
    Mandag: "Monday",
    Tirsdag: "Tuesday",
    Onsdag: "Wednesday",
    "Mambo partnerwork": "Mambo partnerwork",
    "Litt øvet og viderekommen": "Improver and advanced",
    "Utvikle timing, partnerkontakt, turmønstre og trygghet i sosialdans med Elias på Bergen Internasjonale Kultursenter.":
        "Develop timing, partner connection, turn patterns and confidence in social dancing with Elias at Bergen International Cultural Center.",
    "Meld interesse": "Register interest",
    "Fotarbeid og musikalitet": "Footwork and musicality",
    "Solokurs på åpent nivå": "Open-level solo class",
    "Tren shines, musikalitet og kroppsbevegelse med Alberto. Anbefalt for dansere med minst tre måneders salsaerfaring.":
        "Train shines, musicality and body movement with Alberto. Recommended for dancers with at least three months of salsa experience.",
    "Mambo nybegynner": "Mambo beginner",
    "Grunnkurs i partnerwork": "Partnerwork fundamentals",
    "Lær grunnleggende Salsa On2, kontakt mellom fører og følger og verktøyene du trenger for å føle deg trygg på dansegulvet.":
        "Learn Salsa On2 fundamentals, connection between lead and follow, and the tools you need to feel confident on the dance floor.",
    "Pågående 8-ukersperiode": "Current 8-week term",
    "Ukentlig timeplan": "Weekly schedule",
    "● Kurspåmeldingen er åpen": "● Registration is open",
    "8 uker": "8 weeks",
    "Dette skjer hos House of Mambo": "What's happening at House of Mambo",
    "Kommende arrangementer": "Upcoming events",
    "Kurs, workshops og sosiale dansekvelder i Bergen. Følg oss på Facebook for siste nytt og oppdateringer.":
        "Classes, workshops and social dance nights in Bergen. Follow us on Facebook for the latest news and updates.",
    "Se på Facebook ↗": "View on Facebook ↗",
    "Lys, rytme og ekte øyeblikk": "Light, rhythm and real moments",
    "Inne i House of Mambo": "Inside House of Mambo",
    "Et lite glimt av menneskene, musikken og energien som fyller dansegulvet. Dra på mobil eller bruk pilene for å utforske.":
        "A glimpse of the people, music and energy filling the dance floor. Swipe on mobile or use the arrows to explore.",
    Kalender: "Calendar",
    "Se kommende treninger og arrangementer. Kalenderen oppdateres fra House of Mambos Google Kalender.":
        "See upcoming classes and events. The calendar is updated from House of Mambo's Google Calendar.",
    "Oktober 2026": "October 2026",
    Forhåndsvisning: "Preview",
    "Åpne Google Kalender ↗": "Open Google Calendar ↗",
    "Dette er en visuell forhåndsvisning. Den erstattes automatisk av den oppdaterte Google Kalenderen når kalenderlenken kobles til.":
        "This is a visual preview. It is automatically replaced by the updated Google Calendar when the calendar link is connected.",
    Kurspåmelding: "Class registration",
    "Klar for å bli med?": "Ready to join?",
    "Velg kurs og send inn opplysningene dine på vår egen påmeldingsside. Skjemaet er klart for Google Sheets-tilkoblingen når du ønsker å legge den til.":
        "Choose a class and submit your details on our registration page. The form is ready for the Google Sheets connection whenever you want to add it.",
    "Åpne påmelding →": "Open registration →",
    "Mer enn ukentlige kurs": "More than weekly classes",
    "Dansemiljøet i Bergen": "Bergen's dance community",
    "House of Mambo skaper et inkluderende og inspirerende miljø for Salsa On2 og mambo i Bergen. Faste kurs suppleres med helgeworkshops, sosialdanser og showteam der dansere kan fortsette å utvikle seg sammen.":
        "House of Mambo creates an inclusive and inspiring community for Salsa On2 and mambo in Bergen. Weekly classes are complemented by weekend workshops, social dances and a show team where dancers can keep growing together.",
    "Kurs tirsdag og onsdag": "Classes Tuesday and Wednesday",
    Kapasitet: "Capacity",
    "180 gjester": "180 guests",
    "Ukentlige On2-kurs": "Weekly On2 classes",
    "Nybegynner, litt øvet, viderekommen og soloarbeid på åpent nivå.":
        "Beginner, improver, advanced and open-level solo work.",
    "Workshops og sosialdans": "Workshops and social dancing",
    "Helgetrening, sosialdanser og showteam.":
        "Weekend training, social dances and show team.",
    "♙ Kurspåmelding": "♙ Class registration",
    "Ett komplett 8-ukerskurs": "One complete 8-week class",
    "/kurs": "/class",
    "690 kr for heltidsstudenter": "NOK 690 for full-time students",
    "Pakkerabatt ved påmelding til flere kurs":
        "Package discount when registering for multiple classes",
    "Registreringsavgift på 50 kr er inkludert i kursprisen":
        "A NOK 50 registration fee is included in the class price",
    "Åpne påmelding": "Open registration",
    "Aktuell kursinformasjon": "Current class information",
    "Høsten 2026": "Autumn 2026",
    Kursperiode: "Class period",
    "Mandag 24. august — onsdag 28. oktober":
        "Monday 24 August — Wednesday 28 October",
    "Før timen": "Before class",
    "Møt opp 5 minutter før timen starter.":
        "Please arrive 5 minutes before class starts.",
    Velkommen: "Welcome",
    "Mamboen lever. Kom og lær, dans og bygg Bergens On2-miljø sammen med oss.":
        "Mambo lives. Come learn, dance and build Bergen's On2 community with us.",
    "Hold kontakten": "Stay connected",
    "Følg kurs, workshops og sosialdans":
        "Follow classes, workshops and social dancing",
    "Følg House of Mambo for påmeldinger, ukentlige kursoppdateringer, workshops, sosialdanser og høydepunkter fra fellesskapet.":
        "Follow House of Mambo for registration, weekly class updates, workshops, social dances and community highlights.",
    "Et inkluderende og inspirerende miljø for Salsa On2, mambo, workshops, sosialdans og showteam i Bergen.":
        "An inclusive and inspiring community for Salsa On2, mambo, workshops, social dancing and show team in Bergen.",
    "Mambo On2 Partnerwork": "Mambo On2 Partnerwork",
    "Fotarbeid - musikalitet": "Footwork and musicality",
    Kroppsbevegelse: "Body movement",
    "Faste kurs": "Weekly classes",
    Helgeworkshops: "Weekend workshops",
    Sosialdanser: "Social dances",
    Showteam: "Show team",
    "Man–ons: ukentlige kurs": "Mon–Wed: weekly classes",
    "Alle rettigheter forbeholdt.": "All rights reserved.",
    Personvern: "Privacy",
    "Bergen, Norge · Salsa On2 · Kurs · Workshops · Fellesskap":
        "Bergen, Norway · Salsa On2 · Classes · Workshops · Community",
    "← Forsiden": "← Home",
    "Velg kurset som passer nivået ditt, og fortell litt om danseerfaringen din. Vi kontakter deg om ledige plasser og veien videre.":
        "Choose the class that suits your level and tell us a little about your dance experience. We will contact you about available places and next steps.",
    "Informasjon om påmelding": "Registration information",
    "Ett komplett 8-ukerskurs koster 990 kr.":
        "One complete 8-week class costs NOK 990.",
    "Prisen for heltidsstudenter er 690 kr.":
        "The price for full-time students is NOK 690.",
    "Partnerwork-kurs kan bruke ventelister for å balansere førere og følgere.":
        "Partnerwork classes may use waiting lists to balance leads and follows.",
    "Plassen din er bekreftet når du har fått svar fra House of Mambo.":
        "Your place is confirmed when you receive a reply from House of Mambo.",
    "Trenger du hjelp til å velge?": "Need help choosing?",
    "Velg kurset som virker nærmest nivået ditt, og bruk meldingsfeltet til å fortelle hva du har danset før. Vi hjelper deg gjerne med å finne riktig nivå.":
        "Choose the class closest to your level and use the message field to tell us what you have danced before. We are happy to help you find the right level.",
    "Fullt navn": "Full name",
    "Ditt fulle navn": "Your full name",
    "E-postadresse": "Email address",
    Telefonnummer: "Phone number",
    "Velg et kurs": "Choose a class",
    Salsaerfaring: "Salsa experience",
    "Velg erfaring": "Choose experience",
    "Jeg er helt ny": "I am completely new",
    "Mindre enn 3 måneder": "Less than 3 months",
    "3–12 måneder": "3–12 months",
    "1–3 år": "1–3 years",
    "Mer enn 3 år": "More than 3 years",
    "Foretrukket danserolle": "Preferred dance role",
    "Velg en rolle": "Choose a role",
    Fører: "Lead",
    Følger: "Follow",
    Begge: "Both",
    "Ikke sikker ennå": "Not sure yet",
    "Er det noe vi bør vite?": "Anything we should know?",
    "Spørsmål, partnerinformasjon, behov for tilrettelegging eller noe annet du vil dele.":
        "Questions, partner information, accessibility needs or anything else you would like to share.",
    "Jeg samtykker til at House of Mambo kan bruke disse opplysningene til å kontakte meg om kurs og påmelding. Les vår":
        "I consent to House of Mambo using this information to contact me about classes and registration. Read our",
    personvernerklæring: "privacy policy",
    "Plassen din er først bekreftet når du har fått svar fra House of Mambo.":
        "Your place is only confirmed once you have received a reply from House of Mambo.",
    "Rett opp de markerte feltene.": "Please correct the highlighted fields.",
    "Skriv inn fullt navn.": "Enter your full name.",
    "Skriv inn e-postadressen din.": "Enter your email address.",
    "Skriv inn en gyldig e-postadresse.": "Enter a valid email address.",
    "Skriv inn telefonnummeret ditt.": "Enter your phone number.",
    "Velg et kurs.": "Choose a class.",
    "Velg erfaringsnivå.": "Choose an experience level.",
    "Velg foretrukket danserolle.": "Choose a preferred dance role.",
    "Du må samtykke før du kan melde interesse.":
        "You must consent before registering interest.",
    "Kursskjemaet er klart. Ingen opplysninger ble sendt fordi tilkoblingen til Google Skjema legges til senere.":
        "The class form is ready. No information was sent because the Google Forms connection will be added later.",
    "House of Mambo arrangementskalender": "House of Mambo events calendar",
    "Forhåndsvisning av kurskalender for oktober 2026":
        "Preview of the class calendar for October 2026",
    "Salsadansere på House of Mambo": "Salsa dancers at House of Mambo",
    "Dansegulvet og loungen på House of Mambo":
        "The dance floor and lounge at House of Mambo",
    "Ballsalen og loungen på House of Mambo":
        "The ballroom and lounge at House of Mambo",
};

const attributes = ["placeholder", "aria-label", "alt", "title"] as const;
const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Record<string, string>>();

function translated(value: string) {
    const leading = value.match(/^\s*/)?.[0] ?? "";
    const trailing = value.match(/\s*$/)?.[0] ?? "";
    const core = value.trim();
    return translations[core]
        ? `${leading}${translations[core]}${trailing}`
        : value;
}

function translateTree(root: ParentNode) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode() as Text | null;
    while (node) {
        const parent = node.parentElement;
        if (parent && !parent.closest("[data-no-translate]")) {
            if (!originalText.has(node))
                originalText.set(node, node.nodeValue ?? "");
            node.nodeValue = translated(
                originalText.get(node) ?? node.nodeValue ?? "",
            );
        }
        node = walker.nextNode() as Text | null;
    }

    const elements =
        root instanceof Element
            ? [root, ...Array.from(root.querySelectorAll("*"))]
            : Array.from(root.querySelectorAll("*"));
    for (const element of elements) {
        if (element.closest("[data-no-translate]")) continue;
        const saved = originalAttributes.get(element) ?? {};
        for (const attribute of attributes) {
            const value = element.getAttribute(attribute);
            if (!value) continue;
            if (!(attribute in saved)) saved[attribute] = value;
            element.setAttribute(
                attribute,
                translations[saved[attribute]] ?? saved[attribute],
            );
        }
        originalAttributes.set(element, saved);
    }
}

function restoreTree(root: ParentNode) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode() as Text | null;
    while (node) {
        const original = originalText.get(node);
        if (original !== undefined) node.nodeValue = original;
        node = walker.nextNode() as Text | null;
    }

    const elements =
        root instanceof Element
            ? [root, ...Array.from(root.querySelectorAll("*"))]
            : Array.from(root.querySelectorAll("*"));
    for (const element of elements) {
        const saved = originalAttributes.get(element);
        if (!saved) continue;
        for (const [attribute, value] of Object.entries(saved))
            element.setAttribute(attribute, value);
    }
}

export default function LanguageSwitcher() {
    const [language, setLanguage] = useState<Language>(() =>
        typeof window !== "undefined" &&
        window.localStorage.getItem("house-of-mambo-language") === "en"
            ? "en"
            : "no",
    );
    const [host, setHost] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const headerContainer = document.querySelector(
            "header .site-container",
        );
        if (headerContainer) {
            const portalHost = document.createElement("div");
            portalHost.setAttribute("data-no-translate", "true");
            portalHost.className = "shrink-0";
            const lastChild = headerContainer.lastElementChild;
            if (lastChild) headerContainer.insertBefore(portalHost, lastChild);
            else headerContainer.appendChild(portalHost);
            // The portal target lives outside React, so it can only be set after mount.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHost(portalHost);
            return () => portalHost.remove();
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language === "en" ? "en" : "no";
        window.localStorage.setItem("house-of-mambo-language", language);

        if (language === "en") translateTree(document.body);
        else restoreTree(document.body);

        if (language !== "en") return;
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const added of Array.from(mutation.addedNodes)) {
                    if (added instanceof Text) {
                        const parent = added.parentElement;
                        if (parent && !parent.closest("[data-no-translate]")) {
                            if (!originalText.has(added))
                                originalText.set(added, added.nodeValue ?? "");
                            added.nodeValue = translated(
                                originalText.get(added) ??
                                    added.nodeValue ??
                                    "",
                            );
                        }
                    } else if (added instanceof Element) {
                        translateTree(added);
                    }
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, [language]);

    const switcher = useMemo(
        () => (
            <div
                className='inline-flex overflow-hidden rounded-full border border-white/15 bg-black/35 p-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] backdrop-blur-sm'
                aria-label='Language / Språk'
            >
                <button
                    type='button'
                    onClick={() => setLanguage("no")}
                    aria-pressed={language === "no"}
                    className={`rounded-full px-2.5 py-1.5 transition-colors ${language === "no" ? "bg-gold-main text-background" : "text-text-main/70 hover:text-gold-champagne"}`}
                >
                    NO
                </button>
                <button
                    type='button'
                    onClick={() => setLanguage("en")}
                    aria-pressed={language === "en"}
                    className={`rounded-full px-2.5 py-1.5 transition-colors ${language === "en" ? "bg-gold-main text-background" : "text-text-main/70 hover:text-gold-champagne"}`}
                >
                    EN
                </button>
            </div>
        ),
        [language],
    );

    return host ? createPortal(switcher, host) : null;
}
