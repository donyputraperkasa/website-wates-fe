export default function HeroSection() {
    return (
        <section
        className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
        style={{
            backgroundImage: "url('/gambar1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* overlay agar teks terlihat */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HERO CONTENT */}
        <div className="relative max-w-4xl px-6">
            <h1 className="text-5xl font-bold mb-6">
                SMP BOPKRI 1 WATES
            </h1>

            <p className="text-lg leading-relaxed">
                SMP BOPKRI 1 Wates merupakan sekolah berbasis riset pertama yang ada di Kabupaten Kulon Progo. SMP BOPKRI 1 Wates memiliki tujuan antara lain memberikan pelayanan pendidikan yang profesional berdasarkan kasih; menciptakan lingkungan sekolah yang mendukung proses pembelajaran berbasis riset; menciptakan pembelajaran mandiri dan kontekstual berbasis riset yang menarik, menyenangkan dan berkarakter sesuai minat dan potensi; menghasilkan lulusan yang memiliki life skill dan soft skill yang bermanfaat bagi kehidupan; serta menghasilkan lulusan yang siap berkarya dan berkontribusi bagi masyarakat.
            </p>
        </div>

        {/* lighter gradient so next section color is visible */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[35vh] bg-gradient-to-b from-transparent via-white/40 to-white"></div>
        </section>
    );
}