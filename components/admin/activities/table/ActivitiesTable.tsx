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
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <h2 className="text-lg font-semibold mb-6">
            Daftar Kegiatan
        </h2>

        <div className="overflow-x-auto">
            <table className="w-full text-left">

            <thead className="border-b text-sm text-gray-600">
                <tr>
                <th className="py-3 px-3">Title</th>
                <th className="py-3 px-3">Description</th>
                <th className="py-3 px-3">Action</th>
                </tr>
            </thead>

            <tbody>
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
                    className="py-8 text-center text-gray-500"
                    >
                    Belum ada kegiatan
                    </td>
                </tr>
                )}

            </tbody>

            </table>
        </div>

        </div>
    );
}
