interface Props {
    title: string
    content: string
    date?: string
    onClose: () => void
}

export default function Modal({
    title,
    content,
    date,
    onClose
}: Props) {

    return (
        <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        onClick={onClose}
        >
            <div
                className="bg-white max-w-2xl w-full rounded-xl p-8"
                onClick={(e) => e.stopPropagation()}
            >

                <h2 className="text-xl font-bold mb-3">{title}</h2>

                {date && (
                <p className="text-sm text-gray-500 mb-6">
                    {new Date(date).toLocaleDateString()}
                </p>
                )}

                <div className="whitespace-pre-line">
                {content}
                </div>

            </div>
        </div>
    )
}