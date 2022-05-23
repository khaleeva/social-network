import React, {useEffect, useState} from 'react';
import StatusForm from "../../Forms/StatusForm";
import classes from "./ProfileInfo.module.css";


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode ?

                <StatusForm
                    type={'text'}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={ status }

                />

            : <div onDoubleClick={activateEditMode} className={classes.statusColor}> {props.status || "no status"} </div>}

        </>
    );
};

export default ProfileStatus;


