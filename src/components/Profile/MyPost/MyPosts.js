import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const posts = [
    {id:1, post:'Hello, how are you?'},
    {id:2, post:'It\'s my first post'},
    {id:3, post:'Hello'},
    {id:4, post:'today is fine'},
]

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            My post
            <div>
                New post
            </div>
            <div >
                {posts.map((post) => <Post key={post.id} message={post.post}/>)}
            </div>
        </div>

    );
};

export default MyPosts;