export default function ArticleModal({ article, onClose }: any) {
    if (!article) return null;

    return (
        <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center"
        onClick={onClose}
        >
        <div
            className="bg-white max-w-2xl w-full rounded-xl p-8"
            onClick={(e) => e.stopPropagation()}
        >

            <h2 className="text-xl font-bold mb-3">{article.title}</h2>

            <p className="text-sm text-gray-500 mb-6">
            {new Date(article.createdAt).toLocaleDateString()}
            </p>

            <div className="whitespace-pre-line">
            {article.content}
            </div>

        </div>
        </div>
    );
}