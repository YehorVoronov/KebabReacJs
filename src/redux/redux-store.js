import {combineReducers, createStore} from "redux";
import commentsReducer from "./comments-reducer";
import menuReducer from "./menu-reducer";

let reducers = combineReducers({
    commentsPage:commentsReducer,
    menuPage:menuReducer,
});

let store = createStore(reducers);

export default store;