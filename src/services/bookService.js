import axios from 'axios';

const API_URL = 'http://localhost:3000/api/books';

export const getAllBooks = async (token) => {
    const response = await axios.get(API_URL, {
        headers: { Authorization: token },
    });
    return response.data;
};
