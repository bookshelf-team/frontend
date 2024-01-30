export const getProfileSuccess = (profileData) => {
    return {
        type: "GET_PROFILE_SUCCESS",
        payload: profileData
    }
}

export const updateProfileSuccess = (updatedProfileData) => {
    return {
        type: "UPDATE_PROFILE_SUCCESS",
        payload: updatedProfileData
    }
}

export const addBookSuccess = (addedBook) => {
    return {
        type: "ADD_BOOK_SUCCESS",
        payload: addedBook
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