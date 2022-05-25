import {usersAPI} from "../API/API";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'social-network/usersReducer/FOLLOW';
const UNFOLLOW = 'social-network/usersReducer/UNFOLLOW';
const SET_USERS = 'social-network/usersReducer/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/usersReducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/usersReducer/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/usersReducer/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social-network/usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [], pageSize: 10, totalUsersCount: 0, currentPage: 1, isFetching: true, followingInProgress: []

}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
            }
        case UNFOLLOW :
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state
    }
}

// action creators

export const followSuccess = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId
    }
}


//thunk

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async(dispatch, id, apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingInProgress(false, id));

}

export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow,followSuccess);

}

export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollow,unfollowSuccess);
}


export default usersReducer;