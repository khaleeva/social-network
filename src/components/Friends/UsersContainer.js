
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/friends-reducer";
import React from "react";
import axios from "axios";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";



class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }



    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })


    }


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <CircularProgress />
                    </Box> : <Users currentPage={this.props.currentPage}
                                    totalUsersCount={this.props.totalUsersCount}
                                    pageSize={this.props.pageSize}
                                    onPageChanged={this.onPageChanged}
                                    users={this.props.users}
                                    follow={this.props.follow}
                                    unfollow={this.props.unfollow}
                    />
                }

            </>
        )


    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow : (userId) => {
//         dispatch(unfollowAC(userId))
//     },
//         setUsers : (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage : (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount : (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching : (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }//
// законнектили вместо мапдиспатчтупропс акшэнкриеторы и убрали из насваний АС

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersComponent);

export default UsersContainer;