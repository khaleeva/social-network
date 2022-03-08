import React from 'react';
import classes from './Header.module.css';
import SearchAppBar from "../../MUI/SearchAppBar";
import Avatar from "@mui/material/Avatar";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <NavLink to={"/"}>LOGO</NavLink>
                {/*<div className="logoText">SocialV</div>*/}
            </div>
            <SearchAppBar/>
            <div className={classes.user}>
                <Avatar
                    src={"http://zvezdi.ru/uploads/posts/2016-06/1465216095_foks1.jpg"}
                    sx={{width: 50, height: 50, border: "1px solid #8c91b6"}}
                />
                <p>Megan Fox</p>
            </div>

        </header>);
};

export default Header;