import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import Stack from "@mui/material/Stack";
import {Alert, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "../About/AboutItem/AboutItem.module.css";
import MyCustomButton from "../../MUI/MyCustomButton";


const SocialDataForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            address: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            phone: Yup.string().required('Required'),
            address: Yup.string().required('Required')
        }),


        onSubmit: values => {
            // loginThunk(formik.values.email, formik.values.password,
            //     formik.values.rememberMe, formik.setStatus, formik.setSubmitting)
            // formik.setSubmitting(true)

        },
    });

    return (
        <>
            {formik.status ?
                <Stack sx={{width: '50%'}} spacing={2}>
                    <Alert severity="error">{formik.status}</Alert>
                </Stack>
                : null}

            <Box onSubmit={formik.handleSubmit} className={classes.dataForm}
                 component="form"
                 sx={{
                     '& > :not(style)': {m: 1, width: '20ch'},
                 }}
                 noValidate
                 autoComplete="off"
            >
                <TextField
                    label="Email:"
                    id="standard-basic"
                    variant="standard"
                    type='email'
                    autoFocus={props.autoFocus}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    value={props.email}
                />
                <TextField
                    label="Phone:"
                    id="phone"
                    size="small"
                    variant="standard"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    value={props.phone}
                />

                <TextField
                    label="Country:"
                    id="address"
                    size="small"
                    variant="standard"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={props.address}
                />


                {formik.isSubmitting ?
                    <MyCustomButton type="submit"
                                    className={"sendButtonDisabled"}
                                    disabled={true}

                    >Save</MyCustomButton>

                    : <MyCustomButton type="submit" className={"loginButton"} disabled={false}
                                      onClick={props.deactivateEditMode}
                    >Save</MyCustomButton>}


            </Box>
        </>
    );
};

export default SocialDataForm;