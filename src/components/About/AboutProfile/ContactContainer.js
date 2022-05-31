import React from 'react';
import {connect} from "react-redux";
import {saveData} from "../../../redux/profile-reducer";
import AboutContact from "./AboutContact";

const ContactContainer = ({profile, id, saveData}) => {
    return (
       <AboutContact profile={profile} id={id} saveData={saveData}/>
    );
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id
    }
}




export default connect(mapStateToProps, {saveData})(ContactContainer);