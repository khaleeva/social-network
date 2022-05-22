import React from 'react';
import classes from "../Profile/MyPost/Post/MyPosts.module.css"
import { useFormik } from 'formik';
import * as Yup from "yup";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const PostForm = (props) => {

    const formik = useFormik({
        initialValues: {
            post:'',
        },

        validationSchema:Yup.object().shape({
            post: Yup.string().min(2, 'Too Short!')
                .max(100, 'Too Long!')
        }),


        onSubmit: values => {
            props.addPost(formik.values.post)
        },
    });

    console.log(formik.values)


    return (
        // <form className={classes.textarea} onSubmit={formik.handleSubmit}>
        //
        //         <textarea name="post" id="post" cols="30" rows="5"
        //                   value={formik.values.newPostText}
        //                   onChange={formik.handleChange}/>
        //         <button className={classes.sendButton} type="submit">Add post</button>
        //
        // </form>

         formik.errors.post ?
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        '& .MuiTextField-root': { width: '70%'},
                    }}
                    className={classes.textarea}
                    onSubmit={formik.handleSubmit}
                >

                    <TextField
                        error
                        name="post"
                        id="outlined-multiline-static"
                        label={formik.errors.post}
                        multiline
                        rows={4}
                        value={formik.values.post}
                        onChange={formik.handleChange}

                    />
                     <button className={classes.sendButtonDisabled} type="submit" disabled={true}>Add post</button>

                </Box>

                :

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { width: '70%'},
                    }}
                    noValidate
                    autoComplete="off"
                    className={classes.textarea}
                    onSubmit={formik.handleSubmit}
                >

                    <TextField
                        name="post"
                        id="outlined-multiline-static"
                        label="New post"
                        multiline
                        rows={4}
                        value={formik.values.post}
                        onChange={formik.handleChange}

                    />
                    <button className={classes.sendButton} type="submit">Add post</button>

                </Box>










    );
};

export default PostForm;





