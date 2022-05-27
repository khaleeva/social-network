
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




const ProfileContainer = ({profile, profileThunkCreator,id}) => {

    const {userId} = useParams();
    useEffect(() => {
    profileThunkCreator(userId)
    }, [userId, profileThunkCreator])


        return (
          <Profile  profile={profile}
                    id={id}

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
        {setUserProfile, profileThunkCreator}),
    withAuthRedirect
)(ProfileContainer);





