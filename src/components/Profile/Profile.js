import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MenuTabs from "../MenuTabs/MenuTabs";
import Navbar from "../Navbar/Navbar";



const Profile = (props) => {

console.log(props)
    return (
            <main className={classes.main}>
                <ProfileInfo profile={props.profile} />
                <MenuTabs profile={props.profile}/>
            </main>
    );
};

export default Profile;