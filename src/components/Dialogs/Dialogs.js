import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";




const Dialogs = ({dialogs, messages}) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>)}
            </div>
            <div className={classes.messagesItems}>
                {messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;