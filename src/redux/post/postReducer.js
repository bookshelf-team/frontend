import {ActionTypes} from "./postActions";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    errorMessage: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                currentPost: action.payload,
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.GET_ALL_POSTS_BY_USERNAME_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.UPDATE_POST_SUCCESS:
            const updatedPosts = state.posts.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
            return {
                ...state,
                posts: updatedPosts,
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.DELETE_POST_SUCCESS:
            const filteredPosts = state.posts.filter(
                (post) => post.id !== action.payload
            );
            return {
                ...state,
                posts: filteredPosts,
                loading: false,
                errorMessage: null,
            };
        case ActionTypes.API_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
