import {authAPI} from "../api";
import {clearAuthTokens, getAuthTokens, setAuthTokens} from "./auth-utils";

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';

const getInitialState = () => {
    const { accessToken, refreshToken, type, isAuth, roles, username } = getAuthTokens();
    return {
        isAuth: isAuth,
        jwtResponse: null,
        errorMessage: null,
        loading: false,
        accessToken: accessToken,
        refreshToken: refreshToken,
        type: type,
        roles: roles,
        username: username,
    };
};


let initialState = getInitialState();

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            const {token, refreshToken, type, roles, username } = action.payload;
            setAuthTokens(token, refreshToken, type, roles, username);
            console.log('SIGN_IN_SUCCESS', action.payload);
            return {
                ...state,
                isAuth: true,
                jwtResponse: action.payload,
                errorMessage: null,
                roles: action.roles,
                username: username,
            };
        case SIGN_IN_FAILURE:
            console.error("Sign-in error: ", action.payload);
            return {
                ...state,

            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: null
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SIGN_OUT_SUCCESS:
            clearAuthTokens();
            return {
                ...state,
                isAuth: false,
                loading: false
            };
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                accessToken: action.payload.token,
                refreshToken: action.payload.refreshToken,
                type: action.payload.type,
            };
        case REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case REFRESH_TOKEN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}

export const signInSuccess = (jwtResponse) => {
    const roles = jwtResponse.roles;
    setAuthTokens(jwtResponse.token, jwtResponse.refreshToken, jwtResponse.type, roles, jwtResponse.username);
    return {
        type: SIGN_IN_SUCCESS,
        isAuth: true,
        payload: jwtResponse,
        roles: roles,
    };
};

export const signInFailure = (error) => ({
    type: SIGN_IN_FAILURE,
    payload: error,
});

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
});

export const signUpFailure = (error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

export const signOutSuccess = () => {
    clearAuthTokens();
    return {
        type: SIGN_OUT_SUCCESS,
        isAuth: false,
        roles: null,
    };
};


export const signOutFailure = (error) => ({
    type: SIGN_OUT_FAILURE,
    payload: error
})

export const refreshTokenSuccess = (data) => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: data,
});

export const refreshTokenFailure = (error) => ({
    type: REFRESH_TOKEN_FAILURE,
    payload: error
})

export const signIn = (emailOrUsername, password) => async (dispatch) => {
    try {
        const response = await authAPI.signIn(emailOrUsername, password);
        const { token, refreshToken, type, roles, username } = response.data;
        setAuthTokens(token, refreshToken, type, roles, username);

        dispatch(signInSuccess(response.data));
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch(signInFailure(errorMessage));
    }
};


export const signUp = (userName, email, role = 'USER', password) => async (dispatch) => {
    const response = await authAPI.signUp(userName, email, role, password);
    if (response.status === 200) {
        dispatch(signUpSuccess(response.data));
    } else if (response.status === 409) {
        dispatch(signUpFailure("Conflict: Username is already taken"));
    } else {
        dispatch(signUpFailure("Unknown error during sign up"));
    }
    console.log(response.data);
};

export const signOut = () => async (dispatch) => {
    const response = await authAPI.signOut();
    if (response.status === 200) {
        dispatch(signOutSuccess());
    } else if (response.status === 401) {
        dispatch(signOutFailure("Unauthorized response"));
    } else if (response.status === 500) {
        dispatch(signOutFailure("Internal Server Error"));
    } else {
        dispatch(signOutFailure("Unknown error during sign out"));
    }
}

export default authReducer;
