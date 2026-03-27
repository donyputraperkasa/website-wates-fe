// components/admin/ppdb/PpdbTable.tsx
import PpdbRow from "./PpdbRow";

export default function PpdbTable({ data, updateStatus, badgeClass, waLink }: any) {
    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Nama</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Kontak</th>
                        <th className="p-3 text-left">Asal Sekolah</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Tanggal</th>
                    </tr>
                </thead>

                <tbody>
                {data.map((item: any) => (
                    <PpdbRow
                        key={item.id}
                        item={item}
                        updateStatus={updateStatus}
                        badgeClass={badgeClass}
                        waLink={waLink}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}