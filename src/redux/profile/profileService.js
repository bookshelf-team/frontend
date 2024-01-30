import {profileAPI} from "../../api";
import {
    addBookSuccess,
    getProfileBooksSuccess,
    getProfileSuccess,
    removeBookSuccess,
    updateProfileSuccess
} from "./profileActions";

export const getProfileByUsername = (username) => async (dispatch) => {
    try {
        let response = await profileAPI.getProfileByUsername(username);
        dispatch(getProfileSuccess(response.data));
    } catch (error) {
        console.error("Error during getting profile by username: " + error);
    }
}

export const updateProfileByUsername = (username, profileData) => async (dispatch) => {
        let response = await profileAPI.updateProfileByUsername(username, profileData);
        dispatch(updateProfileSuccess(response.data));
}

export const addBookToProfile = (bookToProfileRelationRequest) => async (dispatch) => {
    try {
        let response = await profileAPI.addBookToProfile(bookToProfileRelationRequest);
        dispatch(addBookSuccess(response.data));
    } catch (error) {
        console.error("Error during adding book to profile: " + error);
        throw error;
    }
}

export const getProfileBooks = (username) => async (dispatch) => {
    try {
        let response = await profileAPI.getProfileBooks(username);
        dispatch(getProfileBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting profile books: " + error);
    }
}

export const removeBookFromProfile = (username, bookId) => async (dispatch) => {
    try {
        let response = await profileAPI.removeBookFromProfile(username, bookId);
        dispatch(removeBookSuccess(response.data));
    } catch (error) {
        console.error("Error during getting profile books: " + error);
    }
}