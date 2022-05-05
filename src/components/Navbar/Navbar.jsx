import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Navbar = () => {

    const setActive = ({isActive}) => isActive ? classes.active : '';

    return (
        <nav className={classes.nav}>
            <NavLink to='/profile' className={setActive}><PersonOutlineIcon/></NavLink>
            <NavLink to='/users' className={setActive}><PeopleOutlineIcon/></NavLink>
            <NavLink to='/dialogs' className={setActive}><MailOutlineIcon/></NavLink>
            <NavLink to='/news' className={setActive}><NewspaperIcon/></NavLink>
            <NavLink to='/music' className={setActive}><PlayCircleOutlineIcon/></NavLink>
            <NavLink to='/settings' className={setActive}><SettingsOutlinedIcon/></NavLink>
        </nav>
    );
};

export default Navbar;