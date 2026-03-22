import api from "@/lib/api";

export const getActivities = async () => {
    const res = await api.get("/activities");
    return res.data;
};

export const getActivity = async (id: string) => {
    try {
        const res = await api.get(`/activities/${id}`);
        const json = res.data;
        return json?.data ?? json;
    } catch (error) {
        // fallback: ambil dari list
        const res = await api.get("/activities");
        const activities = res.data?.data ?? res.data;
        return activities.find((a: any) => String(a.id) === String(id));
    }
};

export const createActivity = async (formData: FormData) => {
    const res = await api.post("/activities", formData);
    return res.data;
};

export const updateActivity = async (id: string, formData: FormData) => {
    const res = await api.patch(`/activities/${id}`, formData);
    return res.data;
};

export const deleteActivity = async (id: number) => {
    const res = await api.delete(`/activities/${id}`);
    return res.data;
};