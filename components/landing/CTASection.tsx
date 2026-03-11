import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
            Bergabung Bersama Kami
        </h2>

        <p className="mb-8">
            Daftarkan diri Anda sekarang dan jadilah bagian dari sekolah berbasis riset.
        </p>

        <Link
            href="/ppdb"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
            Daftar PPDB
        </Link>
        </section>
    );
}