import Link from "next/link";
import { FileText, Trash2 } from "lucide-react";

export default function ArticleRow({ article, onSelect, onDelete }: any) {
    return (
      <tr className="border-b hover:bg-gray-50 transition-all">

        {/* Title */}
        <td className="py-5 px-4">
          <button
            onClick={() => onSelect(article)}
            className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            <FileText size={16} className="text-blue-500" />
            {article.title}
          </button>
        </td>

        {/* Author */}
        <td className="py-5 px-4 text-gray-500 text-sm">
          Admin
        </td>

        {/* Date */}
        <td className="py-5 px-4 text-gray-500 text-sm">
          {new Date(article.createdAt).toLocaleDateString()}
        </td>

        {/* Actions */}
        <td className="py-5 px-4">
          <div className="flex items-center gap-3">

            <Link
              href={`/admin/articles/edit/${article.id}`}
              className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
            >
              Edit
            </Link>

            <button
              onClick={() => {
                console.log("Delete clicked:", article.id);
                if (!onDelete) {
                  console.warn("onDelete is not provided");
                  return;
                }

                const confirmDelete = confirm("Yakin ingin menghapus artikel ini?");
                if (!confirmDelete) return;

                onDelete(article.id);
              }}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
            >
              <Trash2 size={14} />
              Delete
            </button>

          </div>
        </td>

      </tr>
    );
}