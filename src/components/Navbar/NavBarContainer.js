
import {connect} from "react-redux";
import Navbar from "./Navbar";


const NavBarContainer = ({id, profile}) =>{
    return <Navbar id={id} profile={profile} />


}

let mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        id: state.auth.id,
    }
)






export default connect(mapStateToProps)(NavBarContainer);

