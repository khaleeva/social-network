import React  from 'react';
import classes from "./About.module.css"
import {NavLink, Outlet} from "react-router-dom";




const About = ({profile}) => {

    const setActive = ({isActive}) => isActive ? classes.active : '';

    return (
            <div className={classes.mainAbout}>
                <div className={classes.aboutTabs}>
                    <NavLink to={`contact/${profile.userId}`} className={setActive}>Contact and Basic Info</NavLink>
                    <NavLink to={`work/${profile.userId}`} className={setActive}>Work and Education</NavLink>
                    <NavLink to={`relation/${profile.userId}`} className={setActive}>Family and Relationship</NavLink>
                    <NavLink to={`details/${profile.userId}`} className={setActive}>Details About You</NavLink>
                </div>
                <div className={classes.mainAboutContainer}>
                    <Outlet />
                </div>
          </div>

    );
};

export default About;

