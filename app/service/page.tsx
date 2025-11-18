import ServiceSchedule from "@/components/ServiceSchedule";

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans flex flex-col items-center justify-center py-16 px-6">
            <div className="font-sans max-w-4xl mx-auto py-12 px-6 pt-20">
                <h1 className="text-4xl font-extrabold text-black text-center">What We Do</h1>
                <div className="w-[205px] h-1 bg-black mx-auto rounded mb-8"></div>
                <ServiceSchedule />
            </div>
        </main>
    );
}