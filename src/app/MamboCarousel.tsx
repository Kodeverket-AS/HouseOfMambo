"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
    { src: "/gallery/forsidebilde-alt-2.webp", alt: "Et par danser salsa sammen på House of Mambo", label: "Dansen" },
    { src: "/gallery/forsidebilde-alt-3.webp", alt: "DJ spiller for dansegulvet på House of Mambo", label: "Musikken" },
    { src: "/gallery/kulturhuset-10.webp", alt: "To dansere deler et smil på dansegulvet", label: "Gleden" },
    { src: "/gallery/kulturhuset-12.webp", alt: "Nærbilde av salsa partnerwork", label: "Kontakten" },
    { src: "/gallery/kulturhuset-13.webp", alt: "Dansere i bevegelse under en sosialdans", label: "Bevegelsen" },
    { src: "/gallery/kulturhuset-16.webp", alt: "Et dansepar på House of Mambos dansegulv", label: "Fellesskapet" },
    { src: "/gallery/kulturhuset-17.webp", alt: "Dansere nyter musikken sammen", label: "Øyeblikkene" },
    { src: "/gallery/kulturhuset-5.webp", alt: "Venner samlet på en House of Mambo-kveld", label: "Menneskene" },
    { src: "/gallery/kulturhuset-6.webp", alt: "DJ løfter armene bak miksebordet", label: "Energien" },
];

export default function MamboCarousel() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStart = useRef<number | null>(null);

    const show = useCallback((index: number) => {
        setActive((index + slides.length) % slides.length);
    }, []);

    const previous = useCallback(() => setActive((current) => (current - 1 + slides.length) % slides.length), []);
    const next = useCallback(() => setActive((current) => (current + 1) % slides.length), []);

    useEffect(() => {
        if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = window.setInterval(next, 6000);
        return () => window.clearInterval(timer);
    }, [isPaused, next]);

    return (
        <div
            className="mambo-carousel"
            role="region"
            aria-roledescription="bildekarusell"
            aria-label="Øyeblikk fra House of Mambo"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
            }}
            onKeyDown={(event) => {
                if (event.key === "ArrowLeft") previous();
                if (event.key === "ArrowRight") next();
            }}
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => {
                if (touchStart.current === null) return;
                const distance = event.changedTouches[0].clientX - touchStart.current;
                if (Math.abs(distance) > 45) {
                    if (distance > 0) previous();
                    else next();
                }
                touchStart.current = null;
            }}
        >
            <div className="mambo-carousel-stage">
                {slides.map((slide, index) => {
                    const offset = (index - active + slides.length) % slides.length;
                    const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === slides.length - 1 ? "previous" : "hidden";
                    return (
                        <figure key={slide.src} className={`mambo-slide mambo-slide--${position}`} aria-hidden={position !== "active"}>
                            <Image src={slide.src} alt={position === "active" ? slide.alt : ""} fill quality={75} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1199px) 72vw, 760px" className="object-cover" />
                            <div className="mambo-slide-shade" aria-hidden="true" />
                            <figcaption>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <strong>{slide.label}</strong>
                                <small>House of Mambo · Bergen</small>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>

            <div className="mambo-carousel-controls">
                <div className="mambo-carousel-arrows">
                    <button type="button" onClick={previous} aria-label="Forrige bilde">←</button>
                    <button type="button" onClick={next} aria-label="Neste bilde">→</button>
                </div>
                <div className="mambo-carousel-dots" aria-label="Velg bilde">
                    {slides.map((slide, index) => (
                        <button key={slide.src} type="button" onClick={() => show(index)} className={index === active ? "is-active" : ""} aria-label={`Vis bilde ${index + 1}: ${slide.label}`} aria-current={index === active ? "true" : undefined} />
                    ))}
                </div>
                <button type="button" className="mambo-carousel-pause" onClick={() => setIsPaused((paused) => !paused)} aria-pressed={isPaused}>
                    {isPaused ? "Spill av" : "Pause"}
                </button>
            </div>
            <p className="sr-only" aria-live="polite">Bilde {active + 1} av {slides.length}: {slides[active].label}</p>
        </div>
    );
}
