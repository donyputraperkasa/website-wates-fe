"use client";

interface Activity {
    id: number;
    title: string;
    description: string;
}

interface Props {
    activity: Activity;
    onDelete: (id: number) => void;
}

export default function ActivityRow({ activity, onDelete }: Props) {
    return (
        <tr className="border-b hover:bg-gray-50 transition">

        <td className="py-4 px-3 font-medium">
            {activity.title}
        </td>

        <td className="py-4 px-3 text-gray-600">
            {activity.description}
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
