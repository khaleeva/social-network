import React from 'react';
import classes from './Users.module.css'
import Avatar from "@mui/material/Avatar";


const SideBar = (props) => {

    return (

        <div className={classes.sideBar}>
            {props.users.map((user) => <>
                {user.followed ? <Avatar  key={user.id}
                                          src={user.photos.small}
                                          sx={{width: 50, height: 50, marginBottom: 2,}}
                /> : null}
            </> )}
        </div>
    );
};

export default SideBar;