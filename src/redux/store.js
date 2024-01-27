import authReducer from "./auth-reducer";
import bookSearchReducer from "./bookSearch/bookSearchReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    bookSearch: bookSearchReducer,

});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
