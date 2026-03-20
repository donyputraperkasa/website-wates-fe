import { getArticles } from "@/services/article.service";
import Link from "next/link";
import { Article } from "@/types";

export default async function ArticlesPage() {
    const articles: Article[] = await getArticles();

    return (
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">

            <h1 className="text-3xl font-bold mb-8">Articles</h1>

            {articles.length === 0 && (
            <p className="text-gray-500">Belum ada artikel rilis kakaaaa</p>    
            )}

            <div className="space-y-8">
            {articles.map((article: Article) => (
                <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="block group"
                >
                <div className="flex flex-col gap-1">

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
                    {article.title}
                    </h2>

                    {/* URL */}
                    <p className="text-sm text-green-600">
                    /articles/{article.id}
                    </p>

                    {/* Date */}
                    {article.createdAt && (
                    <p className="text-xs text-gray-400">
                        {new Date(article.createdAt).toLocaleDateString("id-ID")}
                    </p>
                    )}

                    {/* Content Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed w-full line-clamp-3">
                    {article.content}
                    </p>

                </div>
                </Link>
            ))}
            </div>

        </div>
    );
}