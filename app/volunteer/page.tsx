import React from "react";

export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 p-8 pt-12">
            <h1 className="text-3xl font-bold mb-6">Volunteer with Wheels Harbison</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p>
                    Wheels Harbison Area Transit is a volunteer-run community service that
                    provides transportation for those in need. As a volunteer, you’ll help
                    support your community by driving passengers safely and assisting
                    individuals who require wheelchair-accessible rides.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Volunteer Requirements</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Name, email, and phone number</li>
                    <li>Valid driver’s license</li>
                    <li>Ability to operate a wheelchair lift (Yes/No)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p>
                    To volunteer, please contact us at{" "}
                    <a
                        href="mailto:wheelsharbison@yahoo.com"
                        className="text-blue-600 hover:underline"
                    >
                        volunteer@wheelsharbison.org
                    </a>
                </p>
            </section>
        </main>
    );
}
