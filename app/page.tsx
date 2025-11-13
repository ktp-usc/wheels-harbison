import AboutSections from "@/components/AboutSections";
import Slideshow from "@/components/Slideshow";

export default function Page() {
    return (
        <main className="relative pt-25">
            <div className="max-w-5xl mx-auto px-4 pt-10 mb-18 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Providing free transportation to elderly and disabled residents in the Greater Harbison Area
                </h2>
                <div className="w-[935px] h-1 bg-black mx-auto rounded mb-6"></div>

                <Slideshow />
            </div>

            <div className="font-serif max-w-4xl mx-auto px-6">
                <AboutSections />
            </div>
        </main>
    );
}
