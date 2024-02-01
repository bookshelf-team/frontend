import {ADD_BOOK_TO_PROFILE_FAILURE, ADD_BOOK_TO_PROFILE_SUCCESS, FETCH_PROFILE_SUCCESS} from "./profileActions";

const initialState = {
    loading: false,
    errorMessage: null,
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: null,
            };
        case ADD_BOOK_TO_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
