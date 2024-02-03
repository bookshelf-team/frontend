import React, { useEffect } from "react";
import AuthContext from "./authContext";
import { getAccessToken, getRefreshToken, logout } from "./redux/auth-utils";
import { useDispatch } from "react-redux";
import { refreshAccessToken } from "./redux/auth-reducer";
import {jwtDecode} from "jwt-decode";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessTokenFromStorage = getAccessToken();
        const refreshTokenFromStorage = getRefreshToken();

        const isTokenValid = () => {
            if (!accessTokenFromStorage || typeof accessTokenFromStorage !== 'string' || accessTokenFromStorage.split('.').length !== 3) {
                console.error("Invalid or malformed token:", accessTokenFromStorage);
                return false;
            }
            try {
                const decodedToken = jwtDecode(accessTokenFromStorage);
                const currentTime = Date.now() / 1000;
                return decodedToken.exp > currentTime;
            } catch (error) {
                console.error("Error decoding token:", error);
                return false;
            }
        };

        const refreshAccessTokenHandler = async () => {
            if (!isTokenValid() && refreshTokenFromStorage) {
                dispatch(refreshAccessToken());
            }
        };

        refreshAccessTokenHandler();
    }, [dispatch]);

    const contextValue = {
        accessToken: getAccessToken(),
        refreshToken: getRefreshToken(),
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
