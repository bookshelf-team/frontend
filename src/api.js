import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080/`,
});

export const authAPI = {
  async signIn(emailOrUsername, password) {
    try {
      const response = await instance.post(`auth/signin`, {
        emailOrUsername,
        password,
      });
      if (response.status === 200) {
        sessionStorage.setItem("jwtToken", response.data.accessToken);
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
  async signUp(username, email, role, password) {
    try {
      //додати збереження
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
      return await instance.get(`book/all`);
    } catch (error) {
      return error.response;
    }
  },
  async getBookById(id) {
    try {
      return await instance.get(`book/${id}`);
    } catch (error) {
      return error.response;
    }
  },

  async getBooksByTitle(title) {
    try {
      return await instance.get(`book/search/title`, { params: { title } });
    } catch (error) {
      return error.response;
    }
  },
  async getBooksByAuthor(author) {
    try {
      return await instance.get(`book/search/author`, { params: { author } });
    } catch (error) {
      return error.response;
    }
  },

  async getBooksByGenre(genre) {
    try {
      return await instance.get(`book/search/genre`, { params: { genre } });
    } catch (error) {
      return error.response;
    }
  },
};
