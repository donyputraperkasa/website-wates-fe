"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditArticleHeader() {
    return (
        <div className="flex items-center gap-4">
        <Link
            href="/admin/articles"
            className="p-2 rounded-lg border hover:bg-gray-100 transition"
        >
            <ArrowLeft size={18} />
        </Link>

        <div>
            <h1 className="text-3xl font-bold text-gray-800">
            Article Editor
            </h1>
            <p className="text-sm text-gray-500">
            Tambah atau edit artikel website sekolah.
            </p>
        </div>
        </div>
    );
}