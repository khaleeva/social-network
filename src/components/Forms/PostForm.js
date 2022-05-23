import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

import MultilineTextFields from "../../MUI/MultilineTextFields";


const PostForm = (props) => {

    const formik = useFormik({
        initialValues: {
            post:'',
        },

        validationSchema:Yup.object().shape({
            post: Yup.string().min(2, 'Too Short!')
                .max(100, 'Too Long!').required()
        }),


        onSubmit: values => {
            props.addPost(formik.values.post)
        },
    });


    return (

        formik.errors.post ?

            <MultilineTextFields
                onSubmit={formik.handleSubmit}
                onChange={formik.handleChange}
                disabled={true}
                name={'post'}
                label={formik.errors.post}
                value={formik.values.post}
                className={"sendButtonDisabled"}
                error
            /> :
            <MultilineTextFields
                onSubmit={formik.handleSubmit}
                onChange={formik.handleChange}
                name={'post'}
                disabled={false}
                label={'Add post'}
                value={formik.values.post}
                className={"sendButton"}
            />
    );
};

export default PostForm;





