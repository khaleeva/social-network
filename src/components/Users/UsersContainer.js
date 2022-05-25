import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsersThunkCreator, toggleFollowingInProgress, unfollow} from "../../redux/users-reducer";
import React, {useEffect} from "react";
import classes from "../Users/Users.module.css";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../../MUI/Preloader";


const UsersContainer = ({
                            users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress,
                            getUsersThunkCreator, toggleFollowingInProgress, follow, unfollow
                        }) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize);
    }, [pageSize, currentPage, getUsersThunkCreator])

    const onPageChanged = (page) => {
        getUsersThunkCreator(page, pageSize);
    }

    return (
        <main className={classes.main}>
            <div className={classes.mainUsersContainer}>
                {isFetching ?
                    <Preloader/>
                    : <Users currentPage={currentPage}
                              totalUsersCount={totalUsersCount}
                              pageSize={pageSize}
                              onPageChanged={onPageChanged}
                              users={users}
                              follow={follow}
                              unfollow={unfollow}
                              followingInProgress={followingInProgress}
                              toggleFollowingInProgress={toggleFollowingInProgress}
                    />
                }
            </div>
        </main>
    )

};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, toggleFollowingInProgress,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer);

















