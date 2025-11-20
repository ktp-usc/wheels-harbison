import type { Metadata } from "next";
//import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
//import Slideshow from "@/components/Slideshow";
import WheelsFooter from "@/components/WheelsFooter"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Wheels Harbison Area Transit",
    description: "Providing free transportation for the Wheels Harbison Area",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
        <Navbar />
        <main className="flex-grow mt-8">
            {children}
        </main>
        <WheelsFooter />

        </body>
        </html>
    );
}
