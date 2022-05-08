import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import photosReducer from "./photo-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    photoPage : photosReducer,
    auth: authReducer,


});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;