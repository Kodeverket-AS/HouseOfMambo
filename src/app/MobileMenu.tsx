"use client";

import { useEffect, useRef, useState } from "react";

type MenuLink = { label: string; href: string };

export default function MobileMenu({ navigation, socialLinks }: { navigation: MenuLink[]; socialLinks: MenuLink[] }) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        }

        function handlePointerDown(event: PointerEvent) {
            if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [open]);

    return (
        <div ref={menuRef} className="relative l:hidden">
            <button ref={buttonRef} type="button" className="grid size-11 place-items-center border border-white/10 bg-surface text-gold-main" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((current) => !current)}>
                <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /></span>
            </button>
            {open && (
                <nav id="mobile-navigation" className="fixed inset-x-4 top-[5.25rem] z-50 flex max-h-[calc(100dvh-6.25rem)] flex-col overflow-y-auto border border-white/10 bg-surface p-2 shadow-2xl m:absolute m:inset-x-auto m:right-0 m:top-14 m:w-72" aria-label="Mobile navigation">
                    {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/6 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-text-main/75 last:border-0 hover:bg-white/5 hover:text-gold-main">{item.label}</a>)}
                    <a href="/registration" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">Course sign-up</a>
                    <div className="mt-2 grid grid-cols-2 gap-2">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center justify-center border border-white/10 px-3 py-3 text-center text-sm font-semibold uppercase tracking-[0.09em] text-gold-champagne">{social.label}</a>)}</div>
                </nav>
            )}
        </div>
    );
}
