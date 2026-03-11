import { HeartHandshake, Brain, HandHeart, BadgeCheck, RefreshCcw, Users } from "lucide-react";

const values = [
    {
        title: "Compassion",
        description:
        "Menumbuhkan kepedulian terhadap sesama dan lingkungan. Siswa didorong untuk aktif dalam kegiatan sosial, kolaborasi, serta memiliki empati dalam kehidupan sehari‑hari.",
        icon: HeartHandshake,
    },
    {
        title: "Competence",
        description:
        "Mengembangkan kemampuan akademik dan non‑akademik melalui pembelajaran berbasis riset, pemecahan masalah, serta penguatan keterampilan berpikir kritis.",
        icon: Brain,
    },
    {
        title: "Conscience",
        description:
        "Membentuk karakter yang jujur, bertanggung jawab, dan memiliki integritas sehingga siswa mampu mengambil keputusan yang benar dan bermakna.",
        icon: HandHeart,
    },
    {
        title: "Commitment",
        description:
        "Mendorong siswa untuk memiliki komitmen dalam belajar, berkarya, dan berkontribusi bagi masyarakat dengan semangat disiplin dan tanggung jawab.",
        icon: BadgeCheck,
    },
    {
        title: "Consistency",
        description:
        "Menanamkan kebiasaan untuk melakukan hal yang benar secara konsisten melalui ketekunan, refleksi diri, dan pembelajaran berkelanjutan.",
        icon: RefreshCcw,
    },
    {
        title: "Leadership",
        description:
        "Mengembangkan kemampuan kepemimpinan siswa agar mampu bekerja sama, mengambil inisiatif, serta menjadi teladan dalam berbagai kegiatan sekolah.",
        icon: Users,
    },
];

export default function CoreValue() {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-blue-800 mb-6">
                    Core Values
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
                Sekolah Riset Wates mengembangkan karakter siswa melalui nilai inti
                yang menekankan kepedulian, kompetensi, integritas, dan kepemimpinan.
                Nilai‑nilai ini menjadi fondasi dalam membentuk generasi yang kritis,
                kreatif, dan mampu memberikan kontribusi positif bagi masyarakat.
                </p>

                <h3 className="text-5xl font-bold text-blue-800 mb-20">1L + 5C</h3>

                <div className="grid md:grid-cols-3 gap-16">
                {values.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <div key={index} className="flex flex-col items-center text-center space-y-4">
                        <Icon className="text-blue-800" size={40} />

                        <h4 className="text-lg font-semibold text-gray-800">
                        {item.title}
                        </h4>

                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                        {item.description}
                        </p>
                    </div>
                    );
                })}
                </div>

            </div>
        </section>
    );
}