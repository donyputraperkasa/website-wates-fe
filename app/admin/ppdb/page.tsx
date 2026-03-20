"use client";

import { useEffect, useState } from "react";
import FilterBar from "@/components/admin/ppdb/FilterBar";
import PpdbTable from "@/components/admin/ppdb/PpdbTable";

export default function PpdbPage() {
    const [data, setData] = useState<any[]>([]);
    const [filter, setFilter] = useState<string>("ALL");

    const filteredData = Array.isArray(data)
        ? data.filter((item) => {
            if (filter === "ALL") return true;
            return (item.status || "PENDING") === filter;
            })
        : [];

    // Safety check for API URL
    if (!process.env.NEXT_PUBLIC_API_URL) {
        console.error("NEXT_PUBLIC_API_URL belum diset");
    }

    async function fetchData() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ppdb/public`);
        const json = await res.json();

        if (Array.isArray(json)) {
            setData(json);
        } else if (json.data && Array.isArray(json.data)) {
            setData(json.data);
        } else {
            setData([]);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function updateStatus(id: number, status: string) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ppdb/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });

        fetchData();
    }

    const badgeClass = (status: string) => {
        const s = (status || "PENDING").toUpperCase();
        if (s === "DITERIMA") return "bg-green-100 text-green-700";
        if (s === "DITOLAK") return "bg-red-100 text-red-700";
        return "bg-yellow-100 text-yellow-700";
    };

    const waLink = (phone?: string) => {
        if (!phone) return "#";
        const normalized = phone.replace(/[^0-9]/g, "");
        const with62 = normalized.startsWith("0")
        ? "62" + normalized.slice(1)
        : normalized.startsWith("62")
        ? normalized
        : "62" + normalized;
        return `https://wa.me/${with62}`;
    };
    return (
<div className="p-10">
    <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Data PPDB</h1>
        <FilterBar filter={filter} setFilter={setFilter} />
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden hidden md:block">
      <PpdbTable
          data={filteredData}
          updateStatus={updateStatus}
          badgeClass={badgeClass}
          waLink={waLink}
      />
    </div>

    <div className="md:hidden space-y-4">
      {filteredData.map((item: any) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow space-y-2">
          <p><span className="font-semibold">Nama:</span> {item.nama}</p>
          <p><span className="font-semibold">Email:</span> {item.email}</p>
          <p><span className="font-semibold">Kontak:</span> {item.kontak}</p>
          <p><span className="font-semibold">Asal:</span> {item.asalSekolah}</p>

          <div className="flex items-center justify-between mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeClass(item.status)}`}>
              {item.status || "PENDING"}
            </span>

            <a
              href={waLink(item.kontak)}
              target="_blank"
              className="text-xs px-3 py-1 bg-green-600 text-white rounded"
            >
              Chat WA
            </a>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => updateStatus(item.id, "PENDING")}
              className={`flex-1 py-1 rounded ${item.status === "PENDING" ? "bg-yellow-500 text-white" : "bg-gray-100"}`}
            >
              Pending
            </button>

            <button
              onClick={() => updateStatus(item.id, "DITERIMA")}
              className={`flex-1 py-1 rounded ${item.status === "DITERIMA" ? "bg-green-600 text-white" : "bg-gray-100"}`}
            >
              Terima
            </button>

            <button
              onClick={() => updateStatus(item.id, "DITOLAK")}
              className={`flex-1 py-1 rounded ${item.status === "DITOLAK" ? "bg-red-600 text-white" : "bg-gray-100"}`}
            >
              Tolak
            </button>
          </div>

          <p className="text-xs text-gray-500">
            {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
          </p>
        </div>
      ))}
    </div>
    </div>
    );
}