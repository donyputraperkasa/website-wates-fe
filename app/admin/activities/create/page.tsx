"use client";

import ActivitiesHeader from "@/components/admin/activities/ActivitiesHeader";
import ActivityForm from "@/components/admin/activities/form/EditActivityHeader";

export default function CreateActivityPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 space-y-8">

        <ActivitiesHeader
            title="Create Activity"
            description="Tambahkan kegiatan baru untuk website sekolah."
        />

        <ActivityForm mode="create" />

        </div>
    );
}