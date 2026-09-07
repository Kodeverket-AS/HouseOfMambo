import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Information | House of Mambo Bergen",
    description: "How House of Mambo Bergen handles course registration information.",
};

export default function PrivacyPage() {
    return (
        <main id="main-content" className="min-h-screen bg-background" tabIndex={-1}>
            <div className="site-container max-w-3xl py-12 m:py-20">
                <a href="/registration" className="nav-link">← Course registration</a>
                <p className="section-eyebrow mt-12">House of Mambo Bergen</p>
                <h1 className="title-primary mt-3 text-[clamp(2.8rem,12vw,5.5rem)] leading-none">Privacy information</h1>
                <div className="mt-8 space-y-7 text-base leading-7 text-text-main/75">
                    <section><h2 className="card-title">Information we collect</h2><p className="mt-3">When you register your interest, we collect the contact, course, dance-experience, dance-role, and optional message information you provide.</p></section>
                    <section><h2 className="card-title">How it is used</h2><p className="mt-3">We use this information only to answer your enquiry, help select the appropriate course, manage course availability, and contact you about your registration.</p></section>
                    <section><h2 className="card-title">Storage and deletion</h2><p className="mt-3">Registration information will be stored in the connected Google service once the form connection is activated. Contact House of Mambo if you want to access, correct, or delete information you submitted.</p></section>
                    <section><h2 className="card-title">Before the form launches</h2><p className="mt-3">The registration form is currently in preview mode and does not send or store information. This page should be updated with a contact email and final retention period before public submissions are enabled.</p></section>
                </div>
            </div>
        </main>
    );
}
