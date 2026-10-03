"use client";

import { FormEvent, useState } from "react";

const courses = [
    "Mambo Partnerwork — Litt øvet",
    "Mambo Partnerwork — Viderekommen",
    "Fotarbeid, musikalitet og kroppsbevegelse",
    "Mambo Partnerwork — Nybegynner",
];

const experienceLevels = [
    "Jeg er helt ny",
    "Mindre enn 3 måneder",
    "3–12 måneder",
    "1–3 år",
    "Mer enn 3 år",
];

const danceRoles = ["Fører", "Følger", "Begge", "Ikke sikker ennå"];

export default function ReservationForm() {
    const [showPreviewNotice, setShowPreviewNotice] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const nextErrors: Record<string, string> = {};

        if (!String(data.get("fullName") ?? "").trim()) nextErrors.fullName = "Skriv inn fullt navn.";
        const email = String(data.get("email") ?? "").trim();
        if (!email) nextErrors.email = "Skriv inn e-postadressen din.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Skriv inn en gyldig e-postadresse.";
        if (!String(data.get("phone") ?? "").trim()) nextErrors.phone = "Skriv inn telefonnummeret ditt.";
        if (!data.get("course")) nextErrors.course = "Velg et kurs.";
        if (!data.get("experience")) nextErrors.experience = "Velg erfaringsnivå.";
        if (!data.get("danceRole")) nextErrors.danceRole = "Velg foretrukket danserolle.";
        if (!data.get("consent")) nextErrors.consent = "Du må samtykke før du kan melde interesse.";

        setErrors(nextErrors);
        setShowPreviewNotice(false);
        if (Object.keys(nextErrors).length > 0) {
            requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
            return;
        }
        setShowPreviewNotice(true);
    }

    const errorProps = (name: string) => ({
        "aria-invalid": errors[name] ? true as const : undefined,
        "aria-describedby": errors[name] ? `${name}-error` : undefined,
    });

    const fieldError = (name: string) => errors[name] ? <p id={`${name}-error`} className="form-error">{errors[name]}</p> : null;

    return (
        <form onSubmit={handleSubmit} noValidate className="border border-white/8 bg-[#202020] p-5 m:p-8">
            {Object.keys(errors).length > 0 && <div className="mb-6 border-l-4 border-mambo-red bg-mambo-red/10 p-4 text-base leading-7 text-text-main" role="alert"><strong>Rett opp de markerte feltene.</strong></div>}
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="fullName">Fullt navn</label>
                    <input className="form-control" id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="Ditt fulle navn" {...errorProps("fullName")} />
                    {fieldError("fullName")}
                </div>

                <div>
                    <label className="form-label" htmlFor="registrationEmail">E-postadresse</label>
                    <input className="form-control" id="registrationEmail" name="email" type="email" autoComplete="email" required placeholder="name@example.com" {...errorProps("email")} />
                    {fieldError("email")}
                </div>

                <div>
                    <label className="form-label" htmlFor="phone">Telefonnummer</label>
                    <input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+47 000 00 000" {...errorProps("phone")} />
                    {fieldError("phone")}
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="course">Kurs</label>
                    <select className="form-control" id="course" name="course" required defaultValue="" {...errorProps("course")}>
                        <option value="" disabled>Velg et kurs</option>
                        {courses.map((course) => <option key={course} value={course}>{course}</option>)}
                    </select>
                    {fieldError("course")}
                </div>

                <div>
                    <label className="form-label" htmlFor="experience">Salsaerfaring</label>
                    <select className="form-control" id="experience" name="experience" required defaultValue="" {...errorProps("experience")}>
                        <option value="" disabled>Velg erfaring</option>
                        {experienceLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                    </select>
                    {fieldError("experience")}
                </div>

                <div>
                    <label className="form-label" htmlFor="danceRole">Foretrukket danserolle</label>
                    <select className="form-control" id="danceRole" name="danceRole" required defaultValue="" {...errorProps("danceRole")}>
                        <option value="" disabled>Velg en rolle</option>
                        {danceRoles.map((role) => <option key={role} value={role}>{role}</option>)}
                    </select>
                    {fieldError("danceRole")}
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="message">Er det noe vi bør vite?</label>
                    <textarea className="form-control min-h-32 resize-y" id="message" name="message" placeholder="Spørsmål, partnerinformasjon, behov for tilrettelegging eller noe annet du vil dele." />
                </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-base leading-7 text-text-main/70">
                <input className="mt-1 size-5 shrink-0 accent-gold-main" name="consent" type="checkbox" required {...errorProps("consent")} />
                <span>Jeg samtykker til at House of Mambo kan bruke disse opplysningene til å kontakte meg om kurs og påmelding. Les vår <a href="/privacy" className="text-gold-champagne underline decoration-gold-main/60 underline-offset-4">personvernerklæring</a>.</span>
            </label>
            {fieldError("consent")}

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="btn-primary min-h-12" type="submit">Meld interesse</button>
                <p className="text-sm leading-6 text-text-main/70">Plassen din er først bekreftet når du har fått svar fra House of Mambo.</p>
            </div>

            {showPreviewNotice && (
                <div className="mt-6 border border-gold-main/30 bg-gold-main/8 p-4 text-base leading-7 text-gold-champagne" role="status" aria-live="polite">
                    Kursskjemaet er klart. Ingen opplysninger ble sendt fordi tilkoblingen til Google Skjema legges til senere.
                </div>
            )}
        </form>
    );
}
