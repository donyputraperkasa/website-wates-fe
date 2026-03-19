"use client";

import { useState } from "react";
import { createPpdb } from "@/services/ppdb.service";
import { Ppdb } from "@/types";

export default function PpdbPage() {
    const [form, setForm] = useState<Pick<Ppdb, "nama" | "email" | "kontak" | "asalSekolah">>({
        nama: "",
        email: "",
        kontak: "",
        asalSekolah: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
        await createPpdb(form);

        setSuccess(true);
        setForm({
            nama: "",
            email: "",
            kontak: "",
            asalSekolah: "",
        });
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    }

    return (
        <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur border border-gray-200 p-10 rounded-3xl shadow-xl">

                <h1 className="text-3xl font-bold mb-2 text-center">
                    Formulir Peserta Didik Baru
                </h1>
                <p className="text-gray-500 mb-6 text-center">
                    Isi form berikut untuk mendaftar di SMP *******
                </p>
                <div className="mb-6 w-full h-1 bg-blue-600 rounded-full" />

                {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl border border-green-200">
                    Pendaftaran berhasil 🎉
                </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Nama Lengkap"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
                    required
                />

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
                    required
                />

                <input
                    name="kontak"
                    value={form.kontak}
                    onChange={handleChange}
                    placeholder="No HP"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
                    required
                />

                <input
                    name="asalSekolah"
                    value={form.asalSekolah}
                    onChange={handleChange}
                    placeholder="Asal Sekolah"
                    className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
                    required
                />

                <button
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                >
                    {loading ? "Loading..." : "Daftar"}
                </button>

                </form>
            </div>
        </div>
    );
}