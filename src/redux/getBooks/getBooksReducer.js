const initialState = {
    searchResultsCatalog: [],
    currentBook: null,
    loading: false,
    error: null,
};

const bookSearchCatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResultsCatalog: action.results,
            };
        case 'GET_BOOKS_SUCCESS':
            return {
                ...state,
                searchResultsCatalog: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_BOOK_BY_ID_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'GET_BOOK_BY_ID_SUCCESS':
            return {
                ...state,
                currentBook: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_BOOK_BY_ID_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'GET_BOOK_BY_ISBN_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'GET_BOOK_BY_ISBN_SUCCESS':
            return {
                ...state,
                currentBook: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_BOOK_BY_ISBN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default bookSearchCatalogReducer;
