import Link from "next/link";
import Image from "next/image";
import wheelsharbisonlogo from "@/public/images/wheelsharbisonlogo.png"





const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Image src={wheelsharbisonlogo} alt="logo" height={40}/>


            <Link href="/WhoWeAre">Who We Are</Link>
            {/*<Link href="#">What We Do</Link>*/}
            {/*<Link href="#">Our Route</Link>*/}
            {/* <Link href="#">Calendar</Link>*/}
            {/*<Link href="#">Volunteer</Link>*/}
            <Link href="https://www.zeffy.com/en-US/donation-form/help-provide-transportation-for-those-in-need/" className="special-button">Donations</Link>
        </nav>
    )
}

export default Navbar;