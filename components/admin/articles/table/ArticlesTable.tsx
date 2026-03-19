import ArticleRow from "./ArticleRow";

export default function ArticlesTable({ articles, onSelect }: any) {
    return (
        <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <table className="w-full text-sm">

            <thead className="bg-gray-50 text-xs uppercase text-gray-500 tracking-wider">
            <tr>
                <th className="px-4 py-4">Title</th>
                <th className="px-4 py-4">Author</th>
                <th className="px-4 py-4">Created</th>
                <th className="px-4 py-4">Action</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
            {articles.map((article: any) => (
                <ArticleRow
                key={article.id}
                article={article}
                onSelect={onSelect}
                />
            ))}
            </tbody>

        </table>
        </div>
    );
}