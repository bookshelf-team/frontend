import {bookAPI} from "../../api";
import {
    getBookByIdFailure,
    getBookByIdRequest,
    getBookByIdSuccess, getBookByIsbnFailure, getBookByIsbnRequest,
    getBookByIsbnSuccess,
    getBooksSuccess
} from "./getBooksActions";

export const getAllBooks = () => async () => {
    try {
        return await bookAPI.getAllBooks();
    } catch (error) {
        throw error;
    }
};

export const getBookById = (bookId) => async (dispatch) => {
    try {
        console.log("Початок отримання книги за ID:", bookId);

        dispatch(getBookByIdRequest());

        const response = await bookAPI.getBookById(bookId);

        console.log("Книгу отримано успішно:", response);

        dispatch(getBookByIdSuccess(response));
    } catch (error) {
        console.error("Помилка при завантаженні книги:", error);
        dispatch(getBookByIdFailure(error));
    }
};

export const getBookByIsbn = (isbn) => async (dispatch) => {
    try {
        console.log("Початок отримання книги за Isbn:", isbn);

        dispatch(getBookByIsbnRequest());

        const response = await bookAPI.getBookByIsbn(isbn);

        console.log("Книгу отримано успішно:", response);

        dispatch(getBookByIsbnSuccess(response));
    } catch (error) {
        console.error("Помилка при завантаженні книги:", error);
        dispatch(getBookByIsbnFailure(error));
    }

}

export const getBooksByTitle  = async (title) => {
    try {
        return await bookAPI.getBooksByTitle(title);
    } catch (error) {
        throw error;
    }
}

export const getBooksByAuthor = async (author) => {
    try {
        return await bookAPI.getBooksByAuthor(author);
    } catch (error) {
        throw error;
    }
}

export const getBooksByGenre = ({params: {genre}}) => async (dispatch) => {
    try {
        let response = await bookAPI.getBooksByGenre(genre);
        dispatch(getBooksSuccess(response));
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
