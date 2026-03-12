"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import EditActivityHeader from "@/components/admin/activities/form/EditActivityHeader";
import ImageUploadSection from "@/components/admin/ImageUploadSection";
import ActivityFormAction from "@/components/admin/activities/form/ActivityFormActions";

export default function EditActivityPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            try {
                const res = await fetch(`http://localhost:4000/activities/${id}`);
                const json = await res.json();

                // support both {data: {...}} and direct object
                const data = json?.data ?? json;

                setTitle(data?.title ?? "");
                setContent(data?.description ?? data?.content ?? "");

                // backend usually returns "image" not "imageUrl"
                if (data?.image) {
                    setCurrentImage(`http://localhost:4000/activities/${data.image}`);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingData(false);
            }
        }

        if (id) fetchArticle();
    }, [id]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", content);

        if (image) formData.append("image", image);

        await fetch(`http://localhost:4000/activities/${id}`, {
            method: "PATCH",
            headers: {
            Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        router.push("/admin/activities");
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    }

    if (loadingData) {
        return <div className="px-8 py-10">Loading article...</div>;
    }

    return (
        <div className="px-8 py-12 max-w-5xl mx-auto space-y-10">

        <EditActivityHeader/>

        <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm space-y-8"
        >

            {/* Title */}
            <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Masukkan judul artikel"
                required
            />
            </div>

            {/* Content */}
            <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Content</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 h-44 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Isi artikel..."
                required
            />
            </div>

            <ImageUploadSection
                label="Article Image"
                preview={preview}
                currentImage={currentImage}
                setImage={setImage}
                setPreview={setPreview}
            />

            <ActivityFormAction loading={loading} />

        </form>

        </div>
    );
}