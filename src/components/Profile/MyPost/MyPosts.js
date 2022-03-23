import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = ({posts}) => {

    return (
        <div className={classes.posts}>
            My post
            <div className={classes.textarea}>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button onClick={() => alert('hello')}>Add post</button>
            </div>
            <div >
                {posts.map((post) => <Post key={post.id} message={post.post}/>)}
            </div>
        </div>

    );
};

export default MyPosts;