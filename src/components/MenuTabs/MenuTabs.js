import React from 'react';
import classes from "./MenuTabs.module.css"
import {NavLink, Outlet} from "react-router-dom";



const MenuTabs = ({profile}) => {
    const setActive = ({isActive}) => isActive ? classes.active : '';

    return (
        <>
            <div className={classes.menuTabs}>
                <NavLink to={`about/${profile.userId}`} className={setActive} >About</NavLink>
                <NavLink to={`posts/${profile.userId}`} className={setActive}>TimeLine</NavLink>
                <NavLink to={`friends/${profile.userId}`} className={setActive}>Friends</NavLink>
                <NavLink to={`photos/${profile.userId}`} className={setActive}>Photos</NavLink>
            </div>
            <div className={classes.mainContainer}>
                <Outlet />
            </div>

        </>
    );
};

export default MenuTabs;