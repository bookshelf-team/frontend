import authReducer from "./auth-reducer";
import bookSearchReducer from "./bookSearch/bookSearchReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import profileReducer from "./profile/profileReducer";
import bookSearchCatalogReducer from "./getBooks/getBooksReducer";
import postReducer from "./post/postReducer";
import {addBooksReducer} from "./addBooks/addBooksReducer";

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    bookSearch: bookSearchReducer,
    bookCatalogSearch: bookSearchCatalogReducer,
    bookPage: bookSearchCatalogReducer,
    posts: postReducer,
    addBooks: addBooksReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
