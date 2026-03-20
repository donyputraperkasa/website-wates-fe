"use client";

import { useState } from "react";
import { User, Mail, Phone, School } from "lucide-react";
import InputField from "@/components/ppdb/InputField";
import { createPpdb } from "@/services/ppdb.service";
import { Ppdb } from "@/types";

export default function PpdbForm() {
    const [form, setForm] = useState<
        Pick<Ppdb, "nama" | "email" | "kontak" | "asalSekolah">
    >({
        nama: "",
        email: "",
        kontak: "",
        asalSekolah: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof typeof form, string>>
    >({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validate() {
        const newErrors: Partial<Record<keyof typeof form, string>> = {};

        if (!form.nama.trim()) newErrors.nama = "Nama wajib diisi";

        if (!form.email.trim()) {
        newErrors.email = "Email wajib diisi";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = "yang bener laaaa ngisi nya -____-";
        }

        if (!form.kontak.trim()) {
        newErrors.kontak = "No HP wajib diisi";
        } else if (!/^[0-9+\-()\s]{8,}$/.test(form.kontak)) {
        newErrors.kontak = "nomor wa nya yang bener kocak -____- gabisa di chat ntarrr";
        }

        if (!form.asalSekolah.trim())
        newErrors.asalSekolah = "Asal sekolah wajib diisi";

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
        <>
        {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl border border-green-200 animate-pulse">
                Yaaayyyy Pendaftaran berhasil 🎉 Nanti akan dihubungi oleh sekolah
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
            <InputField
            icon={User}
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="pergi ke taman memetik bunga, isi nama lengkap yaa"
            error={errors.nama}
            />

            <InputField
            icon={Mail}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="punya email kan? punya dongs masaa gapunya :)"
            error={errors.email}
            />

            <InputField
            icon={Phone}
            name="kontak"
            value={form.kontak}
            onChange={handleChange}
            placeholder="nomor wa nya jangan lupa, yaa kali ga punya"
            error={errors.kontak}
            />

            <InputField
            icon={School}
            name="asalSekolah"
            value={form.asalSekolah}
            onChange={handleChange}
            placeholder="sekolah asalnya dari mana (ehh, lulus kan tapi?)"
            error={errors.asalSekolah}
            />

            <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-95"
            >
            {loading ? (
                <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
                </span>
            ) : (
                "Daftar"
            )}
            </button>
        </form>
        </>
    );
}