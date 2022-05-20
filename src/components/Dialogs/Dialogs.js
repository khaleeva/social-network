import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import NewMessageForm from "../Forms/NewMessageForm";


const Dialogs = ({dialogs, messages,  addMessageDialogs}) => {

    return (
        <main className={classes.main}>
            <div className={classes.mainDialogsContainer}>
                <div className={classes.dialogsItems}>
                    {dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>)}
                </div>
                <div className={classes.messagesItems}>
                    {messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)}
                    <NewMessageForm addMessageDialogs={addMessageDialogs}/>
                </div>
            </div>
        </main>
    );
};

export default Dialogs;