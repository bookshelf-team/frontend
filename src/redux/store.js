import authReducer from "./auth-reducer";
import bookSearchReducer from "./bookSearch/bookSearchReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import bookSearchCatalogReducer from "./getBooks/getBooksReducer";

const reducers = combineReducers({
    auth: authReducer,
    bookSearch: bookSearchReducer,
    bookCatalogSearch: bookSearchCatalogReducer,

});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
