import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import MenuTabs from "../MenuTabs/MenuTabs";





const Profile = (props) => {

    if(!props.profile){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'20px'}}>
                <CircularProgress />
            </Box>
        )
    }

    return (

            <main className={classes.main}>
                <ProfileInfo profile={props.profile} />
                <MenuTabs profile={props.profile} />
            </main>
    );
};

export default Profile;