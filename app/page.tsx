import AboutSections from "@/components/AboutSections";
import Slideshow from "@/components/Slideshow";

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans flex flex-col items-center justify-center py-16 px-4 sm:px-6">
            <div className="w-full max-w-5xl mx-auto mb-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2 px-2">
                    Providing free transportation to elderly and disabled residents in the Greater Harbison Area
                </h2>

                <div className="h-1 bg-black mx-auto rounded mb-8 w-3/4 sm:w-2/3 md:w-1/2 lg:w-[600px]"></div>

                <Slideshow />
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
                <AboutSections />
            </div>
        </main>
    );
}

