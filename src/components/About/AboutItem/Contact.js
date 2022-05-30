import React, {useState} from 'react';
import Divider from "@mui/material/Divider";
import EditBtn from "../../../MUI/EditBtn";
import classes from "./AboutItem.module.css"
import UserDataForm from "../../Forms/UserDataForm";
import SocialDataForm from "../../Forms/SocialDataForm";
import PersonalDataForm from "../../Forms/PersonalDataForm";


const Contact = ({profile, id}) => {

    return (
        <div className="contactInfo">
            <UserData profile={profile} id={id}/>
            <SocialData profile={profile} id={id}/>
            <PersonalData profile={profile} id={id}/>
        </div>
    )
};


const UserData = ({profile, id}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        // updateStatus(newStatus)
    }

    return (
        <>
            {editMode ?
                <>
                    <h3>Contact Information</h3>
                    <Divider sx={{borderColor: '#8c91b6', mb: 3}}/>
                    <UserDataForm profile={profile} id={id} deactivateEditMode={deactivateEditMode}
                                  email={'user@gmail.com'} phone={'(001) 001 001 001'} address={'Poland'}/>
                </>

                :
                <div className="contactInfoItem">
                    <ContactsBlock title={"Contact Information"} profile={profile} id={id}
                                   activateEditMode={activateEditMode}/>
                    <div className="subContact">
                        <ul>
                            <li><span>Email</span>:<span>user@gmail.com</span></li>
                            <li><span>Mobile</span>:<span>(001) 001 001 001</span></li>
                            <li><span>Address</span>:<span>Poland</span></li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

const SocialData = ({profile, id}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        // updateStatus(newStatus)
    }

    return (
        <>
            {editMode ? <>
                    <h3>Contact Information</h3>
                    <Divider sx={{borderColor: '#8c91b6', mb: 3}}/>
                    <SocialDataForm profile={profile} id={id} deactivateEditMode={deactivateEditMode}/>
                </>
                :
                <div className="contactInfoItem">
                    <ContactsBlock title={"Websites and Social Links"} profile={profile} id={id}
                                   activateEditMode={activateEditMode}/>
                    <div className="subContact">
                        <ul>
                            {Object.keys(profile.contacts).map(key => {
                                return <SocialContact key={key} contactTitle={key}
                                                      contactValue={profile.contacts[key]}/>
                            })}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}



const PersonalData = ({profile, id}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        // updateStatus(newStatus)
    }

    return (
        <>
            {editMode ? <>
                    <h3>Contact Information</h3>
                    <Divider sx={{borderColor: '#8c91b6', mb: 3}}/>
                    <PersonalDataForm profile={profile} id={id} deactivateEditMode={deactivateEditMode}/>
                </>
                :
                <div className="contactInfoItem">
                    <ContactsBlock title={"Basic Information"} profile={profile} id={id}
                                   activateEditMode={activateEditMode}/>
                    <div className="subContact">
                        <ul>
                            <li>Birth Date :</li>
                            <li>Birth Year :</li>
                            <li>Gender :</li>
                            <li>interested in :</li>
                            <li>language:</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}



const SocialContact = ({contactTitle, contactValue}) => {
    let modifyURL = (url) => {
        if (url === null) {
            return "no"
        }
        if (url.indexOf("https://") === -1) {
            return `https://${url}`
        } else return url
    }

    const value = modifyURL(contactValue)
    return <li>{contactTitle} : {value} </li>
}

const ContactsBlock = (props) => {

    return (
        <>
            <div className={classes.titleBlock}>
                <h3>{props.title}</h3>
                {props.id !== props.profile.userId ? null : <EditBtn onClick={props.activateEditMode}/>}
            </div>
            <Divider sx={{borderColor: '#8c91b6'}}/>
        </>
    )
}

export default Contact;