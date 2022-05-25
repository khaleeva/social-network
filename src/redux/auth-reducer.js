import {authAPI} from "../API/API";


const SET_USER_DATA = "social-network/authReducer/SET_USER_DATA";


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

export const authThunk = () => async (dispatch) => {
    let data = await authAPI.auth();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginThunk = (email, password, rememberMe, setStatus, setSubmitting) => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.userId))
    } else {
        setStatus(data.messages[0])
    }
    setSubmitting(false)

}

export const logoutThunk = () => async (dispatch) => {

    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;