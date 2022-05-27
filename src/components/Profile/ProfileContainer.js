
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, savePhoto, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




const ProfileContainer = ({profile, profileThunkCreator,id, savePhoto}) => {

    const {userId} = useParams();
    useEffect(() => {
    profileThunkCreator(userId)
    }, [userId, profileThunkCreator])


        return (
          <Profile  profile={profile}
                    id={id}
                    savePhoto={savePhoto}

          />
        )
}

let mapStateToProps = (state) => (
    {
       profile: state.profilePage.profile,
        id: state.auth.id
    }
)

export default compose(
    connect(mapStateToProps,
        {setUserProfile, profileThunkCreator, savePhoto}),
    withAuthRedirect
)(ProfileContainer);





