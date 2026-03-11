import api from "@/lib/api";

export const createPpdb = async (data: {
    nama: string;
    email: string;
    kontak: string;
    asalSekolah: string;
    }) => {
    const res = await api.post("/ppdb", data);
    return res.data;
};