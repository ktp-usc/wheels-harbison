import AboutSections from "@/components/AboutSections";
import Slideshow from "@/components/Slideshow";

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans flex flex-col items-center justify-center py-16 px-6">
            <div className="max-w-5xl mx-auto px-4 mb-18 text-center">
                <h2 className="text-4xl font-sans font-extrabold text-black mb-1">
                    Providing free transportation to elderly and disabled residents in the Greater Harbison Area
                </h2>
                <div className="w-[890px] h-1 bg-black mx-auto rounded mb-8"></div>

                <Slideshow />
            </div>

            <div className="font-sans max-w-4xl mx-auto px-6">
                <AboutSections />
            </div>
        </main>
    );
}
