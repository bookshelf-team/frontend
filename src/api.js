import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:8080/`
});

export const authAPI = {
    signIn(emailOrUsername, password) {
        return instance.post(`auth/signin`, {emailOrUsername, password});
    },
    signUp(username, email, role, items, password) {
        return instance.post(`auth/signup`, {username, email, role, items, password});
    },
    signOut() {
        return instance.post(`auth/signout`);
    },
    refreshTokenRequest(refreshToken) {
        return instance.post(`auth/refresh`, {refreshToken});
    }
}