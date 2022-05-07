import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MenuTabs from "../MenuTabs/MenuTabs";




const Profile = (props) => {

    return (
            <main className={classes.main}>
                <ProfileInfo profile={props.profile} />
                <MenuTabs profile={props.profile}/>
            </main>
    );
};

export default Profile;