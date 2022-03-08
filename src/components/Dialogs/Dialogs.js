import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


let dialogs= [
    {id: 1, name: "Dima",},
    {id: 2, name: "Sveta",},
    {id: 3, name: "Sasha",},
    {id: 4, name: "Ira",},
    {id: 5, name: "Denis",}
]

let messages= [
    {id: 1, message: "Hi",},
    {id: 2, message: "Hello",},
    {id: 3, message: "Hi are you?",},
    {id: 4, message: "fine",},
    {id: 5, message: "Go",}
]

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)}
            </div>
            <div className={classes.messagesItems}>
                {messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;