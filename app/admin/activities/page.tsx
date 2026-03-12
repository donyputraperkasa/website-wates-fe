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
        <div className="relative min-h-screen px-10 py-16">

            {/* Background Image */}
            <div className="fixed inset-0 bg-[url('/gambar1.jpeg')] bg-cover bg-center opacity-30 pointer-events-none" />

            <div className="max-w-5xl mx-auto space-y-10 bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-xl p-10">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Activities</h1>
                    <p className="text-sm text-gray-500">Kelola aktivitass website sekolah</p>
                </div>

                <Link
                    href="/admin/activities/create"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition"
                >
                    <Plus size={18} />
                    Create Activity
                </Link>
            </div>

            <ActivitiesTable
                activities={activities}
                onSelect={setSelectedActivity}
                onDelete={handleDelete}
            />

            <Pagination page={page} setPage={setPage} />

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