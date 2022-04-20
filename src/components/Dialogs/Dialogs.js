import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import {sendMessageActionCreator, updateNewDialogsTextActionCreator} from "../../redux/message-reducer";

let newMessage = React.createRef();


const Dialogs = ({dialogs, messages, newMessageText, dispatch}) => {
    let addMessageDialogs = () => {
        dispatch(sendMessageActionCreator());
    }

    let onDialogsChange = () =>{
        let text = newMessage.current.value;
        dispatch(updateNewDialogsTextActionCreator(text));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>)}
            </div>
            <div className={classes.messagesItems}>
                {messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)}
                <div className={classes.textarea}>
                    <textarea name="" id="" ref={ newMessage } value={newMessageText} onChange={onDialogsChange}/>
                    <button className={classes.sendButton} onClick={ addMessageDialogs }>Send</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;