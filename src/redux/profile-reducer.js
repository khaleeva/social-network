import {profileAPI} from "../API/API";

const ADD_POST = 'social-network/profileReducer/ADD-POST';
const SET_USER_PROFILE = 'social-network/profileReducer/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profileReducer/SET_STATUS';
const DELETE_POST = 'social-network/profileReducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'social-network/profileReducer/SAVE_PHOTO_SUCCESS'
const SET_GLOBAL_ERROR = 'social-network/profileReducer/SET_GLOBAL_ERROR'

let initialState = {
    posts: [
        {id: 1, post: 'Hello, how are you?', likes: 1, date: ''},
        {id: 2, post: 'It\'s my first post', likes: 2, date: ''},
        {id: 3, post: 'Hello', likes: 3, date: ''},
        {id: 4, post: 'today is fine', likes: 120, date: ''},
    ],
    profile: null,
    status: '',
    error: null
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

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile:{...state.profile, photos:action.file}
            }

        case SET_GLOBAL_ERROR:
            return {
                ...state,  error:action.error
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

export const savePhotoSuccess = (file) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        file
    }
}

export const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        error
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
    try{
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {
            dispatch(setGlobalError(error))
        console.log(error)
    }

}

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveData = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.saveData(profile)
    if (data.resultCode === 0) {
        dispatch(profileThunkCreator(userId));
    }
}

export default profileReducer;
