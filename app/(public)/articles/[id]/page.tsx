import Link from "next/link";
import { getArticle, getArticles } from "@/services/article.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
    params: Promise<{
        id: string;
    }>
}

export default async function ArticleDetail({ params }: Props) {
    const { id } = await params;
    const article = await getArticle(id);
    if (!article) {
        return (
            <div className="pt-16 text-center text-gray-500">
                Artikel tidak ditemukan
            </div>
        );
    }
    const articles = (await getArticles()) ?? [];
    const otherArticles = articles
        .filter((a: any) => a.id !== article?.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen pt-16 pb-16 px-6 bg-gray-50">

            {/* Back Button */}
            <div className="max-w-5xl mx-auto mb-6">
                <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Kembali ke Artikel
                </Link>
            </div>

            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

            {/* Image */}
            {article.image && (
                <div className="w-full bg-gray-100 flex items-center justify-center max-h-[420px]">
                <img
                    src={`${API_URL}/uploads/articles/${article.image}`}
                    alt={article.title}
                    className="max-h-[420px] w-auto object-contain"
                />
                </div>
            )}

            <div className="p-8 md:p-10 space-y-6">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {article.title}
                </h1>

                {/* Divider */}
                <div className="w-20 h-1 bg-blue-600 rounded" />

                {/* Content */}
                <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line break-words">
                {article.content}
                </div>

            </div>

            </div>

            {/* Other Articles */}
            <div className="max-w-5xl mx-auto mt-16">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Artikel Lainnya
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {otherArticles.map((item: any) => (
                <Link
                    key={item.id}
                    href={`/articles/${item.id}`}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >

                    {item.image && (
                    <img
                        src={`${API_URL}/uploads/articles/${item.image}`}
                        className="w-full h-40 object-cover"
                    />
                    )}

                    <div className="p-4">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">
                        {item.title}
                    </h3>
                    </div>

                </Link>
                ))}

            </div>

            </div>

        </div>
    );
}