"use client";

import React from "react";
import ActivityRow from "./ActivitieRow";

interface Activity {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

interface Props {
    activities: Activity[];
    onDelete: (id: number) => void;
    onSelect: (activity: any) => void;
}

export default function ActivitiesTable({ activities, onDelete, onSelect }: Props) {
    return (
        <div className="bg-white/90 backdrop-blur rounded-3xl p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6 tracking-tight">
                Daftar Kegiatan
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left">

                <thead className="bg-gray-50 text-xs uppercase text-gray-500 tracking-wider">
                    <tr>
                    <th className="py-4 px-4">Title</th>
                    <th className="py-4 px-4">Description</th>
                    <th className="py-4 px-4">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                    {activities.map((activity) => (
                    <ActivityRow
                        key={activity.id}
                        activity={activity}
                        onDelete={onDelete}
                        onSelect={onSelect}
                    />
                    ))}

                    {activities.length === 0 && (
                    <tr>
                        <td
                        colSpan={3}
                        className="py-12 text-center text-gray-400 text-sm"
                        >
                        Belum ada kegiatan 🚀
                        </td>
                    </tr>
                    )}

                </tbody>

                </table>
            </div>

        </div>
    );
}
