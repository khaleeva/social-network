import React from 'react';
import classes from "./MyPosts.module.css"
import PostForm from "../../../Forms/PostForm";
import Post from "./Post";



const MyPosts = ({posts, addPost}) => {

    return (

        <div className={classes.posts}>
            <PostForm addPost={addPost}/>
            <div className={classes.postsContainer}>
                {posts.map((post) =>
                    <Post key={post.id}
                          message={post.post}
                          likes={post.likes}
                          date={post.date}/>
                )}
            </div>
        </div>

    );
};

export default MyPosts;