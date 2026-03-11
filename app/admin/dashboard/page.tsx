"use client";

import Link from "next/link";
import { FileText, CalendarDays, Users } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="relative min-h-screen px-8 py-10">

        {/* Background Image */}
        <div
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ backgroundImage: "url('/gambar1.jpeg')" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-10">

            {/* Header */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600 text-sm mt-1">
                    Selamat datang di dashboard admin. Kelola konten website sekolah dari sini.
                </p>
            </div>

            {/* Menu Cards */}
            <div className="grid md:grid-cols-3 gap-6">

            <Link
                href="/admin/articles"
                className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
            >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FileText size={22} />
                </div>
                <h2 className="font-semibold text-lg">Manage Articles</h2>
                <p className="text-sm text-gray-600">
                Tambah, edit, atau hapus artikel berita sekolah.
                </p>
            </Link>

            <Link
                href="/admin/activities"
                className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
            >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                    <CalendarDays size={22} />
                </div>
                <h2 className="font-semibold text-lg">Manage Activities</h2>
                <p className="text-sm text-gray-600">
                Kelola kegiatan sekolah dan dokumentasi aktivitas.
                </p>
            </Link>

            <Link
                href="/admin/ppdb"
                className="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
            >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                    <Users size={22} />
                </div>
                <h2 className="font-semibold text-lg">Manage PPDB</h2>
                <p className="text-sm text-gray-600">
                Lihat dan kelola data pendaftaran siswa baru.
                </p>
            </Link>

            </div>

            {/* Info Section */}
            <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="font-semibold mb-2 text-gray-800">Quick Info</h2>
            <p className="text-sm text-gray-600">
                Gunakan menu di atas untuk mengelola konten website seperti artikel,
                kegiatan sekolah, dan data PPDB. Pastikan setiap konten yang
                dipublikasikan telah diperiksa dengan baik.
            </p>
            </div>

        </div>
        </div>
    );
}
