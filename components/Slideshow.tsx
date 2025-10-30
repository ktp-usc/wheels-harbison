"use client"

import Wheels1 from "@/images/Wheels1.jpg";
import Wheels2 from "@/images/Wheels2.png";
import Wheels3 from "@/images/Wheels3.png";
import Wheels4 from "@/images/Wheels4.png";
import Wheels5 from "@/images/Wheels5.jpg";
import Wheels6 from "@/images/Wheels6.jpg";
import Wheels7 from "@/images/Wheels7.png";
import Wheels8 from "@/images/Wheels8.png";
import Wheels9 from "@/images/Wheels9.jpg";
import Wheels10 from "@/images/Wheels10.jpg";
import Wheels11 from "@/images/Wheels11.jpg";
import Wheels12 from "@/images/Wheels12.jpg";
import Wheels13 from "@/images/Wheels13.jpg";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Image, {StaticImageData} from "next/image";

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
                                      images = [Wheels1, Wheels2, Wheels3, Wheels4, Wheels5, Wheels6, Wheels7, Wheels8, Wheels9, Wheels10, Wheels11, Wheels12, Wheels13],
                                      width = 1200,
                                      height = 700,
                                      autoplay = true,
                                      interval = 4000,
                                      showDots = true,
                                      ariaLabel = "Image slideshow",
                                  }: Props) {
    const slides = useMemo(() => images.filter(Boolean), [images]);
    const total = slides.length;
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const wrap = useCallback((i: number) => ((i % total) + total) % total, [total]);

    const next = useCallback(() => {
        if (!total) return;
        setIndex((i) => wrap(i + 1));
    }, [wrap, total]);

    const prev = useCallback(() => {
        if (!total) return;
        setIndex((i) => wrap(i - 1));
    }, [wrap, total]);

    const goTo = useCallback((i: number) => total && setIndex(wrap(i)), [wrap, total]);

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
        return () => el.removeEventListener("wheel", onWheel);
    }, [next, prev]);

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
    const onPointerUp = () => {
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
        <div className="bg-white text-black min-h-screen flex flex-col items-center justify-start">
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
                {/* Live region for screen readers */}
                <div className="sr-only" aria-live="polite">
                    {`Slide ${index + 1} of ${total}`}
                </div>

                {/* Slides */}
                <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
                    <div
                        className={`flex ${isDragging ? "" : "transition-transform duration-700 ease-in-out"}`}
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {slides.map((src, i) => (
                            <div
                                key={i}
                                className="min-w-full relative bg-white"
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
        </div>
    );
}
