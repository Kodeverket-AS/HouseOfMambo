export const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/p/House-of-Mambo-Bergen-61592891530613/", handle: "House of Mambo Bergen" },
    { label: "Instagram", href: "https://www.instagram.com/houseofmambo_bergen/", handle: "@houseofmambo_bergen" },
];

export const instagram = socialLinks[1];

export function SocialIcon({ platform, className = "size-4" }: { platform: string; className?: string }) {
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
