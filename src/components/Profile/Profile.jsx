import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
    return (
        <main className={classes.main}>
            <div className={classes.imgContainer}>
                <img src="https://i.pinimg.com/736x/98/b9/52/98b952001792e2b836669abf4d853712.jpg" alt="main"/>
            </div>
            <div>
                <Avatar/>
                ava + description
            </div>
            <MyPosts/>
        </main>

    );
};

export default Profile;