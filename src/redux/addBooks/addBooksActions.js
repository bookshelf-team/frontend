export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const EDIT_BOOK_BY_ID_SUCCESS = "EDIT_BOOK_BY_ID_SUCCESS";
export const EDIT_BOOK_BY_ISBN_SUCCESS = "EDIT_BOOK_BY_ISBN_SUCCESS";
export const DELETE_BOOK_BY_ID_SUCCESS = "DELETE_BOOK_BY_ID_SUCCESS";
export const DELETE_BOOK_BY_ISBN_SUCCESS = "DELETE_BOOK_BY_ISBN_SUCCESS";
export const API_ERROR = "API_ERROR";

export const addBookSuccess = (book) => {
    try {
        return {
            type: ADD_BOOK_SUCCESS,
            payload: book
        }
    } catch (error) {
        return {
            type: API_ERROR,
            payload: error.message
        }
    }
}

export const editBookByIdSuccess = (book) => {
    try {
        return {
            type: EDIT_BOOK_BY_ID_SUCCESS,
            payload: book
        }
    } catch (error) {
        return {
            type: API_ERROR,
            payload: error.message
        }
    }
}

export const editBookByIsbnSuccess = (book) => {
    try {
        return {
            type: EDIT_BOOK_BY_ISBN_SUCCESS,
            payload: book
        }
    } catch (error) {
        return {
            type: API_ERROR,
            payload: error.message
        }
    }
}

export const deleteBookByIdSuccess = (id) => {
    try {
        return {
            type: DELETE_BOOK_BY_ID_SUCCESS,
            payload: id
        }
    } catch (error) {
        return {
            type: API_ERROR,
            payload: error.message
        }
    }
}

export const deleteBookByIsbnSuccess = (isbn) => {
    try {
        return {
            type: DELETE_BOOK_BY_ISBN_SUCCESS,
            payload: isbn
        }
    } catch (error) {
        return {
            type: API_ERROR,
            payload: error.message
        }
    }
}