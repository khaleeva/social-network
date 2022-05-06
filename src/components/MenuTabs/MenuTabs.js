import React from 'react';
import classes from "./MenuTabs.module.css"
import {NavLink, Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";


const MenuTabs = (props) => {
    const setActive = ({isActive}) => isActive ? classes.active : '';
    if(!props.profile){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'20px'}}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <>
            <div className={classes.menuTabs}>
                <NavLink to={`about`} className={setActive}>About</NavLink>
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