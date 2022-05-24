import React from 'react';
import classes from './Header.module.css';
import SearchAppBar from "../../MUI/SearchAppBar";
import {NavLink} from "react-router-dom";
import MenuList from "../../MUI/MenuList";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <NavLink to={"/"}>LOGO</NavLink>
                {/*<div className="logoText">SocialV</div>*/}
            </div>
            <SearchAppBar/>
            <div className={classes.loginBlock}>
                { props.isAuth ?
                    <div className={classes.user}>
                        <MenuList login={props.login} id={props.id} isAuth={props.isAuth} logout={props.logoutThunk}/>
                    </div>
                    : <NavLink to={'/login'}>Sign in</NavLink>

                }

            </div>


        </header>);
};

export default Header;