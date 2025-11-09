import Image from "next/image";
import Link from "next/link";

export default function WhoWeArePage() {
    return (
        <main className="pb-24">

            {/* Our Mission */}
            <section className="bg-[#1c1832] text-white mt-6">
                <div className="max-w-6xl mx-auto px-4 py-12 text-center">
                    <h2 className="text-4xl font-extrabold mb-6">Our Mission</h2>
                    <p className="max-w-4xl mx-auto text-lg leading-7">
                        Founded in 1989, Wheels Harbison Area Transit was formed to serve HUD housing
                        residents by providing free transportation to Elderly and Disabled residents in the
                        Greater Harbison Area. This transportation includes getting elderly and disabled
                        residents to and from medical appointments, dental appointments, pharmacies, grocery
                        stores, discount stores, and many other types of businesses.
                    </p>

                    {/* Image row */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow">
                            <Image
                                src="/images/WheelsTargetImage.jpg" //
                                alt="Wheels bus at Target"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow">
                            <Image
                                src="/images/WheelsBusImage.png" //
                                alt="Assisting riders"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow">
                            <Image
                                src="/images/WheelsBankImage.jpg" //
                                alt="Wheels bus at Wells Fargo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            <section className="bg-[#1c1832] text-white mt-10">
                <div className="max-w-6xl mx-auto px-4 py-10 text-center">
                    <h2 className="text-4xl font-extrabold">Our Impact</h2>
                    <p className="max-w-4xl mx-auto text-lg leading-7">
                        Over the past several decades, Wheels Harbison Area Transit has become a lifeline for the residents of Woods Edge,
                        Lakeside, and AHEPA apartments, helping elderly and disabled individuals maintain their independence. In 2023 alone,
                        our volunteer drivers transported 2,740 residents across 794 hours of service, completing hundreds of essential trips
                        to grocery stores, pharmacies, medical offices, and community centers. Beyond meeting transportation needs, our service
                        fosters connection and companionship among riders and volunteers, creating a sense of community that extends well beyond
                        each ride. This consistent support ensures that residents can access vital resources and remain active members of the
                        Greater Harbison Area.
                    </p>
                </div>
            </section>

            {/* Challenges */}
            <section className="bg-[#1c1832] text-white mt-10">
                <div className="max-w-6xl mx-auto px-4 py-10 text-center">
                    <h2 className="text-4xl font-extrabold">Challenges</h2>
                    <p className="max-w-4xl mx-auto text-lg leading-7">
                        While our mission continues to thrive, sustaining our operations has become increasingly
                        difficult. Insurance costs have tripled over the past year, placing a strain on our
                        limited budget. Resident donations currently cover only a portion of our fuel expenses,
                        and though we receive generous monthly support, the loss of major
                        funding from the Harbison Foundation has deeply impacted our ability to maintain both of
                        our buses. With rising expenses for taxes, maintenance, and fuel, Wheels faces the
                        challenge of balancing essential community service with limited financial resources, making
                        outside donations and partnerships more important than ever.
                    </p>
                </div>
            </section>

            {/* Why We Need Your Help */}
            <section className="bg-[#1c1832] text-white mt-10">
                <div className="max-w-6xl mx-auto px-4 py-10 text-center">
                    <h2 className="text-4xl font-extrabold">Why We Need Your Help</h2>
                    <p className="max-w-4xl mx-auto text-lg leading-7">
                        Your support directly keeps our wheels turning. Every contribution helps us pay for
                        insurance, fuel, and maintenance so that our buses can continue transporting residents
                        to medical appointments, grocery stores, and vital community services. A donation, rather big
                        or small, would ensure our long-term
                        sustainability and guarantee transportation for residents who have no other options. By
                        donating, you’re not only funding a ride, you’re preserving independence, dignity, and
                        human connection for our elderly and disabled neighbors in the Harbison community.
                    </p>
                </div>
            </section>

            {/* Donate CTA */}
            <section className="max-w-6xl mx-auto px-4 mt-12 flex justify-center">
                <Link
                    href="https://www.zeffy.com/en-US/donation-form/help-provide-transportation-for-those-in-need/"
                    className="inline-block rounded-full bg-[#66e04b] px-10 py-4 text-white font-semibold text-lg shadow hover:opacity-95 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Donate
                </Link>
            </section>

        </main>
    );
}
