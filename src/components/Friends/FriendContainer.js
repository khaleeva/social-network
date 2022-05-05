import {connect} from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}




const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;