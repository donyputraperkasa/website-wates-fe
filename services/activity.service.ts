import api from "@/lib/api";

export const getActivities = async () => {
    const res = await api.get("/activities");
    return res.data;
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