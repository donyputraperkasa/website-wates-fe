"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ArticlesTable from "@/components/admin/articles/table/ArticlesTable";
import ArticleModal from "@/components/admin/articles/modal/ArticleModal";
import Pagination from "@/components/admin/articles/table/Pagination";

export default function AdminArticlesPage() {
    const [articles, setArticles] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

    useEffect(() => {
        async function fetchArticles() {
        const res = await fetch(`http://localhost:4000/articles?page=${page}`);
        const data = await res.json();
        setArticles(data);
        }

        fetchArticles();
    }, [page]);

    return (
        <div className="relative min-h-screen px-10 py-16">

            {/* Background Image */}
            <div className="fixed inset-0 bg-[url('/gambar1.jpeg')] bg-cover bg-center opacity-30 pointer-events-none" />

            <div className="max-w-5xl mx-auto space-y-10 bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-xl p-10">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Articles</h1>
                    <p className="text-sm text-gray-500">Kelola artikel berita website sekolah.</p>
                </div>

                <Link
                    href="/admin/articles/create"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition"
                >
                    <Plus size={18} />
                    Create Article
                </Link>
            </div>

            <ArticlesTable
                articles={articles}
                onSelect={setSelectedArticle}
            />

            <Pagination page={page} setPage={setPage} />

            <ArticleModal
                article={selectedArticle}
                onClose={() => setSelectedArticle(null)}
            />

            </div>
        </div>
    );
}