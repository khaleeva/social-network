import React from 'react';
import classes from './friends.module.css'
import Avatar from "@mui/material/Avatar";

const SideBar = ({dialogs}) => {
    console.log(dialogs)
    return (
        <div className={classes.sideBar}>
            {   dialogs.map((d) => {
                return (
                    <Avatar key={d.id}
                        src={d.img}
                        sx={{width: 50, height: 50, marginBottom: 2,}}
                    />
                )
            } )

            }

        </div>
    );
};

export default SideBar;