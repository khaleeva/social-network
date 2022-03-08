import React from 'react';
import classes from "./Post.module.css"

const Post = ({message}) => {
    return (
        <div className={classes.item}>{message}</div>
    );
};

export default Post;