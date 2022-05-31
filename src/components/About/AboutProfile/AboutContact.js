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
            <div className="subContact">
                <ul>
                    <li><span>Name</span>: <span>{profile.fullName}</span></li>
                    <li><span>Looking for a Job</span>: <span>{profile.lookingForAJob}</span></li>
                    <li><span>My professional skills</span>: <span>{profile.lookingForAJobDescription}</span></li>
                </ul>
            </div>
        </div>
    )
}
const SocialData = ({profile}) => {

    return (

                <div className="contactInfoItem">
                    <h3>Websites and Social Links</h3>
                    <Divider sx={{borderColor: '#8c91b6'}}/>
                    <div className="subContact">
                        <ul>
                            {Object.keys(profile.contacts).map(key => {
                                return <SocialContact key={key} contactTitle={key}
                                                      contactValue={profile.contacts[key]}/>
                            })}
                        </ul>
                    </div>
                </div>

    )
}
const PersonalData = ({profile}) => {
    return (
                <div className="contactInfoItem">
                    <h3>Basic Information</h3>
                    <Divider sx={{borderColor: '#8c91b6'}}/>
                    <div className="subContact">
                        <ul>
                            <li><span>About me</span>: <span>{profile.aboutMe}</span></li>
                            {/*<li>Gender :</li>*/}
                            {/*<li>Interested in :</li>*/}
                            {/*<li>Language:</li>*/}
                        </ul>
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
    return <li><span style={{color :'#50b5ff'}}>{contactTitle}:</span> {value} </li>
}

export default AboutContact;