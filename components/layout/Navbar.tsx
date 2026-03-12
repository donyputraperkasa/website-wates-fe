import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
            <nav className="w-[92%] max-w-7xl flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl shadow-md px-8 py-4 border border-gray-200">
                
                <h1 className="text-lg font-bold text-blue-900 tracking-wide">
                    SMP BOPKRI 1 WATES
                </h1>

                <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/articles">Articles</Link>
                    <Link href="/activities">Activities</Link>
                    <Link href="/ppdb">PPDB</Link>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span>🇮🇩</span>
                    <span className="font-medium">Indonesia</span>
                </div>

            </nav>
        </div>
    );
}
