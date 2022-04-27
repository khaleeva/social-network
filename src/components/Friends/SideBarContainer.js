
import {connect} from "react-redux";
import SideBar from "./SideBar";


let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
}




const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;