"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, ImagePlus } from "lucide-react";
import Link from "next/link";

export default function CreateArticlePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (image) {
        formData.append("image", image);
      }

      await fetch("http://localhost:4000/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      router.push("/admin/articles");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen px-8 py-12">

      {/* Background Image */}
      <div className="fixed inset-0 bg-[url('/gambar1.jpeg')] bg-cover bg-center opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="p-2 rounded-lg border bg-white hover:bg-gray-100 shadow-sm"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">Create Article</h1>
            <p className="text-sm text-gray-500">
              Buat artikel berita baru untuk website sekolah.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-10 shadow-lg space-y-8"
        >

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Judul artikel"
              required
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 h-44 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Isi artikel"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-3 border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
            <label className="text-sm font-semibold text-gray-700">Article Image</label>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
                <ImagePlus size={18} />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setImage(file);

                    if (file) {
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </label>

              {image && (
                <span className="text-sm text-gray-500">{image.name}</span>
              )}
            </div>

            {preview && (
              <div className="pt-2">
                <img
                  src={preview}
                  className="w-64 h-40 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Publish Article"}
          </button>
        </form>
      </div>
    </div>
  );
}
