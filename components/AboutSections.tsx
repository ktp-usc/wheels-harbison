//components/AboutSections.tsx

export default function AboutSections() {
    return (
        <div className="w-full bg-white pt-32 pb-20">
            <div className="flex flex-col gap-20 md:flex-row justify-between">
                {/* Who We Are Section */}
                <section aria-labelledby="who-we-are" className="flex-1 bg-gray-50 p-10 rounded-xl shadow-md">
                    <h2 id="who-we-are" className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
                        Who We Are
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Wheels Harbison Area Transit is a nonprofit organization founded in 1989
                        to support residents of HUD housing communities in the Greater Harbison Area.
                        We are committed to improving the quality of life for elderly and disabled
                        residents by ensuring they have access to dependable and safe transportation.
                    </p>
                </section>

                {/* What We Do Section */}
                <section aria-labelledby="what-we-do" className="flex-1 bg-gray-50 p-10 rounded-xl shadow-md">
                    <h2 id="what-we-do" className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
                        What We Do
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        We provide free transportation to and from medical and dental appointments,
                        pharmacies, grocery stores, discount stores, and many other types of
                        businesses. Our service operates Monday through Friday from 8:30 AM to
                        12:00 PM. To request a ride, please contact us at 803-749-1911.
                    </p>
                </section>
            </div>
        </div>
    );
}