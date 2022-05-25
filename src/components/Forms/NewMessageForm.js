import React from 'react';
import {useFormik} from 'formik';
import MultilineTextFields from "../../MUI/MultilineTextFields";
import * as Yup from "yup";

const NewMessageForm = (props) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },

        validationSchema: Yup.object().shape({
            message: Yup.string().min(2, 'Too Short!')
                .max(100, 'Too Long!').required()

        }),


        onSubmit: values => {
            props.addMessageDialogs(formik.values.message)
        },
    });


    return (

        formik.errors.message ?

            <MultilineTextFields name={'message'}
                                 value={formik.values.message}
                                 onChange={formik.handleChange}
                                 onSubmit={formik.handleSubmit}
                                 className={"sendButtonDisabled"}
                                 label={formik.errors.message}
                                 error
            />
            :
            <MultilineTextFields name={'message'}
                                 value={formik.values.message}
                                 onChange={formik.handleChange}
                                 onSubmit={formik.handleSubmit}
                                 className={"sendButton"}
                                 label={'Add message'}
            />
    );
};

export default NewMessageForm;





