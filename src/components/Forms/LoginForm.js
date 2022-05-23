
import React from 'react';
import classes from "../Login/Login.module.css"
import { useFormik } from 'formik';
import * as Yup from "yup"
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import MyCustomButton from "../../MUI/MyCustomButton";



const LoginForm = (props) => {



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },

        validationSchema:Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required')
        }),


        onSubmit: values => {
           props.loginThunk(formik.values.email, formik.values.password,
               formik.values.rememberMe)


        },
    });


    return (
        <Box onSubmit={formik.handleSubmit} className={classes.form}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            validate
            autoComplete="on"
        >


            { formik.errors.email ?
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
                             id="outlined-basic"
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
                       id="outlined-basic"
                       label="Enter Password"
                       size="small"
                       variant="outlined"
                       name="password"
                       type="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}

            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />}
                                  label="Remember me"
                                  onChange={formik.handleChange}
                                  value={formik.values.rememberMe}
                                  name="rememberMe"
                                  id="rememberMe"
                />
            </FormGroup>


            <MyCustomButton type="submit" className={"loginButton"}>Sign In</MyCustomButton>
        </Box>
    );
};

export default LoginForm;