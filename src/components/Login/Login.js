import React from 'react';
import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";



const Login = (props) => {
    console.log(props.id)
    if(props.isAuth) {
        return <Navigate replace to={`/profile/about/${props.id}`} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    id: state.auth.id

})

export default connect (mapStateToProps, {loginThunk}) (Login);