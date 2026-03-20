"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
        if (!process.env.NEXT_PUBLIC_API_URL) {
            throw new Error("API URL tidak ditemukan. Pastikan NEXT_PUBLIC_API_URL sudah di set.");
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Username atau password salah");
        }

        const data = await res.json();

        localStorage.setItem("token", data.access_token);

        router.push("/admin/dashboard");
        } catch (err: any) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-center mb-6">
            Admin Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="username"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                />
            </div>

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                {loading ? "Logging in..." : "Login"}
            </button>
            </form>
        </div>
        </div>
    );
}