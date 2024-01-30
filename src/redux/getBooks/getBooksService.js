import {bookAPI} from "../../api";
import {getBooksSuccess} from "./getBooksActions";

export const getAllBooks = async (dispatch) => {
    try {
        let response = await bookAPI.getAllBooks();
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting all books: ", error);
        return [];
    }
}

export const getBookById = (id) => async (dispatch) => {
    try {
        let response = await bookAPI.getBookById(id);
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting books by id: ", error);
        return [];
    }
}

export const getBookByIsbn = (isbn) => async (dispatch) => {
    try {
        let response = await bookAPI.getBookByIsbn(isbn);
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting books by isbn: " + error);
        return [];
    }
}

export const getBooksByTitle = (title) => async (dispatch) => {
    try {
        let response = await bookAPI.getBooksByTitle(title);
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting books by title: ", error);
        return [];
    }
}

export const getBooksByAuthor = (author) => async (dispatch) => {
    try {
        let response = await bookAPI.getBooksByAuthor(author);
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting books by author: ", error);
        return [];
    }
}

export const getBooksByGenre = ({params: {genre}}) => async (dispatch) => {
    try {
        let response = await bookAPI.getBooksByGenre(genre);
        dispatch(getBooksSuccess(response.data));
    } catch (error) {
        console.error("Error during getting books by genre: ", error);
        return [];
    }
}

export const searchBooksByGenre = async (genre) => {
    try {
        return await bookAPI.getBooksByGenre(genre);
    } catch (error) {
        throw error;
    }
};
