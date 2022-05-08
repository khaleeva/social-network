import React from 'react';
import classes from './Users.module.css'
import Avatar from "../../MUI/Avatar";
import {Pagination} from "@mui/material";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../API/API";

const Users = (props) => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    return (
        <>
            <div className={classes.pagesContainer}>

                    <Pagination
                        count={pagesCount}
                        size="small"
                        page={props.currentPage}
                        onChange={(_,num) => props.onPageChanged(num)}
                    />
            </div>
            <div className={classes.usersContainer}>
                {props.users.map((user) =>
                    <div key={user.id} className={classes.usersItem}>
                        <div className={classes.usersBac}>
                            <img
                                src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg'
                                alt=""/>
                            <NavLink to={`/profile/about/${user.id}`}>
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
                                <button className={classes.followButton} onClick={() => {followAPI.getUnfollowUser(user.id)
                                    .then(data => {
                                        if(data.resultCode === 0){
                                            props.unfollow(user.id)
                                        }
                                    })
                                }}>Unfollowing</button>


                                : <button className={classes.followButton} onClick={() => {followAPI.getFollowUser(user.id)
                                        .then(data => {
                                            if(data.resultCode === 0){
                                                props.follow(user.id)
                                            }
                                        })
                                }}>Following</button>}

                            <div className={classes.usersInfo}>
                                <NavLink to={`/profile/about/${user.id}`}>
                                    <div className={classes.usersName}>{user.name}</div>
                                </NavLink>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>

    )

}


export default Users;


