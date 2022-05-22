import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, post: 'Hello, how are you?', likes: 1, date:''},
        {id: 2, post: 'It\'s my first post', likes: 2, date:''},
        {id: 3, post: 'Hello', likes: 3, date:''},
        {id: 4, post: 'today is fine', likes: 120, date:''},
    ],
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                post: action.post
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default :
            return state;
    }

}

export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

//thunk

export const profileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.profile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setStatus(status));
                }

            })
    }
}


export default profileReducer;
