"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ArticlesTable from "@/components/admin/articles/table/ArticlesTable";
import Modal from "@/components/modal";
import Pagination from "@/components/Pagination";
import { getArticles } from "@/services/article.service";
import api from "@/lib/api";

export default function AdminArticlesPage() {
    const [articles, setArticles] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const data = await getArticles();
                setArticles(data?.data ?? data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchArticles();
    }, [page]);

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`/articles/${id}`);

            setArticles(prev => prev.filter(a => a.id !== id));
            console.log("Deleted:", id);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-gray-50 to-white">

            <div className="relative max-w-6xl mx-auto space-y-10 bg-white/90 backdrop-blur border border-gray-200 rounded-3xl shadow-xl p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Articles</h1>
                    <p className="text-sm text-gray-500">Kelola artikel website sekolah dengan tampilan modern.</p>
                    <div className="mt-3 w-16 h-1 bg-blue-600 rounded-full" />
                </div>

                <Link
                    href="/admin/articles/create"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                    <Plus size={18} />
                    Create Article
                </Link>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <div className="space-y-8">
                <ArticlesTable
                    articles={articles}
                    onSelect={setSelectedArticle}
                    onDelete={handleDelete}
                />

                <div className="flex justify-center pt-4">
                    <Pagination page={page} setPage={setPage} />
                </div>
            </div>

            {selectedArticle && (
                <Modal
                    title={selectedArticle.title}
                    content={selectedArticle.content}
                    date={selectedArticle.createdAt}
                    onClose={() => setSelectedArticle(null)}
                />
            )}

            </div>
        </div>
    );
}