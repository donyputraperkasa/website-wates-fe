"use client";

import { useState } from "react";
import { User, Mail, Phone, School } from "lucide-react";
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
    const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validate() {
        const newErrors: Partial<Record<keyof typeof form, string>> = {};

        if (!form.nama.trim()) newErrors.nama = "Nama wajib diisi";
        if (!form.email.trim()) {
            newErrors.email = "Email wajib diisi";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Format email tidak valid";
        }

        if (!form.kontak.trim()) {
            newErrors.kontak = "No HP wajib diisi";
        } else if (!/^[0-9+\-()\s]{8,}$/.test(form.kontak)) {
            newErrors.kontak = "Format No HP tidak valid";
        }

        if (!form.asalSekolah.trim()) newErrors.asalSekolah = "Asal sekolah wajib diisi";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validate()) return;

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
            setErrors({});
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center px-6 py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100">
            <div className="w-full max-w-xl mt-10 bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-blue-100">

                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Formulir Peserta Didik Baru
                </h1>
                <p className="text-gray-500 mb-4 text-center">
                    Isi form berikut untuk mendaftar di SMP BOPKRI 1 Wates
                </p>
                <div className="mb-4 w-full h-1 bg-blue-600 rounded-full" />

                {success && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl border border-green-200 animate-pulse">
                        Yaaayyyy Pendaftaran berhasil 🎉 Nanti akan dihubungi oleh sekolah
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">

                    <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-600" />
                        <input
                            name="nama"
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="pergi ke taman memetik bunga, isi nama lengkap yaa"
                            className={`w-full border ${errors.nama ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"} focus:ring-2 outline-none pl-10 py-3 rounded-xl transition-all duration-300 shadow-sm focus:shadow-md`}
                            required
                        />
                    </div>
                    {errors.nama && <p className="text-sm text-red-500 -mt-2">{errors.nama}</p>}

                    <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-600" />
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="punya email kan? punya dongs masaa gapunya :)"
                            className={`w-full border ${errors.email ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"} focus:ring-2 outline-none pl-10 py-3 rounded-xl transition-all duration-300 shadow-sm focus:shadow-md`}
                            required
                        />
                    </div>
                    {errors.email && <p className="text-sm text-red-500 -mt-2">{errors.email}</p>}

                    <div className="relative group">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-600" />
                        <input
                            name="kontak"
                            value={form.kontak}
                            onChange={handleChange}
                            placeholder="nomor wa nya jangan lupa, yaa kali ga punya"
                            className={`w-full border ${errors.kontak ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"} focus:ring-2 outline-none pl-10 py-3 rounded-xl transition-all duration-300 shadow-sm focus:shadow-md`}
                            required
                        />
                    </div>
                    {errors.kontak && <p className="text-sm text-red-500 -mt-2">{errors.kontak}</p>}

                    <div className="relative group">
                        <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-600" />
                        <input
                            name="asalSekolah"
                            value={form.asalSekolah}
                            onChange={handleChange}
                            placeholder="sekolah asalnya dari mana (ehh, lulus kan tapi?)"
                            className={`w-full border ${errors.asalSekolah ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"} focus:ring-2 outline-none pl-10 py-3 rounded-xl transition-all duration-300 shadow-sm focus:shadow-md`}
                            required
                        />
                    </div>
                    {errors.asalSekolah && <p className="text-sm text-red-500 -mt-2">{errors.asalSekolah}</p>}

                    <button
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-95"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Loading...
                            </span>
                        ) : "Daftar"}
                    </button>

                </form>
            </div>
        </div>
    );
}