import React, {useEffect, useState} from 'react';


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
            {editMode ? <input
                    type={'text'}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={ status }/>

            : <div onDoubleClick={activateEditMode}> {props.status || "no status"} </div>}

        </>
    );
};

export default ProfileStatus;


