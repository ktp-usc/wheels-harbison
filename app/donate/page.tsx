import Image from "next/image";

export default function DonatePage() {
    return (
        <>
            <main className="font-serif max-w-6xl mx-auto py-12 px-6 space-y-10">
                <h1 className="text-4xl font-bold text-center mb-1">Support Wheels</h1>
                <div className="w-72 h-1 bg-black mx-auto rounded mb-8"></div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    <section className="text-lg leading-relaxed text-gray-800 md:w-1/2 md:pr-6">
                        <p>
                            Wheels relies entirely on community support to keep our operations running.
                            Your donations help cover essential costs like insurance, fuel, and regular
                            bus maintenance—ensuring we can safely transport those in need.
                            As a volunteer-driven organization, <strong>no one on our team receives payment</strong>;
                            every dollar directly supports keeping our buses on the road.
                        </p>

                        <p className="mt-6">
                            We’re proud to use <strong>Zeffy</strong> for fee-free donations, ensuring
                            <strong> 100% of your contribution goes directly to Wheels</strong>. Zeffy
                            asks donors for a tip to support their payment processing service, but this is entirely optional.
                        </p>
                    </section>

                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/images/Van.png"
                            alt="Wheels community van"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-center pt-6">
                    <a
                        href="https://www.zeffy.com/en-US/donation-form/help-provide-transportation-for-those-in-need/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#aebf20] hover:bg-[#218838] text-white text-xl font-semibold py-4 px-8 rounded-2xl shadow-lg transition duration-200"
                    >
                        Donate Now
                    </a>
                </div>
            </main>
        </>
    );
}
