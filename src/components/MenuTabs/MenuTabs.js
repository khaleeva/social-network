import React from 'react';
import classes from "./MenuTabs.module.css"
import {NavLink, Outlet} from "react-router-dom";



const MenuTabs = (props) => {
    const setActive = ({isActive}) => isActive ? classes.active : '';

    return (
        <>
            <div className={classes.menuTabs}>
                <NavLink to={`about/${props.profile.userId}`} className={setActive} >About</NavLink>
                <NavLink to={"posts"} className={setActive}>TimeLine</NavLink>
                <NavLink to={"friends"} className={setActive}>Friends</NavLink>
                <NavLink to={"photos"} className={setActive}>Photos</NavLink>
            </div>
            <div className={classes.mainContainer}>
                <Outlet />
            </div>

        </>
    );
};

export default MenuTabs;