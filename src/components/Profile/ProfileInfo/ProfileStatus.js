import React, {useEffect, useState} from 'react';
import StatusForm from "../../Forms/StatusForm";
import classes from "./ProfileInfo.module.css";
import EditBtn from "../../../MUI/EditBtn";





const ProfileStatus = ({status, updateStatus, profile, id}) => {



    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(status);


    useEffect(() => {
        setNewStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(newStatus)
    }

    const onStatusChange = (e) => {
        setNewStatus(e.currentTarget.value)
    }





    return (

            <div className={classes.status}>
                {editMode ?
                    <StatusForm
                        type={'text'}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        value={newStatus}

                    /> : <div className={classes.statusColor}> {status || "no status"} </div>}
                    {profile.userId !== id ? null : <EditBtn onClick={activateEditMode}/>}
            </div>

    );
};

export default ProfileStatus;


