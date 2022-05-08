const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
users: [

        // {id: 1, followed: false, fullName: "Keanu Reeves", city: "NY", status: 'Lorem Ipsum is simply dummy text of the',
    // imgBack:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg2.jpg', img: "https://pbs.twimg.com/media/EnRUx9aXUA0Spxh?format=jpg&name=large"},
        // {id: 2, followed: true, fullName: "Nicole", city: "LA", status: 'Lorem Ipsum is simply dummy text of the',
    // imgBack:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg4.jpg',  img: "https://resizer.mail.ru/p/45134026-450d-5177-8978-62ef2dbfaa3c/AAACE49_QWIKBMYA_oAef9H_jBe53DnYQxMGX3bDTCMPSUkQh24VsvVO4kMwSxMIjWGBrmaEEHIau0BBqzTCpAzqdy4.jpg"},
        // {id: 3, followed: false, fullName: "Madonna", city: "NY", status: 'Lorem Ipsum is simply dummy text of the',
    // imgBack:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg7.jpg', img: "https://n1s1.elle.ru/2d/ef/c2/2defc22ec47e80be63a7054af7a5e3cf/728x458_1_2779a3fb0a17e851a83b8414ccb5dab6@940x591_0xc35dbb80_20293511321500296248.jpeg" },
        // {id: 4, followed: true, fullName: "Monica", city: "LA", status: 'Lorem Ipsum is simply dummy text of the',
    // imgBack:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg',   img: "https://images11.cosmopolitan.ru/upload/img_cache/b84/b8425ffb9657ea9de175d43b5d7ccba1_cropped_630x630.jpg"},
        // {id: 5, followed: false, fullName: "Bruce", city: "LA", status: 'Lorem Ipsum is simply dummy text of the',
    // imgBack:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg9.jpg',img: "https://kto-zhena.ru/wp-content/uploads/1432274596-bryus-uillis-598x600.jpg" },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false


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
            return {...state, followingInProgress: action.isFetching}
        }
        default: return state
        }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
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

export const toggleFollowingInProgress = (isFetching) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching
    }
}

export default usersReducer;