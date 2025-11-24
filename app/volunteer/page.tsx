export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans flex flex-col items-center justify-center py-16 px-4 sm:px-6">
            <div className="w-full max-w-4xl mx-auto">

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 px-2">
                        Volunteer with Wheels Harbison
                    </h1>

                    {/* Responsive Divider */}
                    <div className="h-1 bg-black mx-auto rounded mb-6 w-2/3 sm:w-1/2 md:w-1/3 lg:w-[300px]">
                    </div>
                </header>

                {/* Overview */}
                <section className="bg-white text-center shadow-md rounded-lg p-6 sm:p-8 mb-10 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                        Overview
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800 px-2">
                        <strong>Make a difference in your community by helping provide safe and accessible transportation. </strong>
                        Wheels Harbison Area Transit is a volunteer-run community service that
                        provides transportation for those in need. As a volunteer, you’ll help
                        support your community by driving passengers safely and assisting
                        individuals who require wheelchair-accessible rides.
                    </p>
                </section>

                {/* Volunteer Requirements */}
                <section className="bg-white shadow-md text-center rounded-lg p-6 sm:p-8 mb-10 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                        Volunteer Role Information
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800 px-2 pb-6">
                        We have several roles available. Contact us if you are interested!
                    </p>

                    {/* Driver Requirements */}
                    <div className="pb-8">
                        <h3 className="text-2xl font-bold mb-4 text-black text-center">Drivers</h3>
                        <ul className="space-y-3 text-lg sm:text-xl leading-relaxed text-gray-800">
                            <li><i>Must have a valid driver’s license</i></li>
                            <li>Drive the bus per the weekly schedule</li>
                            <li>Operate a wheelchair lift to assist passengers</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Other Staff */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Scheduling Coordinator</h3>
                            <ul className="space-y-3 text-lg sm:text-xl leading-relaxed text-gray-800">
                                <li>Receive passenger & driver availability</li>
                                <li>Help create the weekly schedule</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Administrative Support</h3>
                            <ul className="space-y-3 text-lg sm:text-xl leading-relaxed text-gray-800">
                                <li>Help with daily tasks and data collection</li>
                                <li>Learn skills to later join Wheels leadership</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Grant Writer</h3>
                            <ul className="space-y-3 text-lg sm:text-xl leading-relaxed text-gray-800">
                                <li>Communicate mission to other organizations</li>
                                <li>Help secure financial support to continue operations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-black text-center">Technical Support</h3>
                            <ul className="space-y-3 text-lg sm:text-xl leading-relaxed text-gray-800">
                                <li>Support day-to-day IT needs</li>
                                <li>Use technology to improve Wheels operations</li>
                            </ul>
                        </div>

                    </div>

                </section>

                {/* Contact Information */}
                <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                        Contact Information
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800 mb-6 px-2">
                        Ready to volunteer? Reach out to us today!
                    </p>

                    <a
                        href="mailto:wheelsharbison@yahoo.com"
                        className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition-colors text-sm sm:text-base"
                    >
                        wheelsharbison@yahoo.com
                    </a>
                </section>
            </div>
        </main>
    );
}
