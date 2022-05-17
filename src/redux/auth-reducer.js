import {authAPI} from "../API/API";


const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    isFetching: false,
    id: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default: return state
    }
}


export const setAuthUserData = (id, email, login, isAuth) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth} })

//thunk

export const authThunk = () => {
    return (dispatch) => {

        authAPI.auth().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }

        })

    }

}


export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserData(data.data.userId))
            }
        })
    }

}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }

        })

    }

}

export default authReducer;