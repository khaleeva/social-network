
import React from 'react';
import { useFormik } from 'formik';

const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
           props.loginThunk(formik.values.email, formik.values.password,
               formik.values.rememberMe)

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={'enter email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.rememberMe}
                />
                <label htmlFor="email">Remember me</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;