export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
                About Sekolah Riset Wates
            </h2>

            <p className="text-gray-600 leading-relaxed">
                Sekolah Riset Wates merupakan lembaga pendidikan yang menekankan
                pembelajaran berbasis penelitian dan pengembangan berpikir kritis.
                Sekolah ini mendorong siswa untuk menjadi individu yang kreatif,
                inovatif, dan memiliki kemampuan analisis yang kuat dalam
                menghadapi tantangan masa depan.
            </p>

            <p className="text-gray-600 leading-relaxed">
                Melalui pendekatan pembelajaran modern dan lingkungan belajar yang
                mendukung, siswa diajak untuk mengeksplorasi pengetahuan secara
                mendalam serta mengembangkan karakter yang berintegritas.
            </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
            <img
                src="/gambar1.jpeg"
                alt="school"
                className="w-full h-[420px] object-cover rounded-lg"
            />

            {/* GREEN BUTTON CARD */}
            <div className="absolute bottom-0 left-0 bg-blue-800 text-white px-10 py-8 rounded-tr-lg">
                <button className="border border-white px-6 py-3 rounded-md text-sm tracking-wider hover:bg-white hover:text-green-900 transition">
                OUR HISTORY
                </button>
            </div>
            </div>

        </div>
        </section>
    );
}
