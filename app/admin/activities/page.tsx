"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api";

interface Activity {
    id: number;
    title: string;
    description: string;
    date?: string;
}

export default function AdminActivitiesPage() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const fetchActivities = async () => {
        try {
        const res = await api.get("/activities");
        setActivities(res.data);
        } catch (err) {
        console.error("Failed to fetch activities", err);
        }
    };

    const createActivity = async () => {
        if (!title || !description) return;

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);

            if (image) {
                formData.append("image", image);
            }

            await api.post("/activities", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setTitle("");
            setDescription("");
            setImage(null);
            setPreview(null);

            fetchActivities();
        } catch (err) {
            console.error("Failed to create activity", err);
        }

        setLoading(false);
    };

    const deleteActivity = async (id: number) => {
        try {
        await api.delete(`/activities/${id}`);
        fetchActivities();
        } catch (err) {
        console.error("Failed to delete activity", err);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div className="relative min-h-screen py-16 px-6">

            {/* soft faded school background */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: "url('/gambar1.jpeg')" }}
            ></div>
            {/* white overlay to make it subtle */}
            <div className="absolute inset-0 bg-white/80"></div>

            <div className="relative max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Activities</h1>

            {/* Create Activity */}
            <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10 mb-10">
                <h2 className="text-xl font-semibold mb-4">Tambah Kegiatan</h2>

                <div className="flex flex-col gap-6">
                    <label className="text-sm font-semibold text-gray-700">Title</label>
                    <input
                        type="text"
                        placeholder="Judul kegiatan"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label className="text-sm font-semibold text-gray-700">Content</label>
                    <textarea
                        placeholder="Isi kegiatan"
                        className="w-full border border-gray-300 rounded-xl px-4 py-4 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col gap-3 bg-gray-50/50">
                        <label className="text-sm font-semibold text-gray-700">Activity Image</label>

                        <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition shadow w-fit">
                            Upload Image
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;

                                    setImage(file);
                                    setPreview(URL.createObjectURL(file));
                                }}
                            />
                        </label>
                    </div>

                    <div className="mt-2">
                {preview && (
                    <div className="w-56 h-36 relative rounded-xl overflow-hidden border">
                        <Image
                            src={preview}
                            alt="preview"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                )}
                    </div>

                <button
                    onClick={createActivity}
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition inline-flex items-center gap-2 w-fit mt-6"
                >
                    {loading ? "Saving..." : "Publish Activity"}
                </button>
                </div>
            </div>

            {/* Activities Table */}
            <div className="bg-white/90 backdrop-blur border rounded-2xl shadow-lg p-8 mt-12">
                <h2 className="text-xl font-semibold mb-4">Daftar Kegiatan</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b">
                            <tr>
                                <th className="py-2">Judul</th>
                                <th className="py-2">Deskripsi</th>
                                <th className="py-2">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                        {activities.map((activity) => (
                            <tr key={activity.id} className="border-b">
                            <td className="py-3">{activity.title}</td>
                            <td className="py-3">{activity.description}</td>

                            <td className="py-3">
                                <button
                                onClick={() => deleteActivity(activity.id)}
                                className="text-red-500 hover:underline"
                                >
                                Delete
                                </button>
                            </td>
                            </tr>
                        ))}

                        {activities.length === 0 && (
                            <tr>
                            <td colSpan={3} className="py-6 text-center text-gray-500">
                                Belum ada kegiatan
                            </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
}