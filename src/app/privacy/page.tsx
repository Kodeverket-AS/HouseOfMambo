import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personvern | House of Mambo Bergen",
    description: "Slik behandler House of Mambo Bergen opplysninger ved kurspåmelding.",
};

export default function PrivacyPage() {
    return (
        <main id="main-content" className="min-h-screen bg-background" tabIndex={-1}>
            <div className="site-container max-w-3xl py-12 m:py-20">
                <a href="/registration" className="nav-link">← Kurspåmelding</a>
                <p className="section-eyebrow mt-12">House of Mambo Bergen</p>
                <h1 className="title-primary mt-3 text-[clamp(2.8rem,12vw,5.5rem)] leading-none">Personvern</h1>
                <div className="mt-8 space-y-7 text-base leading-7 text-text-main/75">
                    <section><h2 className="card-title">Opplysninger vi samler inn</h2><p className="mt-3">Når du melder interesse, samler vi inn kontaktopplysninger, ønsket kurs, danseerfaring, foretrukket danserolle og en eventuell melding du skriver.</p></section>
                    <section><h2 className="card-title">Slik bruker vi opplysningene</h2><p className="mt-3">Vi bruker opplysningene bare for å svare på henvendelsen, hjelpe deg å velge riktig kurs, administrere ledige plasser og kontakte deg om påmeldingen.</p></section>
                    <section><h2 className="card-title">Lagring og sletting</h2><p className="mt-3">Påmeldingsopplysninger lagres i den tilkoblede Google-tjenesten når skjematilkoblingen aktiveres. Kontakt House of Mambo hvis du vil se, rette eller slette opplysninger du har sendt inn.</p></section>
                    <section><h2 className="card-title">Før skjemaet publiseres</h2><p className="mt-3">Påmeldingsskjemaet er foreløpig i forhåndsvisning og sender eller lagrer ikke opplysninger. Denne siden bør oppdateres med kontaktadresse og endelig lagringstid før offentlige innsendinger aktiveres.</p></section>
                </div>
            </div>
        </main>
    );
}
