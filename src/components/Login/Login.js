import React from 'react';
import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import classes from "./Login.module.css";


const Login = (props) => {

    console.log(props.photos)

    if(props.isAuth) {
        return <Navigate replace to={`/profile/about/${props.id}`} />
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginForm}>
                <h1>Sign in</h1>
                <LoginForm {...props}/>
            </div>
            <div className={classes.loginImg}>
                <img src={props.photos[6].bg} alt=""/>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    id: state.auth.id,
    photos: state.photoPage.photos

})

export default connect (mapStateToProps, {loginThunk}) (Login);