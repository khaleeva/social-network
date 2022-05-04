import React from 'react';
import classes from './Users.module.css'
import Avatar from "../../MUI/Avatar";
import {Pagination} from "@mui/material";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages =[];
    //  for (let i = 1; i<= pagesCount; i++){
    //      pages.push(i)
    //      if( i >= 20) break;
    //  }



    return (
        <>
            <div className={classes.pagesContainer}>

            {/*    <div className={classes.pagesContainer}>*/}
            {/*        {pages.map((page) => {*/}
            {/*            return <span  className={props.currentPage === page ? classes.selected : ""}*/}
            {/*                          onClick={(e) => {props.onPageChanged(page)}}*/}
            {/*            >{page}</span>*/}
            {/*        })}*/}
            {/*    </div>*/}

                    <Pagination
                        count={pagesCount}
                        size="small"
                        page={props.currentPage}
                        onChange={(_,num) => props.onPageChanged(num)}
                    />
            </div>
            <div className={classes.friendsContainer}>
                {props.users.map((user) =>
                    <div key={user.id} className={classes.friendsItem}>
                        <div className={classes.friendsBac}>
                            <img
                                src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg'
                                alt=""/>
                            <Avatar className={classes.friendsPhoto} key={user.id}
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
                        </div>
                        <div className={classes.friendsCard}>
                            {user.followed ?
                                <button className={classes.followButton} onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollowing</button>
                                : <button className={classes.followButton} onClick={() => {
                                    props.follow(user.id)
                                }}>Following</button>}
                            <div className={classes.friendsInfo}>
                                <div className={classes.friendsName}>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    </div>)}
            </div>

        </>

    )

}


export default Users;


