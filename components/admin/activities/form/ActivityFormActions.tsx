"use client";

import Link from "next/link";
import { Save } from "lucide-react";

interface Props {
    loading: boolean;
}

export default function ActivityFormActions({ loading }: Props) {
    return (
        <div className="flex items-center justify-end gap-4 pt-4">

        <Link
            href="/admin/activities"
            className="px-5 py-2 rounded-lg border hover:bg-gray-100 text-sm"
        >
            Cancel
        </Link>

        <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg"
        >
            <Save size={18} />
            {loading ? "Saving..." : "Save Activity"}
        </button>

        </div>
    );
}