import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 min-h-screen bg-gray-50">{children}</main>
        </div>
    );
}