export const getBooksSuccess = (book) => {
    return {
        type: "GET_BOOKS_SUCCESS",
        payload: book
    }
};

export const setSearchResults = (results) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        results,
    };
};

export const getBookByIdRequest = () => {
    return { type: 'GET_BOOK_BY_ID_REQUEST' };
};

export const getBookByIdSuccess = (book) => {
    return { type: 'GET_BOOK_BY_ID_SUCCESS', payload: book };
};

export const getBookByIdFailure = (error) => {
    return { type: 'GET_BOOK_BY_ID_FAILURE', error };
};

export const getBookByIsbnRequest = () => {
    return { type: 'GET_BOOK_BY_ISBN_REQUEST' };
};


export const getBookByIsbnSuccess = (book) => {
    return { type: 'GET_BOOK_BY_ISBN_SUCCESS', payload: book };
};

export const getBookByIsbnFailure = (error) => {
    return { type: 'GET_BOOK_BY_ISBN_FAILURE', error };
};

