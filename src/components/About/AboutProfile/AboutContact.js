import React, {useState} from 'react';
import classes from "./AboutProfile.module.css"
import Divider from "@mui/material/Divider";
import UserDataForm from "../../Forms/UserDataForm";
import EditBtn from "../../../MUI/EditBtn";
import CloseBtn from "../../../MUI/CloseBtn";


const AboutContact = ({profile, id, saveData}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);

    }


    return (
        <div className={classes.contactInfo}>
            {editMode ?
                <div>
                    <div className={classes.titleBlock}>
                    <h3>Edit Profile Information</h3>
                    <CloseBtn onClick={deactivateEditMode}/>
                    </div>
                    <Divider sx={{borderColor: '#8c91b6', mb: 3}}/>
                    <UserDataForm profile={profile} id={id} saveData={saveData} deactivateEditMode={deactivateEditMode}/>
                </div>
                :
                <>
                    <UserData profile={profile} id={id} activateEditMode={activateEditMode}/>
                    <SocialData profile={profile} id={id} />
                    <PersonalData profile={profile} id={id} />
                </>

                }
        </div>
    );




};

const UserData = ({profile, id, activateEditMode}) => {
    return (
        <div className="contactInfoItem">
            <div className={classes.titleBlock}>
                <h3>Contact Information</h3>
                {id === profile.userId ? <EditBtn onClick={activateEditMode}/> : null}
            </div>
                <Divider sx={{borderColor: '#8c91b6'}}/>
            <div className={classes.subContact}>
                <div className={classes.subContactItem}>
                    <div>Name</div>
                    <div>{profile.fullName}</div>
                </div>
                <div className={classes.subContactItem}>
                    <div>Looking for a Job</div>
                    <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>
                </div>
                <div className={classes.subContactItem}>
                    <div>My professional skills</div>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}
const SocialData = ({profile}) => {

    return (

                <div className="contactInfoItem">
                    <h3>Websites and Social Links</h3>
                    <Divider sx={{borderColor: '#8c91b6'}}/>
                    <div className={classes.subContact}>
                            {Object.keys(profile.contacts).map(key => {
                                return <SocialContact key={key} contactTitle={key}
                                                      contactValue={profile.contacts[key]}/>
                            })}
                    </div>
                </div>

    )
}
const PersonalData = ({profile}) => {
    return (
                <div className="contactInfoItem">
                    <h3>Basic Information</h3>
                    <Divider sx={{borderColor: '#8c91b6'}}/>
                    <div className={classes.subContact}>
                        <div className={classes.subContactItem}>
                            <div>About me</div>
                            <div>{profile.aboutMe}</div>
                        </div>
                    </div>
                </div>
    )
}


const SocialContact = ({contactTitle, contactValue}) => {
    let modifyURL = (url) => {
        if (url === null) {
            return "not specified"
        }
        if (url.indexOf("https://") === -1) {
            return `https://${url}`
        } else return url
    }

    const value = modifyURL(contactValue)
    return <div className={classes.subContactItem}><div>{contactTitle}</div> <div>{value}</div> </div>
}

export default AboutContact;