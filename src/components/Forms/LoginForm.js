
import React from 'react';
import classes from "../Login/Login.module.css"
import { useFormik } from 'formik';
import * as Yup from "yup"
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";

const LoginForm = (props) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },

        // validationSchema: Yup.object({
        //     email: Yup.string
        // }),


        onSubmit: values => {
           props.loginThunk(formik.values.email, formik.values.password,
               formik.values.rememberMe)


        },
    });

    console.log(formik.values)

    return (
        // <form onSubmit={formik.handleSubmit} className={classes.form}>
        //
        //
        //         {/*<input*/}
        //         {/*    id="email"*/}
        //         {/*   */}
        //         {/*/>*/}
        //
        //         <TextField id="outlined-basic"
        //                    label="enter email"
        //                    variant="outlined"
        //                    name="email"
        //                    type="email"
        //                    onChange={formik.handleChange}
        //                    value={formik.values.email}
        //         />
        //
        //
        //     <div className={classes.formItem}>
        //         <label htmlFor="password">Password</label>
        //         <input
        //             id="password"
        //             name="password"
        //             type="password"
        //             placeholder={'password'}
        //             onChange={formik.handleChange}
        //             value={formik.values.password}
        //         />
        //     </div>
        //     <div className={classes.checkbox}>
        //         <input
        //             id="rememberMe"
        //             name="rememberMe"
        //             type="checkbox"
        //             onChange={formik.handleChange}
        //             value={formik.values.rememberMe}
        //         />
        //         <label htmlFor="email">Remember me</label>
        //     </div>
        //     <button type="submit" className={classes.sendButton}>Submit</button>
        // </form>

        <Box onSubmit={formik.handleSubmit} className={classes.form}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >



            <TextField className={classes.formItem}
                id="outlined-basic"
                label="Enter Email"
                size="small"
                variant="outlined"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}

            />

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


            <button type="submit" className={classes.sendButton}>Submit</button>
        </Box>
    );
};

export default LoginForm;