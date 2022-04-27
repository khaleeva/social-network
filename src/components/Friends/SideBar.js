import React from 'react';
import classes from './Friends.module.css'
import Avatar from "@mui/material/Avatar";

const SideBar = ({users}) => {
    return (
        <div className={classes.sideBar}>
            {   users.map((user) => {
                return (
                    <Avatar key={user.id}
                        src={user.img}
                        sx={{width: 50, height: 50, marginBottom: 2,}}
                    />
                )
            } )

            }

        </div>
    );
};

export default SideBar;