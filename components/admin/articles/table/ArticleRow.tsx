import Link from "next/link";
import { FileText, Trash2 } from "lucide-react";

export default function ArticleRow({ article, onSelect, onDelete }: any) {
    return (
        <tr className="border-t hover:bg-gray-50">

        <td className="px-6 py-4 flex items-center gap-2">
            <FileText size={16} className="text-blue-500" />

            <button
            onClick={() => onSelect(article)}
            className="hover:text-blue-600"
            >
            {article.title}
            </button>
        </td>

        <td className="px-6 py-4">Admin</td>

        <td className="px-6 py-4">
            {new Date(article.createdAt).toLocaleDateString()}
        </td>

        <td className="px-6 py-4 flex items-center gap-4">
            <Link
                href={`/admin/articles/edit/${article.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
            Edit
            </Link>

            <button
                onClick={() => onDelete && onDelete(article.id)}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium"
            >
            <Trash2 size={16} />
            Delete
            </button>
        </td>

        </tr>
    );
}