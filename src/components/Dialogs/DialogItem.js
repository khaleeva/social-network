import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const DialogItem = ({name, id, img}) => {

    const setActive = ({isActive}) => isActive ? classes.active : '';
    return (
        <NavLink to={`/dialogs/${id}`} className={setActive}>
            <div className={classes.dialog}>
                <Avatar
                    src={img}
                    sx={{width: 50, height: 50, border: "1px solid #8c91b6"}}
                />
                <div className={classes.name}>{name}</div>
            </div>
        </NavLink>


    )
}

export default DialogItem;