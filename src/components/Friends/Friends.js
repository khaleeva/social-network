import React from 'react';
import classes from "../Users/Users.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../../MUI/Avatar";

const Friends = (props) => {
    return (
            <div className={classes.usersContainer}>
                {props.users.map((user) => <>
                    {user.followed ?
                        <div key={user.id} className={classes.usersItem}>
                            <div className={classes.usersBac}>
                                <img
                                    src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg'
                                    alt=""/>
                                <NavLink to={`/profile/${user.id}`}>
                                    <Avatar key={user.id}
                                            src={user.photos.small}
                                            sx={
                                                {
                                                    width: 100,
                                                    height: 100,
                                                    position: "absolute",
                                                    left: 30,
                                                    top: 80
                                                }}
                                    />
                                </NavLink>
                            </div>
                            <div className={classes.usersCard}>
                                {user.followed ?
                                    <button className={classes.followButton} onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollowing</button>
                                    : <button className={classes.followButton} onClick={() => {
                                        props.follow(user.id)
                                    }}>Following</button>}
                                <div className={classes.usersInfo}>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <div className={classes.usersName}>{user.name}</div>
                                    </NavLink>
                                    <div>{user.status}</div>
                                </div>
                            </div>
                        </div> : null}

                </> )}
            </div>
    );
};

export default Friends;