import React from 'react';
import {connect} from "react-redux";
import Contact from "./Contact";

const ContactContainer = ({profile, id}) => {
    return (
       <Contact profile={profile} id={id}/>
    );
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id
    }
}




export default connect(mapStateToProps)(ContactContainer);