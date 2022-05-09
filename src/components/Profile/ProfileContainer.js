
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = ({profile, profileThunkCreator}) => {
    const {userId} = useParams();
    useEffect(() => {
    profileThunkCreator(userId)
    })
        return (
          <Profile  profile={profile}/>
        )
}

let mapStateToProps = (state) => (
    {
       profile: state.profilePage.profile,
    }
)

export default compose(
    connect(mapStateToProps,
        {setUserProfile, profileThunkCreator}),
    withAuthRedirect
)(ProfileContainer);





