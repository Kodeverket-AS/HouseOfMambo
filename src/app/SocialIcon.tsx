type SocialIconProps = {
    platform: string;
    className?: string;
};

export default function SocialIcon({ platform, className = "size-5" }: SocialIconProps) {
    if (platform === "Facebook") {
        return (
            <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path
                    fill="#fff"
                    d="M13.55 20v-7h2.35l.35-2.73h-2.7V8.53c0-.79.22-1.33 1.36-1.33h1.45V4.76a19.4 19.4 0 0 0-2.12-.11c-2.1 0-3.54 1.28-3.54 3.64v1.98H8.32V13h2.38v7h2.85Z"
                />
            </svg>
        );
    }

    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
                <linearGradient id="instagram-gradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FEDA75" />
                    <stop offset="0.28" stopColor="#FA7E1E" />
                    <stop offset="0.52" stopColor="#D62976" />
                    <stop offset="0.75" stopColor="#962FBF" />
                    <stop offset="1" stopColor="#4F5BD5" />
                </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6.5" fill="url(#instagram-gradient)" />
            <rect x="5.35" y="5.35" width="13.3" height="13.3" rx="4.15" fill="none" stroke="#fff" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3.15" fill="none" stroke="#fff" strokeWidth="1.8" />
            <circle cx="16.75" cy="7.45" r="1.05" fill="#fff" />
        </svg>
    );
}