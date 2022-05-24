
import {authThunk} from "./auth-reducer";


const INITIALIZED_SUCCESS = "SET_USER_DATA";


let initialState = {
   initialized : false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized : true
            }

        default: return state
    }
}


export const initializedSuccess = () =>
    ({type: INITIALIZED_SUCCESS})

//thunk

export const initializeApp = () => {
    return (dispatch) => {

        let promise = dispatch(authThunk());

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });


    }

}






export default appReducer;