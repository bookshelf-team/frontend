import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
});

instance.interceptors.response.use(
    async (response) => {
        if (response) {
            const token = response.headers['authorization'];
            const refreshToken = response.data.refreshToken;
            if (token && refreshToken) {
                localStorage.setItem("accessToken", token);
                localStorage.setItem("refreshToken", refreshToken);
            }
        }
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                try {
                    const response = await authAPI.refreshTokenRequest(refreshToken);
                    if (response.status === 200) {
                        const newAccessToken = response.headers['authorization'];
                        const newRefreshToken = response.data.refreshToken;
                        localStorage.setItem("accessToken", newAccessToken);
                        localStorage.setItem("refreshToken", newRefreshToken);
                        axios.defaults.headers.common["Authorization"] = 'Bearer ' + newAccessToken;
                        error.config.headers["Authorization"] = 'Bearer ' + newAccessToken;
                        return axios(error.config);
                    }
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const authAPI = {
    async signIn(emailOrUsername, password) {
        try {
            const response = await instance.post(`auth/signin`, {
                emailOrUsername,
                password,
            });
            if (response.status === 200) {
                const accessToken = response.data.token;
                localStorage.setItem("accessToken", accessToken);
                if (response.data.refreshToken) {
                    const refreshToken = response.data.refreshToken;
                    localStorage.setItem("refreshToken", refreshToken);
                }
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async signUp(username, email, role, password) {
        try {
            return await instance.post(`auth/signup`, {
                username,
                email,
                role,
                password,
            });
        } catch (error) {
            return error.response;
        }
    },
    async signOut() {
        try {
            const response = await instance.post(`auth/signout`);
            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async changePassword(username, oldPassword, newPassword) {
        try {
            const response = await instance.post(`auth/password/change`, {
                username,
                oldPassword,
                newPassword,
            });
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    async refreshTokenRequest(refreshToken) {
        try {
            const response = await instance.post(`auth/refresh`, {refreshToken});
            if (response.status === 200 && response.data.accessToken && response.data.refreshToken) {
                const newAccessToken = response.data.accessToken; // або response.headers["authorization"];
                const newRefreshToken = response.data.refreshToken;
                localStorage.setItem("accessToken", newAccessToken);
                localStorage.setItem("refreshToken", newRefreshToken);
                axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
}

export const bookAPI = {
    async getAllBooks() {
        try {
            const response = await instance.get(`book/all`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getBookById(id) {
        try {
            const response = await instance.get(`book/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getBookByIsbn(isbn) {
        try {
            const response = await instance.get(`book/search/isbn?isbn=${isbn}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getBooksByTitle(title) {
        try {
            const response = await instance.get(`book/search/title?title=${title}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getBooksByAuthor(author) {
        try {
            const response = await instance.get(`book/search/author?author=${author}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getBooksByGenre(genre) {
        try {
            const response = await instance.get(`book/search/genre?genre=${genre}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async addBook(bookData) {
        try {
            const response = await instance.post(`book/add`, bookData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
export const profileAPI = {
    async getProfileByUsername(username) {
        try {
            const response = await instance.get(`profile/${username}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async addBookToProfile(bookToProfileRelationRequest) {
        try {
            const response = await instance.post(`profile/book/add`, bookToProfileRelationRequest);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async updateProfileByUsername(username, profileData) {
        try {
            const response = await instance.post(`profile/${username}`, profileData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },


    async getProfileBooks(username) {
        try {
            const response = await instance.get(`profile/${username}/books`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async removeBookFromProfile(username, bookId) {
        try {
            const response = await instance.delete(`profile/${username}/books/${bookId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export const postAPI = {
    async getAllPosts() {
        try {
            return await instance.get(`post/all`);
        } catch (error) {
            throw error;
        }
    },

    async getAllPostsByUsername(username) {
        try {
            const response = await instance.get(`post/username?username=${username}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getPostById(id) {
        try {
            const response= await instance.get(`post/${id}`)
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async addPost(postData) {
        try {
            const response = await instance.post(`post/add`, postData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async updatePostById(id, postData) {
        try {
            const response = await instance.post(`post/id?id=${id}`, postData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async deletePostById(id) {
        try {
            const response = await instance.delete(`post/delete/id?id=${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

