export const dynamic = "force-dynamic";
import React from "react";
import Link from "next/link";
import { getActivities } from "@/services/activity.service";
import { Activity } from "@/types";

export default async function ActivitiesPage() {
    let activities: Activity[] = [];

    try {
        activities = await getActivities();
    } catch (error) {
        console.error("Failed to fetch activities:", error);
    }

    return (
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">

            {/* Page Title */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Aktivitas Sekolah
                </h1>
                <p className="text-gray-500">
                    Informasi kegiatan terbaru SMP BOPKRI 1 Wates
                </p>
            </div>

            {activities.length === 0 && (
            <p className="text-gray-500">
                Belum ada kegiatan / gagal memuat data
            </p>
            )}

            {/* Activities List */}
            <div className="space-y-8">
                {activities.map((activity) => (
                    <Link
                    key={activity.id}
                    href={`/activities/${activity.id}`}
                    className="block group"
                    >
                    <div className="flex flex-col gap-1">

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
                        {activity.title}
                        </h2>

                        {/* URL / Meta (optional feel like Google) */}
                        <p className="text-sm text-green-600">
                        /activities/{activity.id}
                        </p>

                        {/* Date */}
                        {activity.date && (
                        <p className="text-xs text-gray-400">
                            {new Date(activity.date).toLocaleDateString("id-ID")}
                        </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed w-full line-clamp-3">
                        {activity.description}
                        </p>

                    </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}