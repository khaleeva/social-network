import {profileAPI} from "../API/API";

const ADD_POST = 'social-network/profileReducer/ADD-POST';
const SET_USER_PROFILE = 'social-network/profileReducer/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profileReducer/SET_STATUS';
const DELETE_POST = 'social-network/profileReducer/DELETE_POST'


let initialState = {
    posts: [
        {id: 1, post: 'Hello, how are you?', likes: 1, date: ''},
        {id: 2, post: 'It\'s my first post', likes: 2, date: ''},
        {id: 3, post: 'Hello', likes: 3, date: ''},
        {id: 4, post: 'today is fine', likes: 120, date: ''},
    ],
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                post: action.post,
                likes: null,
                date: ''
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

        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId)
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


export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
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

export const profileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.profile(userId);
    dispatch(setUserProfile(data));
}


export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
