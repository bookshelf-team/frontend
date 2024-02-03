import {postAPI} from "../../api";

export const getAllPosts = async () => {
    try {
        const posts = await postAPI.getAllPosts();
        console.log("Успішно отримано всі пости:", posts);
        return posts;
    } catch (error) {
        console.error("Помилка при отриманні всіх постів:", error);
        throw error;
    }
};

export const getPostById = async (id) => {
    try {
        const post = await postAPI.getPostById(id);
        console.log("Успішно отримано пост за ID:", post);
        return post;
    } catch (error) {
        console.error("Помилка при отриманні посту за ID:", error);
        throw error;
    }
};

export const addPost = async (postData) => {
    try {
        const response = await postAPI.addPost(postData);
        console.log("Успішно додано пост:", response.data);
        return response.data;
    } catch (error) {
        console.error("Помилка при додаванні посту:", error);
        throw error;
    }
};

export const updatePostById = async (id, postData) => {
    try {
        const response = await postAPI.updatePostById(id, postData);
        console.log("Успішно оновлено пост за ID:", response.data);
        return response.data;
    } catch (error) {
        console.error("Помилка при оновленні посту за ID:", error);
        throw error;
    }
};

export const deletePostById = async (id) => {
    try {
        const response = await postAPI.deletePostById(id);
        console.log("Успішно видалено пост за ID:", response.data);
        return response.data;
    } catch (error) {
        console.error("Помилка при видаленні посту за ID:", error);
        throw error;
    }
};
