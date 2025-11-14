"use client";

import Link from "next/link";
import "./NavBarCSS.css";
import Image from "next/image";
import wheelsharbisonlogo from "@/public/images/wheelsharbisonlogo.webp"
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full flex gap-4 p-4 border-b bg-white shadow-md z-50">
            <Link href="/" className="logo-link">
                <Image
                    src={wheelsharbisonlogo}
                    alt="logo"
                    height={40}
                    className="cursor-pointer object-contain"
                />
            </Link>

            {/* hamburger button (visible only on mobile) */}
            <button
                className="nav-toggle"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((s) => !s)}
                type="button"
            >
                <span className={`hamburger ${open ? "is-open" : ""}`} />
            </button>

            <div className={`nav-links ${open ? "open" : ""}`}>
                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setOpen(false)}>Who We Are</Link>
                <Link href="/service" onClick={() => setOpen(false)}>What We Do</Link>
                <Link href="/volunteer" onClick={() => setOpen(false)}>Volunteer</Link>
                <Link href="/donate" className="special-button" onClick={() => setOpen(false)}>Donations</Link>
            </div>
        </nav>
    );
};

export default Navbar;