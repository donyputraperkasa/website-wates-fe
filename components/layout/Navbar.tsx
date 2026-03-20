"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Newspaper, Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
        <nav className="w-[92%] max-w-7xl flex items-center justify-between bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg px-4 md:px-8 py-3 md:py-4 transition-all duration-300">

            {/* Logo */}
            <h1 className="text-lg font-bold text-blue-900 tracking-wide">
                SMP BOPKRI 1 WATES
            </h1>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-800">

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

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-lg border border-gray-200 bg-white/60 backdrop-blur"
            >
                {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Right */}
            <div className="hidden md:flex items-center gap-3 text-sm">
                <span className="text-lg">🇮🇩</span>
                <span className="font-medium text-gray-800">Indonesia</span>
            </div>

        </nav>
        {open && (
            <>
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in zoom-in-90 duration-300"
                    onClick={() => setOpen(false)}
                />

                {/* Mobile Menu */}
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6 space-y-4">

                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                    >
                        <Home size={18} /> Home
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname === "/about" ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                    >
                        <Info size={18} /> About
                    </Link>

                    <Link
                        href="/articles"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/articles") ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                    >
                        <Newspaper size={18} /> Articles
                    </Link>

                    <Link
                        href="/activities"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/activities") ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                    >
                        <Calendar size={18} /> Activities
                    </Link>

                    <Link
                        href="/ppdb"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 text-base ${pathname.startsWith("/ppdb") ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                    >
                        <User size={18} /> PPDB
                    </Link>

                </div>
            </>
        )}
    </div>
    );
}
