
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";




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
       profile: state.profilePage.profile
    }
)



export default  connect(mapStateToProps, {setUserProfile, profileThunkCreator})(ProfileContainer);

