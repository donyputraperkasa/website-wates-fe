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

    async function fetchData() {
        const res = await fetch("http://localhost:4000/ppdb/public");
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
        await fetch(`http://localhost:4000/ppdb/${id}`, {
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

    <PpdbTable
        data={filteredData}
        updateStatus={updateStatus}
        badgeClass={badgeClass}
        waLink={waLink}
    />
    </div>
    );
}