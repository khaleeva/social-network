
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {

        id: state.auth.id
    }
}




const NavBarContainer = connect(mapStateToProps)(Navbar);

export default NavBarContainer;