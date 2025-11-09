
export default function ServiceSchedule() {
    return (
        <section className="text-center space-y-6">
            <p className="text-lg">
                Our service schedule runs from <strong>8:30 AM to 12:00 PM</strong>.
            </p>

            <p className="text-lg">
                Please call our message line at{" "}
                <strong>(803) 749-1911</strong> before{" "}
                <strong>5:00 PM the day prior</strong>.
            </p>

            <div className="flex justify-center">
                <img
                    src="/images/serviceschedule.png"
                    alt="Wheels Harbison Service Schedule"
                    className="shadow-lg w-full max-w-8xl border border-gray-200"
                />
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-3">Service Route Map</h2>
                <div className="flex justify-center">
                    <img
                        src="/images/routemap.png"
                        alt="Wheels Harbison Service Route Map"
                        className="shadow-lg w-full max-w-6xl border border-gray-200 rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}