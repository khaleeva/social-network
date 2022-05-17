import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";



let newMessage = React.createRef();

const Dialogs = ({dialogs, messages, newMessageText, addMessageDialogs, dialogsChange}) => {
    let onAddMessageDialogs = () => {
        addMessageDialogs();
    }

    let onDialogsChange = () => {
        let text = newMessage.current.value;
        dialogsChange(text);
    }

    return (
        <main className={classes.main}>
            <div className={classes.mainDialogsContainer}>
                <div className={classes.dialogsItems}>
                    {dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>)}
                </div>
                <div className={classes.messagesItems}>
                    {messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)}
                    <div className={classes.textarea}>
                        <textarea name="" id="" ref={newMessage} value={newMessageText} onChange={onDialogsChange}/>
                        <button className={classes.sendButton} onClick={onAddMessageDialogs}>Send</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dialogs;