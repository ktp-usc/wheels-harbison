import ServiceSchedule from "@/components/ServiceSchedule";

export default function Page() {
    return (
        <main>
            <div className="font-serif max-w-4xl mx-auto py-12 px-6 pt-25">
                <h1 className="text-4xl font-bold text-center mb-8">What We Do</h1>
                <ServiceSchedule />
            </div>
        </main>
    );
}