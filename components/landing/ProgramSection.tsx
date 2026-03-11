export default function ProgramSection() {
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">
            Program Unggulan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
                Laboratorium Riset
            </h3>
            <p className="text-gray-600 text-sm">
                Siswa melakukan penelitian ilmiah secara langsung.
            </p>
            </div>

            <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
                Publikasi Karya
            </h3>
            <p className="text-gray-600 text-sm">
                Hasil penelitian siswa dipublikasikan.
            </p>
            </div>

            <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
                Kolaborasi Akademik
            </h3>
            <p className="text-gray-600 text-sm">
                Kerja sama dengan institusi pendidikan.
            </p>
            </div>

        </div>
        </section>
    );
}