
import {connect} from "react-redux";
import About from "./About";




const AboutContainer = ({profile}) =>{



    return (
        <About profile={profile}/>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}




export default connect(mapStateToProps)(AboutContainer);

