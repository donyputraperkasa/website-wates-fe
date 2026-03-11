import api from "@/lib/api";

export const getActivities = async () => {
    const res = await api.get("/activities");
    return res.data;
};

export const createActivity = async (data: {
    title: string;
    description: string;
    }) => {
    const res = await api.post("/activities", data);
    return res.data;
};