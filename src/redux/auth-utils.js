export const setAuthTokens = (accessToken, refreshToken, tokenType) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenType', tokenType);
    localStorage.setItem('isAuth', 'true');
};

export const clearAuthTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('isAuth');
};

export const getAuthTokens = () => ({
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    tokenType: localStorage.getItem('tokenType'),
    isAuth: localStorage.getItem('isAuth') === 'true',
});
