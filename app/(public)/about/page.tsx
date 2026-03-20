"use client";

import { Microscope, Lightbulb, Rocket, Brain } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">

        {/* HERO */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Sekolah Berbasis Riset
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Membangun generasi masa depan melalui pembelajaran berbasis riset, eksplorasi, dan inovasi untuk menghadapi tantangan dunia nyata.
                </p>
            </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Sekolah yang Berbeda
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sekolah Riset adalah sekolah menengah modern yang berfokus pada pembelajaran berbasis eksplorasi dan penelitian. Siswa tidak hanya belajar teori, tetapi juga dilatih untuk berpikir kritis, kreatif, an inovatif dalam menyelesaikan masalah nyata.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Dengan pendekatan ini, kami membentuk siswa yang siap menghadapi tantangan global dan memiliki kemampuan berpikir tingkat tinggi.
                    </p>
                </div>

                <div className="bg-blue-50 rounded-3xl p-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Keunggulan Kami
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                            <Microscope className="w-5 h-5 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-800" />
                            Pembelajaran berbasis riset & eksplorasi
                        </li>
                        <li className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                            <Lightbulb className="w-5 h-5 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-800" />
                            Project & problem based learning
                        </li>
                        <li className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                            <Rocket className="w-5 h-5 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-800" />
                            Fokus pada inovasi dan kreativitas
                        </li>
                        <li className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                            <Brain className="w-5 h-5 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-800" />
                            Penguatan critical thinking & analytical skill
                        </li>
                    </ul>
                </div>

            </div>
        </section>

        {/* VALUES */}
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    Core Values
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2">Research Mindset</h3>
                        <p className="text-gray-600 text-sm">
                            Siswa dilatih untuk selalu ingin tahu, menganalisis, dan mencari solusi berbasis data.
                        </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2">Global Communication</h3>
                        <p className="text-gray-600 text-sm">
                            Penguatan kemampuan komunikasi sebagai bagian dari kolaborasi, presentasi, dan penyampaian ide berbasis riset.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                        <p className="text-gray-600 text-sm">
                            Mendorong siswa untuk menciptakan solusi kreatif dan inovatif ntuk masa depan.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center bg-blue-600 text-white rounded-3xl p-12">
                <h2 className="text-3xl font-bold mb-4">
                    Bergabung Bersama Kami
                </h2>
                <p className="text-blue-100 mb-6">
                    Jadilah bagian dari sekolah yang membentuk masa depan melalui riset
                    dan inovasi.
                </p>
                <a
                    href="/ppdb"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                    Daftar Sekarang
                </a>
            </div>
        </section>

        </div>
    );
}