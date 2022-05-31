import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import MenuTabs from "../MenuTabs/MenuTabs";



const Profile = ({profile, id, savePhoto, posts, status, updateStatus}) => {


    if (!profile) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <CircularProgress/>
            </Box>
        )
    }

    return (

            <main className={classes.main}>
                <ProfileInfo profile={profile}
                             id={id}
                             savePhoto={savePhoto}
                             posts={posts}
                             status={status}
                             updateStatus={updateStatus}


                />
                <MenuTabs profile={profile}/>
            </main>
    );
};

export default Profile;