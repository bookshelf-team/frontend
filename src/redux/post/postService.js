import {postAPI} from "../../api";

export const getAllPosts = async () => {
    try {
        const posts = await postAPI.getAllPosts();
        console.log("Успішно отримано всі пости:", posts.data);
        return posts.data;
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
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
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

export const getAllPostsByUsername = async (username) => {
    try {
        const response = await postAPI.getAllPostsByUsername(username)
        console.log("Успішно взяті пости за іменем:", response.data);
        return response.data;
    } catch (error) {
        console.error("Помилка при взятті списку постів користувача:", error);
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
