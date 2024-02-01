import {profileAPI} from "../../api";
import {
    addBookToProfileFailure, addBookToProfileSuccess,
    getProfileBooksSuccess,
    getProfileSuccess,
    removeBookSuccess,
    updateProfileSuccess
} from "./profileActions";

export const getProfileByUsername = (username) => async (dispatch) => {
    try {
        const profile = await profileAPI.getProfileByUsername(username);
        dispatch(getProfileSuccess(profile));
        console.log("Profile fetched successfully: ", profile);
    } catch (error) {
        console.error("Error during getting profile by username: ", error);
    }
}

export const updateProfileByUsername = (username, profileData) => async (dispatch) => {
    try{
        let response = await profileAPI.updateProfileByUsername(username, profileData);
        dispatch(updateProfileSuccess(response));
    }
       catch (error) {
           console.error('Помилка оновлення інформації профілю', error);
       }
}

export const addBookToProfile = (bookToProfileRelationRequest) => async (dispatch) => {
    try {
        const response = await profileAPI.addBookToProfile(bookToProfileRelationRequest);
        if (response === "Book added to profile successfully") {
            dispatch(addBookToProfileSuccess());
            console.log("Book added to profile successfully");
        } else {
            dispatch(addBookToProfileFailure("Failed to add the book to the profile"));
            console.error("Failed to add the book to the profile");
        }
    } catch (error) {
        dispatch(addBookToProfileFailure("An error occurred while adding the book"));
        console.error("Error during adding book to profile: ", error);
    }
};
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
