import React from 'react';
import classes from "../Dialogs/Dialogs.module.css";

let newMessage = React.createRef();


const NewMessageForm = ({newMessageText, onDialogsChange, onAddMessageDialogs}) => {

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" ref={newMessage} value={newMessageText} onChange={onDialogsChange}/>
            <button className={classes.sendButton} onClick={onAddMessageDialogs}>Send</button>
        </div>

    );
};

export default NewMessageForm;