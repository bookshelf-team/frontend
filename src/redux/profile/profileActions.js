export const ADD_BOOK_TO_PROFILE_SUCCESS = "ADD_BOOK_TO_PROFILE_SUCCESS";
export const ADD_BOOK_TO_PROFILE_FAILURE = "ADD_BOOK_TO_PROFILE_FAILURE";
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const getProfileSuccess = (profile) => ({
    type: FETCH_PROFILE_SUCCESS,
    payload: profile,
});

export const updateProfileSuccess = (updatedProfileData) => {
    return {
        type: "UPDATE_PROFILE_SUCCESS",
        payload: updatedProfileData
    }
}

export const getProfileBooksSuccess = (book) => {
    return {
        type: "GET_PROFILE_BOOKS_SUCCESS",
        payload: book
    }
}

export const removeBookSuccess = (removedBook) => {
    return {
        type: "REMOVE_BOOK_SUCCESS",
        payload: removedBook
    }
}

export const addBookToProfileSuccess = () => ({
    type: ADD_BOOK_TO_PROFILE_SUCCESS,
});

export const addBookToProfileFailure = (error) => ({
    type: ADD_BOOK_TO_PROFILE_FAILURE,
    payload: error,
});
