import authReducer from "./auth-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;