import { getArticles } from "@/services/article.service";
import ArticleCard from "@/components/cards/ArticleCard";

export default async function ArticlesPage() {
    const articles = await getArticles();

    return (
        <div className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article: any) => (
                <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}