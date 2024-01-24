import axios from 'axios';

const DBOOKS_API_URL = 'https://www.dbooks.org/api/search';

export const searchBooksByDBooksAPI = async (query) => {
    try {
        const response = await axios.get(`${DBOOKS_API_URL}/${query}`);
        return response.data.books || [];
    } catch (error) {
        console.error('Error during dBooks API search', error);
        return [];
    }
};
