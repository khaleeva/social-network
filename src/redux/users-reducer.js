import {usersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:{
            return {...state, users: action.users}
            }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS:{
            return {...state,
                followingInProgress:
                    action.isFetching ?
                        [...state.followingInProgress, action.userId]
                        : [...state.followingInProgress.filter(id => id !== action.userId)]
                }
        }
        default: return state
        }
}

// action creators

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

    export const setCurrentPage = (currentPage) => {
        return {
            type: SET_CURRENT_PAGE,
            currentPage
        }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
}


//thunk

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }

}

export const follow = (id) => {
    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true,  id));
        usersAPI.follow(id)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingInProgress(false,  id));
            })

    }

}

export const unfollow = (id) => {
    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true,  id));
        usersAPI.unfollow(id)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowingInProgress(false, id));
            })

    }

}




export default usersReducer;