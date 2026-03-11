"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    CalendarDays,
    Users,
    LogOut,
    School,
    ExternalLink,
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Articles",
        href: "/admin/articles",
        icon: FileText,
    },
    {
        name: "Activities",
        href: "/admin/activities",
        icon: CalendarDays,
    },
    {
        name: "PPDB",
        href: "/admin/ppdb",
        icon: Users,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col relative z-20">
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-800">
                <School size={28} className="text-blue-400" />
                <span className="font-semibold text-lg">Admin Panel</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 mb-4 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition"
                >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">View Website</span>
                </Link>
                {menuItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                        ${
                        active
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                );
                })}

            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-800">
                <button
                className="bg-blue-300 flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-900 font-bold hover:bg-red-600 hover:text-white transition"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/admin-login";
                }}
                >
                <LogOut size={20} />
                <span className="text-sm font-bold">Logout</span>
                </button>
            </div>
        </aside>
    );
}