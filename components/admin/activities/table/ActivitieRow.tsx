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
        <tr className="border-b hover:bg-gray-50 transition">

        <td className="py-4 px-3 font-medium">
            <button
                onClick={() => onSelect(activity)}
                className="text-left hover:underline"
            >
                {activity.title}
            </button>
        </td>

        <td className="py-4 px-3 text-gray-600">
            {activity.content}
        </td>

        <td className="py-4 px-3 flex gap-4">

            <a
            href={`/admin/activities/edit/${activity.id}`}
            className="text-blue-600 hover:underline"
            >
            Edit
            </a>

            <button
            onClick={() => onDelete(activity.id)}
            className="text-red-500 hover:underline"
            >
            Delete
            </button>

        </td>

        </tr>
    );
}
