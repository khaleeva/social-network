const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts:[
        {id:1, post:'Hello, how are you?'},
        {id:2, post:'It\'s my first post'},
        {id:3, post:'Hello'},
        {id:4, post:'today is fine'},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        posts: [...state.posts]
    }
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                post: state.newPostText
            }



            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT :
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default :
            return state;
        }

}

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;
