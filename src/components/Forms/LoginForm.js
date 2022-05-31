import React from 'react';
import classes from "../Login/Login.module.css"
import {useFormik} from 'formik';
import * as Yup from "yup"
import {Alert, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import MyCustomButton from "../../MUI/MyCustomButton";
import Stack from "@mui/material/Stack";


const LoginForm = ({loginThunk, captchaUrl}) => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required')
        }),




        onSubmit: values => {
            loginThunk(formik.values.email, formik.values.password,
                formik.values.rememberMe, formik.values.captcha, formik.setStatus, formik.setSubmitting)
            formik.setSubmitting(true)

        },
    });



    return (
        <>
            {formik.status ?
                <Stack sx={{width: '50%'}} spacing={2}>
                    <Alert severity="error">{formik.status}</Alert>
                </Stack>
                : null}

            <Box onSubmit={formik.handleSubmit} className={classes.form}
                 component="form"
                 sx={{
                     '& > :not(style)': {m: 1, width: '30ch'},
                 }}
                 validate
                 autoComplete="off"
            >


                {formik.errors.email ?
                    <TextField className={classes.formItem}
                               error
                               id="outlined-error"
                               value={formik.values.email}
                               label={formik.errors.email}
                               size="small"
                               variant="outlined"
                               name="email"
                               type="email"
                               onChange={formik.handleChange}


                    />
                    : <TextField className={classes.formItem}
                                 id="email"
                                 label="Enter Email"
                                 size="small"
                                 variant="outlined"
                                 name="email"
                                 type="email"
                                 onChange={formik.handleChange}
                                 value={formik.values.email}
                    />
                }

                <TextField className={classes.formItem}
                           id="password"
                           label="Enter Password"
                           size="small"
                           variant="outlined"
                           name="password"
                           type="password"
                           onChange={formik.handleChange}
                           value={formik.values.password}

                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>}
                                      label="Remember me"
                                      onChange={formik.handleChange}
                                      value={formik.values.rememberMe}
                                      name="rememberMe"
                                      id="rememberMe"
                    />
                </FormGroup>

                {captchaUrl ?
                    <>
                        <div><img src={captchaUrl} alt=""/></div>
                        <TextField className={classes.formItem}
                                   id="captcha"
                                   label="Captcha"
                                   size="small"
                                   variant="outlined"
                                   name="captcha"
                                   type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.captcha}

                        />
                    </> : null

                }


                {formik.isSubmitting ?
                    <MyCustomButton type="submit" className={"sendButtonDisabled"} disabled={true}>Sign
                        In</MyCustomButton>

                    : <MyCustomButton type="submit" className={"loginButton"} disabled={false}>Sign In</MyCustomButton>}
            </Box>
        </>
    );
};

export default LoginForm;