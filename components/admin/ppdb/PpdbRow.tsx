// components/admin/ppdb/PpdbRow.tsx
import StatusActions from "./StatusActions";

export default function PpdbRow({ item, updateStatus, badgeClass, waLink }: any) {
    return (
        <tr className="border-t">
            <td className="p-3">{item.nama}</td>
            <td className="p-3">{item.email}</td>

            <td className="p-3">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-sm font-medium">{item.kontak}</span>
                    <a
                        href={waLink(item.kontak)}
                        target="_blank"
                        className="text-xs px-3 py-1 bg-green-600 text-white rounded"
                    >
                        Chat WA
                    </a>
                </div>
            </td>

            <td className="p-3">{item.asalSekolah}</td>

            <td className="p-3">
                <StatusActions
                    item={item}
                    updateStatus={updateStatus}
                    badgeClass={badgeClass}
                />
            </td>

            <td className="p-3 text-xs text-gray-600">
                {item.createdAt
                ? new Date(item.createdAt).toLocaleString()
                : "-"}
            </td>
        </tr>
    );
}