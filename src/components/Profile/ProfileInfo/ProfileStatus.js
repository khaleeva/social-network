import React, {useEffect, useState} from 'react';
import StatusForm from "../../Forms/StatusForm";
import classes from "./ProfileInfo.module.css";


const ProfileStatus = ({status, updateStatus}) => {

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
        <>
            {editMode ?

                <StatusForm
                    type={'text'}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={newStatus}

                />

                : <div onDoubleClick={activateEditMode} className={classes.statusColor}> {status || "no status"} </div>}

        </>
    );
};

export default ProfileStatus;


