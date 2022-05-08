
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, toggleFollowingInProgress,
    unfollow, getUsersThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "../Users/Users.module.css";




class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }



    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    }


    render() {
        return (
            <main className={classes.main}>
                <div className={classes.mainUsersContainer}>
                {this.props.isFetching ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'20px'}}>
                        <CircularProgress />
                    </Box> : <Users currentPage={this.props.currentPage}
                                    totalUsersCount={this.props.totalUsersCount}
                                     pageSize={this.props.pageSize}
                                    onPageChanged={this.onPageChanged}
                                    users={this.props.users}
                                    follow={this.props.follow}
                                    unfollow={this.props.unfollow}
                                    followingInProgress={this.props.followingInProgress}
                                    toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                    />
                }
                </div>
            </main>
        )


    }
}

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


const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, toggleFollowingInProgress, getUsersThunkCreator,
})(UsersComponent);

export default UsersContainer;