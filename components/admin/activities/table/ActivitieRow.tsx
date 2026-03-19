"use client";

interface Activity {
    id: number;
    title: string;
    content: string;
}

interface Props {
    activity: Activity;
    onDelete: (id: number) => void;
    onSelect: (activity: Activity) => void;
}

export default function ActivityRow({ activity, onDelete, onSelect }: Props) {
    return (
        <tr className="border-b hover:bg-gray-50 transition-all">

            {/* Title */}
            <td className="py-5 px-4">
            <button
                onClick={() => onSelect(activity)}
                className="text-left font-semibold text-gray-800 hover:text-blue-600 transition"
            >
                {activity.title}
            </button>
            </td>

            {/* Content */}
            <td className="py-5 px-4 text-gray-500 text-sm line-clamp-2 max-w-md">
            {activity.content}
            </td>

            {/* Actions */}
            <td className="py-5 px-4">
            <div className="flex items-center gap-3">

                <a
                href={`/admin/activities/edit/${activity.id}`}
                className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                >
                Edit
                </a>

                <button
                onClick={() => onDelete(activity.id)}
                className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                >
                Delete
                </button>

            </div>
            </td>

        </tr>
    );
}
