import AboutSections from "@/components/AboutSections";
import Slideshow from "@/components/Slideshow";

export default function Page() {
    return (
        <main>
            <Slideshow></Slideshow>

            <div className="font-serif max-w-4xl mx-auto py-12 px-6">
                <AboutSections/>
            </div>
        </main>
    )
}
