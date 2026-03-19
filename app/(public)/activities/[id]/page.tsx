import Link from "next/link"

interface Activity {
    id: number
    title: string
    description: string
    image?: string
    date?: string
}

async function getActivity(id: string): Promise<Activity> {
    const res = await fetch(`http://localhost:4000/activities/${id}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        console.warn("Direct activity endpoint failed, trying fallback list endpoint")

        // fallback: fetch all activities then find the one with matching id
        const listRes = await fetch("http://localhost:4000/activities", {
            cache: "no-store"
        })

        if (!listRes.ok) {
            console.error("Failed to fetch activity list", listRes.status)
            return null as any
        }

        const listJson = await listRes.json()
        const activities = listJson?.data ?? listJson

        return activities?.find((a: any) => String(a.id) === String(id)) ?? null
    }

    const json = await res.json()

    // Support both { data: activity } and direct activity object
    return json?.data ?? json
}

export default async function ActivityDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const activity = await getActivity(id)

    if (!activity) {
        return (
            <div className="pt-16 text-center text-gray-500">
                Activity tidak ditemukan
            </div>
        )
    }

    return (
        <div className="pt-16 pb-20 px-6">

            {/* Back Button */}
            <div className="max-w-5xl mx-auto mb-6">
                <Link
                    href="/activities"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Kembali ke Kegiatan
                </Link>
            </div>

            {/* Hero Image */}
            {activity.image && (
                <div className="max-w-5xl mx-auto h-[420px] overflow-hidden rounded-xl shadow-lg">
                <img
                    src={`http://localhost:4000/uploads/${activity.image}`}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                />
                </div>
            )}

            {/* Content */}
            <div className="max-w-3xl mx-auto mt-10">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {activity.title}
                </h1>

                {/* Date */}
                {activity.date && (
                <p className="text-sm text-gray-500 mb-8">
                    {new Date(activity.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    })}
                </p>
                )}

                {/* Article Content */}
                <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                <p>{activity.description}</p>
                </div>

            </div>

        </div>
    )
}