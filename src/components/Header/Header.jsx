import React from 'react';
import classes from './Header.module.css';
import SearchAppBar from "../../MUI/SearchAppBar";
import Avatar from "@mui/material/Avatar";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/logo.png" alt="logo"/>
                <div className="logoText">SocialV</div>
            </div>
            <SearchAppBar/>
            <Avatar
                src={"http://zvezdi.ru/uploads/posts/2016-06/1465216095_foks1.jpg"}
                sx={{width: 50, height: 50, border: "1px solid #8c91b6"}}
            />
        </header>);
};

export default Header;