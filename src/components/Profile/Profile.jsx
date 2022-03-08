import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MenuTabs from "../MenuTabs/MenuTabs";



const Profile = () => {
    return (
            <main className={classes.main}>
                <ProfileInfo/>
                <MenuTabs/>
            </main>
    );
};

export default Profile;