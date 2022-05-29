import React from 'react';
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../../MUI/Avatar";
import MyCustomButton from "../../MUI/MyCustomButton";

const UserItem = ({key, id, src, followed, disabled, unfollow, follow, name, status}) => {
    return (
        <>
            <div key={key} className={classes.usersItem}>
                <div className={classes.usersBac}>
                    <img
                        src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg'
                        alt=""/>
                    <NavLink to={`/profile/about/${id}`}>
                        <Avatar key={key}
                                src={src}
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
                    {followed ?
                        <MyCustomButton disabled={disabled}
                                        className={"followButton"}
                                        onClick={() => {
                                            unfollow(id)
                                        }}
                        >Unfollowing</MyCustomButton>
                        : <MyCustomButton disabled={disabled}
                                          className={"followButton"}
                                          onClick={() => {
                                              follow(id)
                                          }}
                        >Following</MyCustomButton>}
                    <div className={classes.usersInfo}>
                        <NavLink to={`/profile/posts/${id}`}>
                            <div className={classes.usersName}>{name}</div>
                        </NavLink>
                        <div>{status}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserItem;