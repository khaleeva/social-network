import React from 'react';
import classes from "./Footer.module.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerNavigation}>
                <NavLink to={"/1"}>Privacy Policy</NavLink>
                <NavLink to={"/2"}> Terms of Use</NavLink>
            </div>
            <div className={classes.footerInfo}>
                <p>Copyright 2022</p>
                <NavLink to={"/"}>SocialV</NavLink>
                <p>All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;