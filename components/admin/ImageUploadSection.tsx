"use client";

interface Props {
    label: string;
    preview: string | null;
    currentImage: string | null;
    setImage: (file: File | null) => void;
    setPreview: (url: string | null) => void;
}

export default function ImageUploadSection({
    label,
    preview,
    currentImage,
    setImage,
    setPreview,
}: Props) {
    return (
        <div className="space-y-3 border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">

        <label className="text-sm font-semibold text-gray-700">
            {label}
        </label>

        <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600"
            onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setImage(file);

            if (file) {
                setPreview(URL.createObjectURL(file));
            }
            }}
        />

        <div className="flex gap-6 pt-2">

            {preview && (
            <div>
                <p className="text-xs text-gray-400 mb-1">
                New Image Preview
                </p>

                <img
                src={preview}
                className="w-48 h-32 object-cover rounded-lg border"
                />
            </div>
            )}

            {!preview && currentImage && (
            <div>
                <p className="text-xs text-gray-400 mb-1">
                Current Image
                </p>

                <img
                src={`http://localhost:4000/${currentImage}`}
                className="w-48 h-32 object-cover rounded-lg border"
                />
            </div>
            )}

        </div>
        </div>
    );
}