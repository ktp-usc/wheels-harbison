export default function AboutSections() {
    return (
        <div className="w-full pb-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Who We Are Section */}
                    <section
                        aria-labelledby="who-we-are"
                        className="bg-gray-50 p-10 rounded-xl shadow-md flex flex-col text-center h-full"
                    >
                        <h2 id="who-we-are" className="text-4xl text-black font-bold mb-6 tracking-tight">
                            Who We Are
                        </h2>
                        <p className="text-2xl text-gray-800 leading-relaxed flex-1">
                            Wheels Harbison Area Transit is a nonprofit organization founded in 1989
                            to support HUD housing residents in the <span className="underline underline-offset-4 decoration-2">Greater
              Harbison area.</span> We are committed to improving the quality of life for elderly and disabled
                            residents by ensuring they have access to dependable and safe transportation.
                        </p>
                    </section>

                    {/* What We Do Section */}
                    <section
                        aria-labelledby="what-we-do"
                        className="bg-gray-50 p-10 rounded-xl shadow-md flex flex-col text-center h-full"
                    >
                        <h2 id="what-we-do" className="text-4xl font-bold mb-6 text-black tracking-tight">
                            What We Do
                        </h2>
                        <p className="text-2xl text-gray-800 leading-relaxed flex-1">
                            We provide free transportation to and from medical and dental appointments,
                            pharmacies, grocery stores, discount stores, and many other types of
                            businesses. Our service operates Monday through Friday from 8:30 AM to
                            12:00 PM. To request a ride, please contact us at 803-749-1911.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
