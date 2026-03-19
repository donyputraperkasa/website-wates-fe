"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ActivitiesTable from "@/components/admin/activities/table/ActivitiesTable";
import Modal from "@/components/modal";
import Pagination from "@/components/Pagination";

export default function AdminActivitiesPage() {
    const [activities, setActivities] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [selectedActivity, setSelectedActivity] = useState<any | null>(null);

    useEffect(() => {
        async function fetchArticles() {
        const res = await fetch(`http://localhost:4000/activities?page=${page}`);
        const data = await res.json();
        setActivities(data);
        }

        fetchArticles();
    }, [page]);

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this activity?")) return;

        await fetch(`http://localhost:4000/activities/${id}`, {
            method: "DELETE",
        });

        setActivities((prev) => prev.filter((a) => a.id !== id));
    };

    return (
        <div className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-gray-50 to-white">

            <div className="relative max-w-6xl mx-auto space-y-10 bg-white/90 backdrop-blur border border-gray-200 rounded-3xl shadow-xl p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Activities</h1>
                    <p className="text-sm text-gray-500">Kelola aktivitas website sekolah dengan mudah dan modern</p>
                    <div className="mt-3 w-16 h-1 bg-blue-600 rounded-full" />
                </div>

                <Link
                    href="/admin/activities/create"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                    <Plus size={18} />
                    Create Activity
                </Link>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <div className="space-y-8">
                <ActivitiesTable
                    activities={activities}
                    onSelect={setSelectedActivity}
                    onDelete={handleDelete}
                />

                <div className="flex justify-center pt-4">
                    <Pagination page={page} setPage={setPage} />
                </div>
            </div>

            {selectedActivity && (
                <Modal
                    title={selectedActivity.title}
                    content={selectedActivity.content}
                    date={selectedActivity.createdAt}
                    onClose={() => setSelectedActivity(null)}
                />
            )}

            </div>
        </div>
    );
}