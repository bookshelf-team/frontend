export const getBooksSuccess = (books) => {
    return {
        type: "GET_BOOKS_SUCCESS",
        payload: books
    }
}

export const setSearchResults = (results) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        results,
    };
};

