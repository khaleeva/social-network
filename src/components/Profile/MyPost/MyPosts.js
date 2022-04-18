import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";



let newPostElement = React.createRef();

const MyPosts = ({posts, newPostText, dispatch}) => {

    let addMessage = () => {
        dispatch({type: 'ADD-POST'});

    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})

    }

    return (
        <div className={classes.posts}>
            My post
            <div className={classes.textarea}>
                <textarea name="" id="" cols="30" rows="5"
                          ref={newPostElement}
                          value={newPostText}
                          onChange={ onPostChange }/>
                <button className={classes.sendButton} onClick={ addMessage }>Add post</button>
            </div>
            <div >
                {posts.map((post) => <Post key={post.id} message={post.post}/>)}
            </div>
        </div>

    );
};

export default MyPosts;