import {authAPI} from "../api";

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

let initialState = {
    isAuth: false,
    jwtResponse: null,
    errorMessage: null,
    loading: false,
    accessToken: null,
    refreshToken: null,
    tokenType: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                jwtResponse: action.payload,
                errorMessage: null,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
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
            return {
                ...state,
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
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                tokenType: action.payload.tokenType,
            };
        case REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export const signInSuccess = (jwtResponse) => ({
    type: SIGN_IN_SUCCESS,
    payload: jwtResponse,
});

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

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

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
    const response = await authAPI.signIn(emailOrUsername, password);
    if (response.status === 200) {
        dispatch(signInSuccess(response.data));
    } else if (response.status === 403) {
        dispatch(signInFailure("Access Denied: User is not exist"));
    } else {
        dispatch(signInFailure("Unknown error during sign in"));
    }
    console.log(response.data);
};

export const signUp = (userName, email, role, password) => async (dispatch) => {
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

export const refreshTokenRequest = (refreshToken) => async (dispatch) => {
        const response = await authAPI.refreshTokenRequest(refreshToken);
        if (response.status === 200) {
            dispatch(refreshTokenSuccess(response.data));
        } else if (response.status === 403) {
            dispatch(refreshTokenFailure("Token Problem: Refresh token is not in database"));
        } else {
            dispatch(refreshTokenFailure("Unknown error during refreshing token"));
        }
}

export default authReducer;