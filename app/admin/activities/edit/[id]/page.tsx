"use client";

import { useParams } from "next/navigation";
import ActivitiesHeader from "@/components/admin/activities/ActivitiesHeader";
import ActivityForm from "@/components/admin/activities/form/EditActivityHeader";

export default function EditActivityPage() {
    const params = useParams();
    const id = params?.id as string;

    return (
        <div className="max-w-5xl mx-auto py-12 space-y-8">

        <ActivitiesHeader
            title="Edit Activity"
            description="Perbarui informasi kegiatan."
        />

        <ActivityForm mode="edit" activityId={id} />

        </div>
    );
}