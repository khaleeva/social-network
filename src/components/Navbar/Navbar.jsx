import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/profile'><PersonOutlineIcon/></NavLink>
            <NavLink to='/dialogs'><MailOutlineIcon/></NavLink>
            <NavLink to='/news'><NewspaperIcon/></NavLink>
            <NavLink to='/music'><PlayCircleOutlineIcon/></NavLink>
            <NavLink to='/settings'><SettingsOutlinedIcon/></NavLink>
        </nav>
    );
};

export default Navbar;