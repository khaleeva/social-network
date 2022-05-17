
import {connect} from "react-redux";
import About from "./About";
import {getStatus, updateStatus} from "../../redux/profile-reducer";
import {useEffect} from "react";


const AboutContainer = (props) =>{

    useEffect(() => {
        props.getStatus(props.profile.userId)
    })

    return (
        <About status={props.status}
               updateStatus={props.updateStatus}
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

