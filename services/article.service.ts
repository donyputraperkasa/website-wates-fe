import api from "@/lib/api";

export const getArticles = async () => {
    const res = await api.get("/articles");
    return res.data;
};

export const getArticle = async (id: string) => {
    const res = await api.get(`/articles/${id}`);
    const json = res.data;
    return json?.data ?? json;
};

export const createArticle = async (formData: FormData) => {
    const res = await api.post("/articles", formData);
    return res.data;
};

export const updateArticle = async (id: string, formData: FormData) => {
    const res = await api.patch(`/articles/${id}`, formData);
    return res.data;
};

export const deleteArticle = async (id: number) => {
    const res = await api.delete(`/articles/${id}`);
    return res.data;
};