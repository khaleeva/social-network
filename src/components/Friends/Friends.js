import React from 'react';
import classes from './Friends.module.css'
import Avatar from "@mui/material/Avatar";

const Friends = ({users, follow, unfollow, setUsers}) => {



    return (
        <div className={classes.friendsContainer}>
            {users.map((user) =>
                <div key={user.id} className={classes.friendsItem}>
                    <div className={classes.friendsBac}>
                        <img src={user.imgBack} alt=""/>
                        <Avatar className={classes.friendsPhoto} key={user.id}
                                src={user.img}
                                sx={
                                    {   width: 100,
                                        height: 100,
                                        position: "absolute",
                                        left: 30,
                                        top: 80}}
                        />
                    </div>
                    <div className={classes.friendsCard}>
                        {user.followed ?
                            <button className={classes.followButton} onClick={() => {unfollow(user.id)}}>Unfollow</button>
                            : <button className={classes.followButton} onClick={() => {follow(user.id)}}>Follow +</button>}

                        <div className={classes.friendsInfo}>
                            <div className={classes.friendsName}>{user.fullName} ({user.city})</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Friends;