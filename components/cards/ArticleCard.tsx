import Link from "next/link";

export default function ArticleCard({ article }: any) {
    return (
        <Link href={`/articles/${article.id}`}>
        <div className="border rounded-lg p-4 hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{article.title}</h2>

            <p className="text-gray-600 mt-2 line-clamp-2">
            {article.content}
            </p>

            <span className="text-blue-500 mt-3 inline-block">
            Read More →
            </span>
        </div>
        </Link>
    );
}