import Link from "next/link";
import "./NavBarCSS.css";
import Image from "next/image";
import wheelsharbisonlogo from "@/public/images/wheelsharbisonlogo.png"


const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Image src={wheelsharbisonlogo} alt="logo" height={40}/>


            <Link href="/">Who We Are</Link>
            <Link href="/">What We Do</Link>
            <Link href="/project">Our Route</Link>
            <Link href="/contact">Calendar</Link>
            <Link href="/contact">Volunteer</Link>
            <Link href="/contact" className="special-button">Donations</Link>
        </nav>
    )
}

export default Navbar;