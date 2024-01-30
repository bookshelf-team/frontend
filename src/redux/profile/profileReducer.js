const initialState = {
    profileData: null,
    books: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PROFILE_SUCCESS":
            return {...state, profileData: action.payload}
        case "UPDATE_PROFILE_SUCCESS":
            return {...state, profileData: action.payload}
        case "ADD_BOOK_SUCCESS":
            return {...state, books: [...state.books, action.payload]}
        case "GET_PROFILE_BOOKS_SUCCESS":
            return {...state, books: action.payload}
        case "REMOVE_BOOK_SUCCESS":
            return {...state, books: state.books.filter((book) => book.id !== action.payload)}
        default:
            return state
    }
}