import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                   <NavLink to="/dialogs/1"> Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2"> Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3"> Sasha</NavLink>
                </div>
            </div>
            <div className={classes.messagesItems}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Wow!</div>
            </div>
        </div>
    );
};

export default Dialogs;