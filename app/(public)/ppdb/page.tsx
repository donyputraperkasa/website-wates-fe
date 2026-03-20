import PpdbForm from "@/components/ppdb/PpdbForm";

export default function PpdbPage() {
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

            <PpdbForm />

        </div>
        </div>
    );
}