import React from 'react';
import classes from "../Profile/MyPost/MyPosts.module.css"
import { useFormik } from 'formik';




const PostForm = (props) => {

    const formik = useFormik({
        initialValues: {
            post:'',
        },
        onSubmit: values => {
            props.addPost(formik.values.post)
        },
    });


    return (
        <form className={classes.textarea} onSubmit={formik.handleSubmit}>

                <textarea name="post" id="post" cols="30" rows="5"
                          value={formik.values.newPostText}
                          onChange={formik.handleChange}/>
                <button className={classes.sendButton} type="submit">Add post</button>

        </form>

    );
};

export default PostForm;





