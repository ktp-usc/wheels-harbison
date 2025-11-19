import React from "react";

export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans flex flex-col items-center justify-center py-16 px-6">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <header className="text-center mb-12 pt-10">
                    <h1 className="text-4xl font-extrabold text-black mb-1">
                        Volunteer with Wheels Harbison
                    </h1>
                    <div className="w-138 h-1 bg-black mx-auto rounded mb-6"></div>
                </header>

                {/* Overview */}
                <section className="bg-white text-center shadow-md rounded-lg p-8 mb-10 hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-semibold mb-4 text-black">Overview</h2>
                    <p className="text-xl leading-relaxed text-gray-800">
                        <strong>Make a difference in your community by helping provide safe and accessible transportation. </strong>
                        Wheels Harbison Area Transit is a volunteer-run community service that
                        provides transportation for those in need. As a volunteer, you’ll help
                        support your community by driving passengers safely and assisting
                        individuals who require wheelchair-accessible rides.
                    </p>
                </section>

                <section className="bg-white shadow-md rounded-lg p-8 mb-10 hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-semibold mb-6 text-center text-black">
                        Volunteer Requirements
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Driver Requirements */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Drivers</h3>
                            <ul className="space-y-3 text-xl text-gray-800 text-center">
                                <li>Name, email, and phone number</li>
                                <li>Valid driver’s license</li>
                                <li>Ability to operate a wheelchair lift</li>
                            </ul>
                        </div>

                        {/* Other Staff Requirements */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Staff</h3>
                            <ul className="space-y-3 text-xl text-gray-800 text-center">
                                <li>Name, email, and phone number</li>
                                <li>Ability to support passengers as needed</li>
                                <li>Support scheduling and ride-along with passengers</li>
                            </ul>
                        </div>

                    </div>
                </section>



                {/* Contact Information */}
                <section className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                    <h2 className="text-4xl font-semibold mb-4 text-black">Contact Information</h2>
                    <p className="text-xl leading-relaxed text-gray-800 mb-6">
                        Ready to volunteer? Reach out to us today!
                    </p>
                    <a
                        href="mailto:wheelsharbison@yahoo.com"
                        className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition-colors"
                    >
                        wheelsharbison@yahoo.com
                    </a>
                </section>
            </div>
        </main>
    );
}
