"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Newspaper, Calendar, User } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
        <nav className="w-[92%] max-w-7xl flex items-center justify-between bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg px-8 py-4 transition-all duration-300">

            {/* Logo */}
            <h1 className="text-lg font-bold text-blue-900 tracking-wide">
                SMP BOPKRI 1 WATES
            </h1>

            {/* Menu */}
            <div className="flex items-center gap-6 text-sm font-semibold text-gray-800">

                <Link href="/" className={`flex items-center gap-1 relative transition ${pathname === "/" ? "text-blue-600" : "hover:text-blue-600"}`}>
                    <Home size={16} /> Home
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/about" className={`flex items-center gap-1 relative transition ${pathname === "/about" ? "text-blue-600" : "hover:text-blue-600"}`}>
                    <Info size={16} /> About
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/articles" className={`flex items-center gap-1 relative transition ${pathname.startsWith("/articles") ? "text-blue-600" : "hover:text-blue-600"}`}>
                    <Newspaper size={16} /> Articles
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${pathname.startsWith("/articles") ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/activities" className={`flex items-center gap-1 relative transition ${pathname.startsWith("/activities") ? "text-blue-600" : "hover:text-blue-600"}`}>
                    <Calendar size={16} /> Activities
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${pathname.startsWith("/activities") ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                <Link href="/ppdb" className={`flex items-center gap-1 relative transition ${pathname.startsWith("/ppdb") ? "text-blue-600" : "hover:text-blue-600"}`}>
                    <User size={16} /> PPDB
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${pathname.startsWith("/ppdb") ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

            </div>

            {/* Right */}
            <div className="flex items-center gap-3 text-sm">
                <span className="text-lg">🇮🇩</span>
                <span className="font-medium text-gray-800">Indonesia</span>
            </div>

        </nav>
    </div>
    );
}
