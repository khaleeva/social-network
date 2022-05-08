
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, toggleFollowingInProgress,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "../Users/Users.module.css";
import {usersAPI} from "../../API/API";



class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }



    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })


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
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersComponent);

export default UsersContainer;