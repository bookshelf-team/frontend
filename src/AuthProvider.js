import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";
import { getAccessToken, getRefreshToken, setAuthTokens } from "./redux/auth-utils";
import { authAPI } from "./api";
import {jwtDecode} from "jwt-decode";

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(getAccessToken());
    const [refreshToken] = useState(getRefreshToken());

    useEffect(() => {
        const isTokenValid = () => {
            if (!accessToken) {
                return false;
            }
            try {
                const decodedToken = jwtDecode(accessToken);
                const currentTime = Date.now() / 1000;
                return decodedToken.exp > currentTime;
            } catch (error) {
                console.error("Invalid token:", error);
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

    const value = {
        accessToken,
        refreshToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
