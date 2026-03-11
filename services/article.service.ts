import api from "@/lib/api";

export const getArticles = async () => {
    const res = await api.get("/articles");
    return res.data;
};

export const getArticle = async (id: string) => {
    const res = await api.get(`/articles/${id}`);
    return res.data;
};

export const createArticle = async (data: {
    title: string;
    content: string;
    }) => {
    const res = await api.post("/articles", data);
    return res.data;
};