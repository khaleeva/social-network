import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, logoutThunk, setAuthUserData} from "../../redux/auth-reducer";


const HeaderContainer = (props) => {


    useEffect(() => {
        props.authThunk();
    })






    return (
        <Header {...props}/>
    )

}


let mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }
)


export default connect(mapStateToProps, {setAuthUserData, authThunk, logoutThunk})(HeaderContainer);

