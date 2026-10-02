import type { Metadata } from "next";
import { languageAlternates, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LanguageSwitcher from "../LanguageSwitcher";
import { getLocale } from "../locale";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
    const lang = await getLocale(params);
    const { meta } = (await getDictionary(lang)).privacy;
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `/${lang}/privacy`, languages: languageAlternates("/privacy") },
        openGraph: { title: meta.title, description: meta.description, locale: ogLocale[lang] },
    };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
    const lang = await getLocale(params);
    const { common, privacy: t } = await getDictionary(lang);

    return (
        <main id="main-content" className="min-h-screen bg-background" tabIndex={-1}>
            <div className="site-container max-w-3xl py-12 m:py-20">
                <div className="flex items-center justify-between gap-4">
                    <a href={`/${lang}/registration`} className="nav-link">{t.back}</a>
                    <LanguageSwitcher current={lang} label={common.language.label} switchTo={common.language.switchTo} names={common.language.names} />
                </div>
                <p className="section-eyebrow mt-12">{t.eyebrow}</p>
                <h1 className="title-primary mt-3 text-[clamp(2.8rem,12vw,5.5rem)] leading-none">{t.title}</h1>
                <div className="mt-8 space-y-7 text-base leading-7 text-text-main/75">
                    {t.sections.map((section) => <section key={section.title}><h2 className="card-title">{section.title}</h2><p className="mt-3">{section.text}</p></section>)}
                </div>
            </div>
        </main>
    );
}
