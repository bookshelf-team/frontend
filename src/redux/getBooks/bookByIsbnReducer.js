const initialState = {
    currentBook: null,
    loading: false,
    error: null,
};

const bookByIsbnReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default bookByIsbnReducer;
