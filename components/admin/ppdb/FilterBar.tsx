// components/admin/ppdb/FilterBar.tsx
export default function FilterBar({ filter, setFilter }: any) {
    const filters = [
        { label: "All", value: "ALL" },
        { label: "Pending", value: "PENDING" },
        { label: "Diterima", value: "DITERIMA" },
        { label: "Ditolak", value: "DITOLAK" },
    ];

    return (
        <div className="flex gap-2">
        {filters.map((f) => (
            <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1 rounded-lg border text-sm ${
                filter === f.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white"
            }`}
            >
            {f.label}
            </button>
        ))}
        </div>
    );
}