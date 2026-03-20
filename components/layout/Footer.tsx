import { MapPin, Mail, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 bg-gradient-to-b from-white to-gray-100 border-t">
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-6">
                Hubungi Kami
            </h3>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">

            <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-blue-600 transition">
                    <MapPin size={18} />
                    <span>Jalan Sugiman 1 Wates</span>
                </div>

                <div className="flex items-center gap-3 hover:text-blue-600 transition">
                    <Mail size={18} />
                    <span>smpbopkriwates@gmail.com</span>
                </div>
            </div>

            {/* Social */}
            <div className="space-y-4">

                <a
                    href="https://wa.me/6285169757490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-600 transition"
                >
                    <MessageCircle size={18} />
                    <span>Chat WhatsApp</span>
                </a>

                <a
                    href="https://www.instagram.com/smpbopkriwates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-pink-600 transition"
                >
                    <Instagram size={18} />
                    <span>@smpbopkrisatuwates</span>
                </a>

                <Link
                    href="/admin-login"
                    className="flex items-center font-semibold gap-3 text-gray-600 hover:text-blue-600 transition mt-2"
                >
                    Login Admin
                </Link>
            </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 pt-6 border-t text-xs font-semibold text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
                <a
                    href="https://portofolio-ku-gold.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    Created by : mas dony putra perkasa
                </a>
            </div>
        </div>
        </footer>
    );
}
