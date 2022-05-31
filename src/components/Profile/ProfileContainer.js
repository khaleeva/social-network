
import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileThunkCreator, savePhoto, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




const ProfileContainer = ({profile, profileThunkCreator,id, savePhoto, posts, status, updateStatus, getStatus}) => {

    const {userId} = useParams();
    useEffect(() => {
    profileThunkCreator(userId)
    }, [userId, profileThunkCreator])


    useEffect(() => {
        getStatus(userId)
    })


        return (
          <Profile  profile={profile}
                    id={id}
                    savePhoto={savePhoto}
                    posts ={posts}
                    status={status}
                    updateStatus={updateStatus}

          />
        )
}

let mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        id: state.auth.id,
        posts: state.profilePage.posts,
        status: state.profilePage.status,


    }
)

export default compose(
    connect(mapStateToProps,
        {setUserProfile, profileThunkCreator, savePhoto, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);





