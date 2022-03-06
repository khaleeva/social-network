import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message="Hello, how are you?"/>
                <Post message="It's my first post"/>
            </div>
        </div>

    );
};

export default MyPosts;