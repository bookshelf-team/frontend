import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:8080/`
});

export const authAPI = {
    async signIn(emailOrUsername, password) {
        try {
            const response = await instance.post(`auth/signin`, {emailOrUsername, password});
            if (response.status === 200) {
                sessionStorage.setItem('jwtToken', response.data.accessToken);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async signUp(username, email, role, password) {
        try {
            const response = await instance.post(`auth/signup`, {username, email, role, password});
            //додати збереження
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async signOut() {
        try {
            const response = await instance.post(`auth/signout`);
            if (response.status === 200) {
                sessionStorage.removeItem('jwtToken');
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },
    async refreshTokenRequest(refreshToken) {
        try {
            const response = await instance.post(`auth/refresh`, {refreshToken});
            if (response.status === 200) {
                sessionStorage.setItem('jwtToken', response.data.accessToken);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    }
}
