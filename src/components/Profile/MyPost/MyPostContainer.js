
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




// const MyPostsContainer = ({store}) => {
//     let state = store.getState();
//     console.log(state)
//     let addPost = () => {
//         store.dispatch(addPostActionCreator());
//     }
//
//     let postChange = (text) =>{
//         store.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     return <MyPosts
//         posts = { state.profilePage.posts }
//         newPostText={ state.profilePage.newPostText }
//         addPost = { addPost }
//         postChange = { postChange }
//     />
//
//
//
//
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {dispatch(addPostActionCreator())},
        postChange : (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;