export const getBooksSuccess = (books) => {
    return {
        type: "GET_BOOKS_SUCCESS",
        payload: books
    }
}