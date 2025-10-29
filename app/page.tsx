import AboutSections from "@/components/AboutSections";
import Slideshow from "@/components/Slideshow";
import Link from "next/link";

export default function Page() {
    return (
        <main className="relative">
            <div className="fixed top-6 right-6 z-50">
                <Link
                    href="/donate"
                    className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-200"
                >
                    Donate Now
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-4 pt-10 mb-10 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Providing free transportation to elderly and disabled residents in the Greater Harbison Area
                </h2>
                <div className="w-235 h-1 bg-black mx-auto rounded mb-2"></div>

                <Slideshow />
            </div>

            <div className="font-serif max-w-4xl mx-auto px-6">
                <AboutSections />
            </div>
        </main>
    );
}
