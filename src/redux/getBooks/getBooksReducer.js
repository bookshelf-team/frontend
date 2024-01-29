const initialState = {
    searchResultsCatalog: [],
};

const bookSearchCatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResultsCatalog: action.results,
            };
        default:
            return state;
    }
};

export default bookSearchCatalogReducer;
