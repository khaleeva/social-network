import React from 'react';
import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import classes from "./Login.module.css";


const Login = ({isAuth, id, photos, loginThunk}) => {

    if(isAuth) {
        return <Navigate replace to={`/profile/posts/${id}`} />
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginForm}>
                <h1>Sign in</h1>
                <LoginForm loginThunk={loginThunk}/>
            </div>
            <div className={classes.loginImg}>
                <img src={photos[6].bg} alt=""/>
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