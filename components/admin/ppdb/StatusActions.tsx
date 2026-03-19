// components/admin/ppdb/StatusActions.tsx
import { Check, X, Clock } from "lucide-react";

export default function StatusActions({ item, updateStatus, badgeClass }: any) {
    return (
        <div className="flex flex-col items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeClass(item.status)}`}>
                {item.status || "PENDING"}
            </span>

            <div className="flex gap-2">
                <button
                    onClick={() => updateStatus(item.id, "PENDING")}
                    className={`p-1 rounded ${item.status === "PENDING" ? "bg-yellow-500 text-white" : "bg-gray-100"}`}
                >
                    <Clock size={14} />
                </button>

                <button
                    onClick={() => updateStatus(item.id, "DITERIMA")}
                    className={`p-1 rounded ${item.status === "DITERIMA" ? "bg-green-600 text-white" : "bg-gray-100"}`}
                >
                    <Check size={14} />
                </button>

                <button
                    onClick={() => updateStatus(item.id, "DITOLAK")}
                    className={`p-1 rounded ${item.status === "DITOLAK" ? "bg-red-600 text-white" : "bg-gray-100"}`}
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}