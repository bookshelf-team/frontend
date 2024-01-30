import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080/`,
});

instance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("jwtToken");
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

/*instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && originalRequest.url === `auth/refresh`) {
        sessionStorage.removeItem("jwtToken");
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = sessionStorage.getItem("refreshToken");
        return instance
            .post(`auth/refresh`, { refreshToken })
            .then((res) => {
              if (res.status === 200) {
                sessionStorage.setItem("jwtToken", res.data.accessToken);
                axios.defaults.headers.common["Authorization"] = 'Bearer ' + res.data.accessToken;
                originalRequest.headers["Authorization"] = 'Bearer ' + res.data.accessToken;
                return axios(originalRequest);
              }
            });
      }
      return Promise.reject(error);
    }
);*/

export const authAPI = {
  async signIn(emailOrUsername, password) {
    try {
      const response = await instance.post(`auth/signin`, {
        emailOrUsername,
        password,
      });
      if (response.status === 200) {
        sessionStorage.setItem("jwtToken", response.data.accessToken);
        if (response.data.refreshToken) {
          sessionStorage.setItem("refreshToken", response.data.refreshToken);
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
        sessionStorage.removeItem("jwtToken");
        sessionStorage.removeItem("refreshToken");
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
  async refreshTokenRequest(refreshToken) {
    try {
      const response = await instance.post(`auth/refresh`, { refreshToken });
      if (response.status === 200) {
        sessionStorage.setItem("jwtToken", response.data.accessToken);
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

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

  async updateProfileByUsername(username, profileData) {
    try {
      const response = await instance.post(`profile/${username}`, profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async addBookToProfile(bookRequest) {
    try {
      const response = await instance.post(`profile/add/book`, bookRequest);
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
