export interface Ppdb {
    id: number;
    nama: string;
    email: string;
    kontak: string;
    asalSekolah: string;
    status: "pending" | "diterima" | "ditolak";
    createdAt: string;
}