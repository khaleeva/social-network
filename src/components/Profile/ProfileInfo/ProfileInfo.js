import React from 'react';
import classes from './ProfileInfo.module.css'
import Avatar from "@mui/material/Avatar";




const ProfileInfo = () => {
    const icons = [
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/08.png",
            alt:'facebook',
            href:'#',
        },
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/09.png",
            alt:'twitter',
            href:'#',
        },
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/10.png",
            alt:'instagram',
            href:'#',
        },
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/11.png",
            alt:'google',
            href:'#',
        },
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/12.png",
            alt:'youtube',
            href:'#',
        },
        {   src: "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/13.png",
            alt:'linkendn',
            href:'#',
        }

    ]
    return (

        <div className={classes.imgContainer}>
            <div className={classes.background}></div>
            <div className={classes.profileInfo}>
                <ul className={classes.socialList}>
                    {icons.map((icon) => {
                        return (
                            <li>
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
                    <div className={classes.infoItem}>
                        <p>Posts</p>
                        <p>90</p>
                    </div>
                    <div className={classes.infoItem}>
                        <p>Followers</p>
                        <p>190</p>
                    </div>
                    <div className={classes.infoItem}>
                        <p>Following</p>
                        <p>120</p>
                    </div>
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