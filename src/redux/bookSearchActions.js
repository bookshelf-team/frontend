export const setSearchResults = (books) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: books,
    };
};

export const clearSearchResults = () => {
    return {
        type: 'CLEAR_SEARCH_RESULTS',
    };
};
