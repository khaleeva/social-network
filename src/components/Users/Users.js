import React from 'react';
import classes from './Users.module.css'
import {Pagination} from "@mui/material";
import UserItem from "./UserItem";

const Users = ({users, totalUsersCount, pageSize, currentPage, onPageChanged,
    followingInProgress, follow, unfollow}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    return (
        <>
            <div className={classes.pagesContainer}>

                    <Pagination
                        count={pagesCount}
                        size="small"
                        page={currentPage}
                        onChange={(_,num) => onPageChanged(num)}
                    />
            </div>
            <div className={classes.usersContainer}>
                {users.map((user) =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        src={user.photos.small}
                        followed={user.followed}
                        unfollow={unfollow}
                        follow={follow}
                        name={user.name}
                        status={user.status}
                        disabled = {followingInProgress.some(userId => userId === user.id)}
                    />)}
            </div>
        </>

    )

}


export default Users;


