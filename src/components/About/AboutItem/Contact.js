import React from 'react';
import Divider from "@mui/material/Divider";
import EditBtn from "../../../MUI/EditBtn";
import classes from "./AboutItem.module.css"


const Contact = ({profile, id}) => {

    let modifyURL = (url) => {
        if (url === null) {
            return "no"
        }
        if (url.indexOf("https://") === -1) {
            return `https://${url}`
        } else return url
    }

    const SocialContact = ({contactTitle, contactValue}) => {
        const value = modifyURL(contactValue)
        return  <li>{contactTitle} : {value} </li>
    }

    const ContactsBlock = (props) => {
        return (
            <>
                <div className={classes.titleBlock}>
                    <h3>{props.title}</h3>
                    {props.id !== props.profile.userId ? null : <EditBtn/>}
                </div>
                <Divider sx={{borderColor: '#8c91b6'}}/>
            </>
        )
    }

    return (
        <div className="contactInfo">
            <div className="contactInfoItem">
                <ContactsBlock title={"Contact Information"} profile={profile} id={id}/>
                <div className="subContact">
                    <ul>
                        <li><span>Email</span>:<span>user@gmail.com</span></li>
                        <li><span>Mobile</span>:<span>(001) 001 001 001</span></li>
                        <li><span>Address</span>:<span>Poland</span></li>
                    </ul>
                </div>
            </div>
            <div className="contactInfoItem">
                <ContactsBlock title={"Websites and Social Links"} profile={profile} id={id}/>
                <div className="subContact">
                    <ul>
                    {Object.keys(profile.contacts).map(key => {
                        return <SocialContact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                    </ul>
                </div>
            </div>
            <div className="contactInfoItem">
                <ContactsBlock title={"Basic Information"} profile={profile} id={id}/>
                <div className="subContact">
                    <ul>
                        <li>Birth Date : </li>
                        <li>Birth Year : </li>
                        <li>Gender : </li>
                        <li>interested in : </li>
                        <li>language: </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};




export default Contact;