import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";


const HeaderContainer = (props) => {


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


export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);

