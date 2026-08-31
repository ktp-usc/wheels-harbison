import Image from "next/image";
import Link from "next/link";

export default function WhoWeArePage() {
    return (
        <main className="bg-gradient-to-b from-gray-100 to-gray-200 font-sans pt-10">
            {/* Our Mission */}
            <section>
                <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-4xl font-extrabold text-black mb-1">Our Mission</h2>
                    <div className="w-[205px] h-1 bg-black mx-auto rounded mb-6"></div>
                    <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-800">
                        Founded in 1989, Wheels Harbison Area Transit was formed to serve HUD housing
                        residents by providing free transportation to Elderly and Disabled residents in the
                        Greater Harbison Area. This transportation includes getting elderly and disabled
                        residents to and from medical appointments, dental appointments, pharmacies, grocery
                        stores, discount stores, and many other types of businesses.
                    </p>

                    {/* Image row */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { src: "/images/WheelsTargetImage.webp", alt: "Wheels bus at Target" },
                            { src: "/images/WheelsBusImage.webp", alt: "Assisting riders" },
                            { src: "/images/WheelsBankImage.webp", alt: "Wheels bus at Wells Fargo" },
                        ].map((img, i) => (
                            <div
                                key={i}
                                className="relative h-56 md:h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                            >
                                <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i === 0} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            <section className="mt-12">
                <div className="max-w-6xl mx-auto px-6 py-16 text-center bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-semibold text-black mb-6">Our Impact</h2>
                    <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-800">
                        Over the past several decades, Wheels Harbison Area Transit has become a lifeline for the residents of Woods Edge,
                        Lakeside, and AHEPA apartments, helping elderly and disabled individuals maintain their independence. <strong>In 2025 alone,
                        our volunteer drivers transported 2,168 residents across 706 hours of service</strong>, completing hundreds of essential trips
                        to grocery stores, pharmacies, medical offices, and community centers. Beyond meeting transportation needs, our service
                        fosters connection and companionship among riders and volunteers, creating a sense of community that extends well beyond
                        each ride.
                    </p>
                </div>
            </section>



            {/* Why We Need Your Help */}
            <section className="mt-12">
                <div className="max-w-6xl mx-auto px-6 py-16 text-center bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-semibold text-black mb-6">Why We Need Your Help</h2>
                    <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-800">
                        Your support directly keeps our wheels turning. While our mission continues to thrive,
                        sustaining our operations has become increasingly
                        difficult. Insurance costs have skyrocketed in recent years, placing a strain on our
                        limited budget. Every contribution helps us pay for
                        insurance, fuel, and maintenance so that our buses can continue transporting residents
                        to medical appointments, grocery stores, and vital community services. A donation, rather big
                        or small, ensures our long-term sustainability and guarantees transportation for residents who
                        have no other options. By donating, you’re preserving independence, dignity, and
                        human connection for our elderly and disabled neighbors in the Harbison community.
                    </p>
                </div>
            </section>

            <section className="mt-12 pb-24">
                <div className="max-w-6xl mx-auto px-6 py-16 text-center bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Be the reason someone gets where they need to go.</h2>
                <Link
                    href="/donate"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#218838] hover:bg-[#aebf20] text-white text-xl font-semibold py-4 px-10 rounded-2xl shadow-lg transition duration-300"
                >
                    Donate Now
                </Link>
                </div>
            </section>
        </main>
    );
}
