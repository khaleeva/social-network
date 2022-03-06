import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/dialogs'>Message</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/music'>Music</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </nav>
    );
};

export default Navbar;