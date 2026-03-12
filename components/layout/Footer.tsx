import { MapPin, Phone, Mail, MessageCircle, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">

            <h3 className="text-lg font-semibold text-gray-800">Hubungi Kami</h3>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 items-center">

                <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Jalan Sugiman 1 Wates </span>
                </div>

                <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>0123456789</span>
                </div>

                <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>smpbopkrisatuwates@mail.com</span>
                </div>

            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 items-center">

                <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span>0123456789</span>
                </div>

                <div className="flex items-center gap-2">
                    <Instagram size={18} />
                    <span>smp bopkri 1 wates</span>
                </div>

                <div className="flex items-center gap-2">
                    <Youtube size={18} />
                    <span>Sekolah Riset Wates</span>
                </div>

                <Link
                    href="/admin-login"
                    className="px-3 py-1.5 text-sm font-medium"
                >
                    Login Admin
                </Link>

            </div>

            <div className="pt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} SMP BOPKRI 1 WATES
            </div>

        </div>
        </footer>
    );
}
