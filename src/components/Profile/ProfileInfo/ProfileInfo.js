import React from 'react';
import classes from './ProfileInfo.module.css'
import Avatar from "@mui/material/Avatar";
import UploadBtn from "../../../MUI/UploadBtn";
import ProfileStatus from "./ProfileStatus";



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


    // let modifyURL = (url) => {
    //     if (url === null) {
    //         return null
    //     }
    //     if (url.indexOf("https://") === -1) {
    //         return `https://${url}`
    //     } else return url
    // }
    
    return  (
        <div className={classes.imgContainer}>
            <div className={classes.background}>
                <div className={classes.changeAvatar}>
                    { id !== profile.userId ? null :
                    <UploadBtn savePhoto={savePhoto} profile={profile}/>}
                </div>
            </div>
            <div className={classes.profileInfo}>

                <ProfileStatus status={status}
                               updateStatus={updateStatus}
                               profile={profile}
                               id={id}
                />

                {/*<ul className={classes.socialList}>*/}
                {/*    <li><a href={modifyURL(profile.contacts.facebook)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/08.png"*/}
                {/*        alt="facebook"/></a></li>*/}
                {/*    <li><a href={modifyURL(profile.contacts.twitter)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/09.png"*/}
                {/*        alt="twitter"/></a></li>*/}
                {/*    <li><a href={modifyURL(profile.contacts.instagram)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/10.png"*/}
                {/*        alt="instagram"/></a></li>*/}
                {/*    <li><a href={modifyURL(profile.contacts.youtube)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/11.png"*/}
                {/*        alt=""/></a></li>*/}
                {/*    <li><a href={modifyURL(profile.contacts.youtube)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/12.png"*/}
                {/*        alt=""/></a></li>*/}
                {/*    <li><a href={modifyURL(profile.contacts.youtube)} rel="noreferrer" target="_blank"><img*/}
                {/*        src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/13.png"*/}
                {/*        alt=""/></a></li>*/}
                {/*</ul>*/}
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