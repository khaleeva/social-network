import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import photosReducer from "./photo-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    photoPage : photosReducer,
    auth: authReducer,
    app: appReducer


});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(

    applyMiddleware(thunkMiddleware)
));


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;