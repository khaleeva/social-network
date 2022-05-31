import {authAPI, securityAPI} from "../API/API";


const SET_USER_DATA = "social-network/authReducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/authReducer/GET_CAPTCHA_URL_SUCCESS";


let initialState = {
    isFetching: false,
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default: return state
    }
}


export const setAuthUserData = (id, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth} })

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

//thunk

export const authThunk = () => async (dispatch) => {
    let data = await authAPI.auth();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginThunk = (email, password, rememberMe,captcha, setStatus, setSubmitting) => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.userId))
    } else if (data.resultCode === 1){
        setStatus(data.messages[0])
    }
    else if(data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }

    setSubmitting(false)

}

export const logoutThunk = () => async (dispatch) => {

    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}


export const getCaptchaUrl = () => async (dispatch) => {

    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))


}

export default authReducer;
