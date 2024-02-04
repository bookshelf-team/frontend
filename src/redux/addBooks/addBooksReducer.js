import {
    ADD_BOOK_SUCCESS,
    API_ERROR, DELETE_BOOK_BY_ID_SUCCESS, DELETE_BOOK_BY_ISBN_SUCCESS,
    EDIT_BOOK_BY_ID_SUCCESS, EDIT_BOOK_BY_ISBN_SUCCESS
} from "./addBooksActions";

const initialState = {
    books: [],
    currentBook: null,
    loading: false,
    errorMessage: null
}

export const addBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                books: [...state, action.payload],
                loading: false,
                errorMessage: null
            };
        case EDIT_BOOK_BY_ID_SUCCESS:
            return {
                ...state,
                books: [...state, action.payload],
                loading: false,
                errorMessage: null
            };
        case EDIT_BOOK_BY_ISBN_SUCCESS:
            return {
                ...state,
                books: [...state, action.payload],
                loading: false,
                errorMessage: null
            };
        case DELETE_BOOK_BY_ID_SUCCESS:
            const filteredBooksById = state.books.filter((book) => book.id !== action.payload);
            return {
                ...state,
                books: filteredBooksById,
                loading: false,
                errorMessage: null
            };
        case DELETE_BOOK_BY_ISBN_SUCCESS:
            const filteredBooksByIsbn = state.books.filter((book) => book.isbn !== action.payload);
            return {
                ...state,
                books: filteredBooksByIsbn,
                loading: false,
                errorMessage: null
            };
        case API_ERROR:
            return {
                ...state,
                loading: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}