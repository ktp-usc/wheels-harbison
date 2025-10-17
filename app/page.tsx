"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Wheels1 from "@/public/Wheels1.png";
import Wheels2 from "@/public/Wheels2.png";
import Wheels3 from "@/public/Wheels3.png";
import Wheels4 from "@/public/Wheels4.png";
import Wheels5 from "@/public/Wheels5.jpg";
import Wheels6 from "@/public/Wheels6.jpg";
import Wheels7 from "@/public/Wheels7.png";
import AboutSections from "@/components/AboutSections";

type Props = {
    images?: (StaticImageData | string)[];
    width?: number;
    height?: number;
    autoplay?: boolean;
    interval?: number;
    showDots?: boolean;
    showArrows?: boolean;
    ariaLabel?: string;
};

export default function Slideshow({
                                      images = [Wheels1, Wheels2, Wheels3, Wheels4, Wheels5, Wheels6, Wheels7],
                                      width = 1200,
                                      height = 700,
                                      autoplay = true,
                                      interval = 4000,
                                      showDots = true,
                                      showArrows = true,
                                      ariaLabel = "Image slideshow",
                                  }: Props) {
    const slides = useMemo(() => images.filter(Boolean), [images]);
    const total = slides.length;
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // wrap helper that handles negative indices too
    const wrap = useCallback(
        (i: number) => ((i % total) + total) % total,
        [total]
    );

    const next = useCallback(() => {
        if (!total) return;
        setIndex((i) => wrap(i + 1));
    }, [wrap, total]);

    const prev = useCallback(() => {
        if (!total) return;
        setIndex((i) => wrap(i - 1));
    }, [wrap, total]);

    const goTo = useCallback(
        (i: number) => total && setIndex(wrap(i)),
        [wrap, total]
    );

    // Reduced motion
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useEffect(() => {
        if (!autoplay || prefersReducedMotion || !total) return;
        timeoutRef.current = window.setTimeout(next, interval);
        return () => {
            if (timeoutRef.current != null) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [index, autoplay, interval, prefersReducedMotion, next, total]);

    // Keyboard controls (focus the region to use)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        el.addEventListener("keydown", handler);
        return () => el.removeEventListener("keydown", handler);
    }, [next, prev]);

    // Optional: wheel (hold Shift and scroll)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onWheel = (e: WheelEvent) => {
            if (!e.shiftKey) return;
            e.preventDefault();
            if (e.deltaY > 0) next();
            else if (e.deltaY < 0) prev();
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel as any);
    }, [next, prev]);

    // Drag / swipe
    const drag = useRef({ startX: 0, deltaX: 0, active: false });

    const onPointerDown = (e: React.PointerEvent) => {
        drag.current = { startX: e.clientX, deltaX: 0, active: true };
        setIsDragging(true);
        (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!drag.current.active) return;
        drag.current.deltaX = e.clientX - drag.current.startX;
    };
    const onPointerUp = (e: React.PointerEvent) => {
        if (!drag.current.active) return;
        const threshold = (containerRef.current?.clientWidth ?? 300) * 0.15;
        const { deltaX } = drag.current;
        drag.current.active = false;
        setIsDragging(false);
        if (deltaX > threshold) prev();
        else if (deltaX < -threshold) next();
    };

    if (!total) return null;

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            className="relative w-full max-w-[1200px] mx-auto select-none outline-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            aria-roledescription="carousel"
            role="region"
            aria-label={ariaLabel}
        >
            {/* Live region for screen readers to announce slide changes */}
            <div className="sr-only" aria-live="polite">
                {`Slide ${index + 1} of ${total}`}
            </div>

            {/* Slides */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
                <div
                    className={`flex ${isDragging ? "" : "transition-transform duration-700 ease-in-out"}`}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((src, i) => (
                        <div
                            key={i}
                            className="min-w-full relative"
                            style={{ height }}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${i + 1} of ${total}`}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${i + 1}`}
                                width={width}
                                height={height}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover w-full h-full"
                                priority={i === 0}
                            />
                            <div className="absolute left-4 bottom-4 bg-black/40 text-white rounded-md px-3 py-1 text-sm">
                                {`${i + 1} / ${total}`}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="font-serif max-w-4xl mx-auto py-12 px-6">
                <AboutSections />
            </div>

            {/* Arrows */}
            {showArrows && total > 1 && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white focus:outline-none focus:ring"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next slide"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white focus:outline-none focus:ring"
                    >
                        ›
                    </button>
                </>
            )}

            {/* Dots */}
            {showDots && total > 1 && (
                <div className="flex justify-center gap-2 mt-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === index}
                            className={`w-3 h-3 rounded-full transition-all bg-black ${i === index ? "scale-125" : "opacity-60"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
