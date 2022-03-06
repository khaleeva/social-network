import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <main className={classes.main}>
            <div >
                <img src="https://i.pinimg.com/736x/98/b9/52/98b952001792e2b836669abf4d853712.jpg" alt="main"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>

    );
};

export default Profile;