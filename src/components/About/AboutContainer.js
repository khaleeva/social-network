
import {connect} from "react-redux";
import About from "./About";
import {getStatus, updateStatus} from "../../redux/profile-reducer";
import {useEffect} from "react";


const AboutContainer = ({profile, status, updateStatus, getStatus}) =>{

    useEffect(() => {
        getStatus(profile.userId)
    })

    return (
        <About status={status}
               updateStatus={updateStatus}
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

