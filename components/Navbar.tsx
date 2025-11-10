import Link from "next/link";
import "./NavBarCSS.css";
import Image from "next/image";
import wheelsharbisonlogo from "@/public/images/wheelsharbisonlogo.webp"




const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Link href="/" className="logo-link">
                <Image
                    src={wheelsharbisonlogo}
                    alt="logo"
                    height={40}
                    className="cursor-pointer object-contain"
                />
            </Link>

            <Link href="/">Home</Link>
            <Link href="/about">Who We Are</Link>
            <Link href="/service">What We Do</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/donate" className="special-button">Donations</Link>
        </nav>
    )
}

export default Navbar;