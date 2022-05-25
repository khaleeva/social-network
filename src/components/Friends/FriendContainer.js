import {connect} from "react-redux";
import Friends from "./Friends";
import {follow, toggleFollowingInProgress, unfollow} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isAuth: state.auth.isAuth,
        followingInProgress: state.usersPage.followingInProgress
    }
}




const FriendsContainer = connect(mapStateToProps, {follow, unfollow, toggleFollowingInProgress})(Friends);

export default FriendsContainer;