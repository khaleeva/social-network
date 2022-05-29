
import {connect} from "react-redux";
import About from "./About";
import {getStatus, updateStatus} from "../../redux/profile-reducer";



const AboutContainer = () =>{



    return (
        <About
        />
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}




export default connect(mapStateToProps, {getStatus, updateStatus})(AboutContainer);

