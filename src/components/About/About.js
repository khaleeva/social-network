import React  from 'react';
import ProfileStatus from "../Profile/ProfileInfo/ProfileStatus";



const About = (props) => {



    return (

            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}/>

    );
};

export default About;

