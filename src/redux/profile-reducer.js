const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, post: 'Hello, how are you?'},
        {id: 2, post: 'It\'s my first post'},
        {id: 3, post: 'Hello'},
        {id: 4, post: 'today is fine'},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                post: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        default :
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;
