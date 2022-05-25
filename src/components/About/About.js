import React  from 'react';
import ProfileStatus from "../Profile/ProfileInfo/ProfileStatus";



const About = ({status, updateStatus}) => {



    return (

            <ProfileStatus status={status}
                           updateStatus={updateStatus}/>

    );
};

export default About;

