import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = ({store}) => {
    let state = store.getState();
    console.log(state)
    let addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    let postChange = (text) =>{
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts
        posts = { state.profilePage.posts }
        newPostText={ state.profilePage.newPostText }
        addPost = { addPost }
        postChange = { postChange }
    />




};

export default MyPostsContainer;