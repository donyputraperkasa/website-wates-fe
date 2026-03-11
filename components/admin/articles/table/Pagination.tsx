export default function Pagination({ page, setPage }: any) {
    return (
        <div className="flex justify-center gap-6">

        <button
            onClick={() => setPage((p: number) => Math.max(1, p - 1))}
            className="px-4 py-1 border rounded"
        >
            Prev
        </button>

        <span>Page {page}</span>

        <button
            onClick={() => setPage((p: number) => p + 1)}
            className="px-4 py-1 border rounded"
        >
            Next
        </button>

        </div>
    );
}