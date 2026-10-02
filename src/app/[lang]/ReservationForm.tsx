"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ReservationForm({ t, privacyHref }: { t: Dictionary["form"]; privacyHref: string }) {
    const [showPreviewNotice, setShowPreviewNotice] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const nextErrors: Record<string, string> = {};

        if (!String(data.get("fullName") ?? "").trim()) nextErrors.fullName = t.errors.fullName;
        const email = String(data.get("email") ?? "").trim();
        if (!email) nextErrors.email = t.errors.email;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t.errors.emailInvalid;
        if (!String(data.get("phone") ?? "").trim()) nextErrors.phone = t.errors.phone;
        if (!data.get("course")) nextErrors.course = t.errors.course;
        if (!data.get("experience")) nextErrors.experience = t.errors.experience;
        if (!data.get("danceRole")) nextErrors.danceRole = t.errors.danceRole;
        if (!data.get("consent")) nextErrors.consent = t.errors.consent;

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
            {Object.keys(errors).length > 0 && <div className="mb-6 border-l-4 border-mambo-red bg-mambo-red/10 p-4 text-base leading-7 text-text-main" role="alert"><strong>{t.errors.summary}</strong></div>}
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="fullName">{t.labels.fullName}</label>
                    <input className="form-control" id="fullName" name="fullName" type="text" autoComplete="name" required placeholder={t.placeholders.fullName} {...errorProps("fullName")} />
                    {fieldError("fullName")}
                </div>

                <div>
                    <label className="form-label" htmlFor="registrationEmail">{t.labels.email}</label>
                    <input className="form-control" id="registrationEmail" name="email" type="email" autoComplete="email" required placeholder={t.placeholders.email} {...errorProps("email")} />
                    {fieldError("email")}
                </div>

                <div>
                    <label className="form-label" htmlFor="phone">{t.labels.phone}</label>
                    <input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required placeholder={t.placeholders.phone} {...errorProps("phone")} />
                    {fieldError("phone")}
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="course">{t.labels.course}</label>
                    <select className="form-control" id="course" name="course" required defaultValue="" {...errorProps("course")}>
                        <option value="" disabled>{t.placeholders.course}</option>
                        {t.courses.map((course) => <option key={course} value={course}>{course}</option>)}
                    </select>
                    {fieldError("course")}
                </div>

                <div>
                    <label className="form-label" htmlFor="experience">{t.labels.experience}</label>
                    <select className="form-control" id="experience" name="experience" required defaultValue="" {...errorProps("experience")}>
                        <option value="" disabled>{t.placeholders.experience}</option>
                        {t.experienceLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                    </select>
                    {fieldError("experience")}
                </div>

                <div>
                    <label className="form-label" htmlFor="danceRole">{t.labels.danceRole}</label>
                    <select className="form-control" id="danceRole" name="danceRole" required defaultValue="" {...errorProps("danceRole")}>
                        <option value="" disabled>{t.placeholders.danceRole}</option>
                        {t.danceRoles.map((role) => <option key={role} value={role}>{role}</option>)}
                    </select>
                    {fieldError("danceRole")}
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="message">{t.labels.message}</label>
                    <textarea className="form-control min-h-32 resize-y" id="message" name="message" placeholder={t.placeholders.message} />
                </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-base leading-7 text-text-main/70">
                <input className="mt-1 size-5 shrink-0 accent-gold-main" name="consent" type="checkbox" required {...errorProps("consent")} />
                <span>{t.consentBefore} <a href={privacyHref} className="text-gold-champagne underline decoration-gold-main/60 underline-offset-4">{t.consentLink}</a>.</span>
            </label>
            {fieldError("consent")}

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="btn-primary min-h-12" type="submit">{t.submit}</button>
                <p className="text-sm leading-6 text-text-main/60">{t.confirmationNote}</p>
            </div>

            {showPreviewNotice && (
                <div className="mt-6 border border-gold-main/30 bg-gold-main/8 p-4 text-base leading-7 text-gold-champagne" role="status" aria-live="polite">
                    {t.previewNotice}
                </div>
            )}
        </form>
    );
}
