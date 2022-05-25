import React from 'react';
import classes from "../Users/Users.module.css";
import UserItem from "../Users/UserItem";


const Friends = ({users, follow, unfollow}) => {
    return (
            <div className={classes.usersContainer}>
                {users.map((user) => <>
                    {user.followed ?
                        <UserItem
                            key={user.id}
                            id={user.id}
                            src={user.photos.small}
                            followed={user.followed}
                            unfollow={unfollow}
                            follow={follow}
                            name={user.name}
                            status={user.status}
                        />

                        : null}

                </> )}
            </div>
    );
};

export default Friends;