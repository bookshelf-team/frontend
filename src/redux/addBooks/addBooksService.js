import {bookAPI} from "../../api";
import {
    addBookSuccess,
    deleteBookByIdSuccess,
    deleteBookByIsbnSuccess,
    editBookByIdSuccess,
    editBookByIsbnSuccess
} from "./addBooksActions";

export const addBook = (bookData) => async (dispatch) => {
    try {
        const response = await bookAPI.addBook(bookData);
        dispatch(addBookSuccess(response.data));
        console.log(response.data);
    } catch (error) {
        console.error("Error during adding book: " + error);
        throw error;
    }
}

export const editBookById = (id, bookData) => async (dispatch) => {
    try {
        const response = await bookAPI.editBookById(id, bookData);
        dispatch(editBookByIdSuccess(response.data));
    } catch (error) {
        console.error("Error during editing book by id: " + error);
        throw error;
    }
}

export const editBookByIsbn = (isbn, bookData) => async (dispatch) => {
    try {
        const response = await bookAPI.editBookByIsbn(isbn, bookData);
        dispatch(editBookByIsbnSuccess(response.data));
        console.log(response.data);
    } catch (error) {
        console.error("Error during editing book by isbn: " + error);
        throw error;
    }
}

export const deleteBookById = (id) => async (dispatch) => {
    try {
        const response = await bookAPI.deleteBookById(id);
        dispatch(deleteBookByIdSuccess(response.data));
    } catch (error) {
        console.error("Error during deleting book by id: " + error);
        throw error;
    }
}

export const deleteBookByIsbn = (isbn) => async (dispatch) => {
    try {
        const response = await bookAPI.deleteBookByIsbn(isbn);
        dispatch(deleteBookByIsbnSuccess(response.data));
    } catch (error) {
        console.error("Error during deleting book by isbn: " + error);
        throw error;
    }
}