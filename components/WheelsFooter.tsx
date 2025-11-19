import Link from "next/link";




const WheelsFooter = () => {
    return(
<footer className="bg-gray-900 text-white text-sm p-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
            <h2 className="font-semibold text-lg mb-2">
                Wheels Harbison Area Transit
            </h2>
        </div>

        {/* Column 2: Quick Links */}
        <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:underline">
                        Who We Are
                    </Link>
                </li>
                <li>
                    <Link href="/service" className="hover:underline">
                        What We Do
                    </Link>
                </li>
                <li>
                    <Link href="/volunteer" className="hover:underline">
                        Volunteer
                    </Link>
                </li>
                <li>
                    <Link href="/donate" className="hover:underline">
                        Donate
                    </Link>
                </li>
            </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <p className="text-gray-300">
                <strong>Message Line:</strong> (803) 749-1911
                <br />
                <strong>Email:</strong>{" "}
                <a
                    href="mailto:wheelsharbison@yahoo.com"
                    className="hover:underline"
                >
                    wheelsharbison@yahoo.com
                </a>
                <br />
                <br />
                Based near Woods Edge Apartments, Columbia, South Carolina
            </p>
            <p className="mt-2 text-gray-400">
                <strong>Service Hours: </strong> Thurs 8:30 AM – 12:00 PM
            </p>
        </div>

        {/* Column 4: Support */}
        <div>
            <h3 className="font-semibold text-lg mb-2">Support Our Mission</h3>

            <ul className="space-y-1 mt-2">
                <li>
                    <Link href="https://www.zeffy.com/en-US/donation-form/help-provide-transportation-for-those-in-need/" className="hover:underline">
                        Give via Zeffy
                    </Link>
                </li>
            </ul>
        </div>
    </div>

    {/* Bottom line */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs">
        <p>© 2025 Wheels Harbison Area Transit. All rights reserved.</p>
        <p>A volunteer-run community service.</p>
    </div>
</footer>
    )
}
export default WheelsFooter;