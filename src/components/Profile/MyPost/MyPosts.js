import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "../../Forms/PostForm";



const MyPosts = ({posts, addPost}) => {

    return (
        <div className={classes.posts}>
            My post
            <PostForm addPost={addPost}/>
            <div >
                {posts.map((post) => <Post key={post.id} message={post.post}/>)}
            </div>
        </div>

    );
};

export default MyPosts;