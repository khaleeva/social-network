import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendsReducer from "./friends-reducer";
import photosReducer from "./photo-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
    photoPage : photosReducer
});


let store = createStore(reducers);

window.store = store;

export default store;