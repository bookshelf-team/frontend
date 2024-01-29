import {bookAPI} from "../../api";

export const searchBooksByGenre = async (genre) => {
    try {
        return await bookAPI.getBooksByGenre(genre);
    } catch (error) {
        throw error;
    }
};
