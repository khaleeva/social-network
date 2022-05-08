
import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";



const HeaderContainer = (props) => {
    // const {userId} = useParams();


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    props.setAuthUserData(id, email, login);
                }

            })

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




export default  connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
