import React, {useState} from 'react';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

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
            {editMode ? <input
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}/>

            : <div onDoubleClick={activateEditMode}>{status || "add status"}</div>}

        </>
    );
};

export default ProfileStatus;


