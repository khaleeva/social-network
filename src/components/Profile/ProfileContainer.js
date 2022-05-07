
import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)


// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//
//         let userId = this.props.router.params.userId;
//
//         if(!userId) {
//             userId = 2
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             })
//     }
//
//     //
//
//
//     render() {
//
//
//         return (
//           <Profile {...this.props} profile={this.props.profile}/>
//         )
//     }
// }

const ProfileContainer = (props) => {
    const {userId} = useParams();


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            })

    })


        return (
          <Profile {...props} profile={props.profile}/>
        )

}


let mapStateToProps = (state) => (
    {
       profile: state.profilePage.profile
    }
)


// in case use class component
// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }

export default  connect(mapStateToProps, {setUserProfile})(ProfileContainer);

