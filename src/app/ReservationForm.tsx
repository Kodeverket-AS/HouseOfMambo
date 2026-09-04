"use client";

import { FormEvent, useState } from "react";

const courses = [
    "Mambo Partnerwork — Improver",
    "Mambo Partnerwork — Intermediate",
    "Footwork, Musicality & Body Movement",
    "Mambo Partnerwork — Beginner",
];

const experienceLevels = [
    "I am completely new",
    "Less than 3 months",
    "3–12 months",
    "1–3 years",
    "More than 3 years",
];

const danceRoles = ["Leader", "Follower", "Both", "Not sure yet"];

export default function ReservationForm() {
    const [showPreviewNotice, setShowPreviewNotice] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setShowPreviewNotice(true);
    }

    return (
        <form onSubmit={handleSubmit} className="border border-white/8 bg-[#202020] p-5 m:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="fullName">Full name</label>
                    <input className="form-control" id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="Your full name" />
                </div>

                <div>
                    <label className="form-label" htmlFor="registrationEmail">Email address</label>
                    <input className="form-control" id="registrationEmail" name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
                </div>

                <div>
                    <label className="form-label" htmlFor="phone">Phone number</label>
                    <input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+47 000 00 000" />
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="course">Course</label>
                    <select className="form-control" id="course" name="course" required defaultValue="">
                        <option value="" disabled>Select a course</option>
                        {courses.map((course) => <option key={course} value={course}>{course}</option>)}
                    </select>
                </div>

                <div>
                    <label className="form-label" htmlFor="experience">Salsa experience</label>
                    <select className="form-control" id="experience" name="experience" required defaultValue="">
                        <option value="" disabled>Select your experience</option>
                        {experienceLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                    </select>
                </div>

                <div>
                    <label className="form-label" htmlFor="danceRole">Preferred dance role</label>
                    <select className="form-control" id="danceRole" name="danceRole" required defaultValue="">
                        <option value="" disabled>Select a role</option>
                        {danceRoles.map((role) => <option key={role} value={role}>{role}</option>)}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="message">Anything we should know?</label>
                    <textarea className="form-control min-h-32 resize-y" id="message" name="message" placeholder="Questions, partner information, accessibility needs, or anything else you would like to share." />
                </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-base leading-7 text-text-main/70">
                <input className="mt-1 size-4 shrink-0 accent-gold-main" name="consent" type="checkbox" required />
                <span>I agree that House of Mambo may use these details to contact me about courses and registration.</span>
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="btn-primary min-h-12" type="submit">Register interest</button>
                <p className="text-sm leading-6 text-text-main/60">Your place is confirmed only after you receive a reply from House of Mambo.</p>
            </div>

            {showPreviewNotice && (
                <div className="mt-6 border border-gold-main/30 bg-gold-main/8 p-4 text-base leading-7 text-gold-champagne" role="status" aria-live="polite">
                    The course form is ready. No information was sent because the Google Form connection will be added later.
                </div>
            )}
        </form>
    );
}
