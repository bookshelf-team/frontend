export const clearAuthTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem('type');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('roles');
    localStorage.removeItem('username');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('userRoles');
};

export const setAuthTokens = (accessToken, refreshToken, type, roles, username) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem('type', type);
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('roles', roles);
    localStorage.setItem('username', username);
    localStorage.setItem('tokenType', type);
    localStorage.setItem('userRoles', roles);
};

export const getAuthTokens = () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    const type = localStorage.getItem('type');
    const isAuth = localStorage.getItem('isAuth') === 'true';
    const roles = localStorage.getItem('roles');
    const username = localStorage.getItem('username');

    return {
        accessToken,
        refreshToken,
        type,
        isAuth,
        roles,
        username,
    };
};

export const getAccessToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? accessToken : null;
};

export const getRefreshToken = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken ? refreshToken : null;
};

export const getUsernameFromLocalStorage = () => {
    const username = localStorage.getItem('username');
    return username ? username : undefined;
};

export const logout = () => {
    clearAuthTokens();
    setAuthTokens(null, null, null, null, undefined);
};

