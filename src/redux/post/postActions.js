import * as postService from "./postService";

export const ActionTypes = {
    GET_ALL_POSTS_SUCCESS: "GET_ALL_POSTS_SUCCESS",
    GET_POST_BY_ID_SUCCESS: "GET_POST_BY_ID_SUCCESS",
    GET_ALL_POSTS_BY_USERNAME_SUCCESS: "GET_ALL_POSTS_BY_USERNAME_SUCCESS",
    ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
    UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
    DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
    API_ERROR: "API_ERROR",
};

export const getAllPosts = () => async (dispatch) => {
    try {
        const posts = await postService.getAllPosts();
        dispatch({
            type: ActionTypes.GET_ALL_POSTS_SUCCESS,
            payload: posts,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};

export const getPostById = (id) => async (dispatch) => {
    try {
        const post = await postService.getPostById(id);
        dispatch({
            type: ActionTypes.GET_POST_BY_ID_SUCCESS,
            payload: post,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};

export const getAllPostsByUsername = (username) => async (dispatch) => {
    try {
        const posts = await postService.getAllPostsByUsername(username);
        dispatch({
            type: ActionTypes.GET_ALL_POSTS_BY_USERNAME_SUCCESS,
            payload: posts,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};

export const addPost = (postData) => async (dispatch) => {
    try {
        const response = await postService.addPost(postData);
        dispatch({
            type: ActionTypes.ADD_POST_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};

export const updatePostById = (id, postData) => async (dispatch) => {
    try {
        const response = await postService.updatePostById(id, postData);
        dispatch({
            type: ActionTypes.UPDATE_POST_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};

export const deletePostById = (id) => async (dispatch) => {
    try {
        await postService.deletePostById(id);
        dispatch({
            type: ActionTypes.DELETE_POST_SUCCESS,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.API_ERROR,
            payload: error.message,
        });
    }
};
