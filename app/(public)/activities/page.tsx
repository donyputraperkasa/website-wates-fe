import React from "react";
import Link from "next/link";

interface Activity {
    id: number;
    title: string;
    description: string;
    image?: string;
    date?: string;
}

async function getActivities(): Promise<Activity[]> {
    try {
        const res = await fetch("http://localhost:4000/activities", {
        cache: "no-store",
        });

        if (!res.ok) {
        throw new Error("Failed to fetch activities");
        }

        return res.json();
    } catch (error) {
        console.error("Fetch activities error:", error);
        return [];
    }
    }

    export default async function ActivitiesPage() {
    const activities = await getActivities();

    return (
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

            {/* Page Title */}
            <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Kegiatan Sekolah
            </h1>
            <p className="text-gray-500">
                Informasi kegiatan terbaru SMP BOPKRI 1 Wates.
            </p>
            </div>

            {activities.length === 0 && (
            <p className="text-gray-500">Belum ada kegiatan.</p>
            )}

            {/* Activities List */}
            <div className="space-y-6">
            {activities.map((activity) => (
                <Link
                key={activity.id}
                href={`/activities/${activity.id}`}
                className="group block bg-white rounded-xl border shadow-sm hover:shadow-md transition p-6"
                >
                <div className="flex gap-6">

                    {/* Image */}
                    {activity.image && (
                    <img
                        src={`http://localhost:4000/uploads/${activity.image}`}
                        alt={activity.title}
                        className="w-44 h-32 object-cover rounded-lg"
                    />
                    )}

                    {/* Text Content */}
                    <div className="flex-1">

                    <h2 className="text-xl font-semibold text-blue-600 group-hover:underline mb-1">
                        {activity.title}
                    </h2>

                    {activity.date && (
                        <p className="text-sm text-gray-400 mb-2">
                        {new Date(activity.date).toLocaleDateString("id-ID")}
                        </p>
                    )}

                    <p className="text-gray-600 text-sm line-clamp-3">
                        {activity.description}
                    </p>

                    </div>

                </div>
                </Link>
            ))}
            </div>

        </div>
    );
}