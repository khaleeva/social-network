import React from 'react';
import classes from "../Dialogs/Dialogs.module.css";
import { useFormik } from 'formik';




const NewMessageForm = (props) => {

    const formik = useFormik({
        initialValues: {
           message:'',
        },
        onSubmit: values => {
           props.addMessageDialogs(formik.values.message)
        },
    });
    

    return (
        <form className={classes.textarea} onSubmit={formik.handleSubmit}>
            <textarea name="message" id="message" value={formik.values.text} onChange={formik.handleChange}/>
            <button type="submit" className={classes.sendButton} >Send</button>
        </form>

    );
};

export default NewMessageForm;





