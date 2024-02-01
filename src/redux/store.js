import authReducer from "./auth-reducer";
import bookSearchReducer from "./bookSearch/bookSearchReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import profileReducer from "./profile/profileReducer";
import bookSearchCatalogReducer from "./getBooks/getBooksReducer";

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    bookSearch: bookSearchReducer,
    bookCatalogSearch: bookSearchCatalogReducer,
    bookPage: bookSearchCatalogReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
