import React from 'react';
import classes from './ProfileInfo.module.css'
import Avatar from "@mui/material/Avatar";
import UploadBtn from "../../../MUI/UploadBtn";
import ProfileStatus from "./ProfileStatus";
import BasicModal from "../../../MUI/BasicModal";



const ProfileInfo = ({profile, id, savePhoto, posts, status, updateStatus}) => {

    const profileInfo = [
        {
            id: 1,
            title: "Posts",
            count: posts.length
        },
        {
            id: 2,
            title: "Followers",
            count: 1290,
        },
        {
            id: 3,
            title: "Following",
            count: 40,
        },

    ]



    
    return  (
        <div className={classes.imgContainer}>
            <div className={classes.background}>
                <div className={classes.changeProfile}>
                    { id !== profile.userId ? null :
                        <div className={classes.profileBtns}>
                            <UploadBtn savePhoto={savePhoto} profile={profile}/>
                            <BasicModal/>
                        </div>
                    }
                </div>
            </div>
            <div className={classes.profileInfo}>

                <ProfileStatus status={status}
                               updateStatus={updateStatus}
                               profile={profile}
                               id={id}
                />


                <div className={classes.info}>
                    {profileInfo.map((info) => {
                        return (
                            <div className={classes.infoItem} key={info.id}>
                                <p>{info.title}</p>
                                <p>{info.count}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.avatar}>
                <Avatar
                    src={profile.photos.large}
                    sx={{width: 120, height: 120}}
                />
                <p>{profile.fullName}</p>
            </div>
        </div>
    )

};

export default ProfileInfo;