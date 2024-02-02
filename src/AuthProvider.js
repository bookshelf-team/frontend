import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";
import {getAccessToken, getRefreshToken, logout, setAuthTokens} from "./redux/auth-utils";
import { authAPI } from "./api";
import {jwtDecode} from "jwt-decode";

const AuthProvider = ({ children }) => {
    const [refreshToken] = useState(getRefreshToken());
    const [accessToken, setAccessToken] = useState(getAccessToken());

    useEffect(() => {
        const isTokenValid = () => {
            console.log(accessToken);
            if (!accessToken || typeof accessToken !== 'string' || accessToken.split('.').length !== 3) {
                console.error("Invalid or malformed token:", accessToken);
                return false;
            }
            try {
                const decodedToken = jwtDecode(accessToken);
                const currentTime = Date.now() / 1000;
                return decodedToken.exp > currentTime;
            } catch (error) {
                console.error("Error decoding token:", error);
                return false;
            }
        };

        const refreshAccessToken = async () => {
            if (!isTokenValid() && refreshToken) {
                try {
                    const response = await authAPI.refreshTokenRequest(refreshToken);
                    if (response.status === 200) {
                        const newAccessToken = response.headers["authorization"];
                        setAccessToken(newAccessToken);
                        setAuthTokens(newAccessToken, refreshToken);
                    }
                } catch (error) {
                    console.error("Error refreshing token:", error);
                }
            }
        };


        refreshAccessToken();
    }, [accessToken, refreshToken]);

    return <AuthContext.Provider value={{ accessToken, refreshToken, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
