import React from 'react';
import classes from "./MenuTabs.module.css"
import {NavLink, Outlet} from "react-router-dom";


const MenuTabs = () => {
    return (
        <>
            <div className={classes.menuTabs}>
                <NavLink to={"posts"}>TimeLine</NavLink>
                <NavLink to={"about"}>About</NavLink>
                <NavLink to={"friends"}>Friends</NavLink>
                <NavLink to={"photos"}>Photos</NavLink>
            </div>
            <div className={classes.mainContainer}>
                <Outlet />
            </div>

        </>
    );
};

export default MenuTabs;