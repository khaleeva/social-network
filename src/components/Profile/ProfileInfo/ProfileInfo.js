import React from 'react';
import classes from './ProfileInfo.module.css'
import Avatar from "@mui/material/Avatar";


const ProfileInfo = () => {
    const icons = [
        {
            id: 1,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/08.png",
            alt:'facebook',
            href:'#',
        },
        {   id: 2,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/09.png",
            alt:'twitter',
            href:'#',
        },
        {   id: 3,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/10.png",
            alt:'instagram',
            href:'#',
        },
        {   id: 4,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/11.png",
            alt:'google',
            href:'#',
        },
        {   id: 5,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/12.png",
            alt:'youtube',
            href:'#',
        },
        {   id: 6,
            src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/13.png",
            alt:'linkendn',
            href:'#',
        }

    ]
    const profileinfo =[
        {
            id:1,
            title: "Posts",
            count: 90,
        },
        {
            id:2,
            title: "Followers",
            count:1290,
        },
        {
            id:3,
            title: "Following",
            count: 40,
        },

    ]
    return (

        <div className={classes.imgContainer}>
            <div className={classes.background}></div>
            <div className={classes.profileInfo}>
                <ul className={classes.socialList}>
                    {icons.map((icon) => {
                        return (
                            <li key={icon.id}>
                                <a href={icon.href}>
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className={classes.info}>

                        {profileinfo.map((info) => {
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
                    src={"http://zvezdi.ru/uploads/posts/2016-06/1465216095_foks1.jpg"}
                    sx={{width: 120, height: 120}}
                />
                <p>Megan Fox</p>
            </div>
        </div>


    );
};

export default ProfileInfo;