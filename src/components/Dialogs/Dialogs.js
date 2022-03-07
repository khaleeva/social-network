import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


let dialogsData = [
    {
        id: 1,
        name: "Dima",
    },
    {
        id: 2,
        name: "Sveta",
    },
    {
        id: 3,
        name: "Sasha",
    },
    {
        id: 4,
        name: "Ira",
    },
    {
        id: 5,
        name: "Denis",
    }
]



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((dialog) => {
                    return (
                        <Dialog name={dialog.name} id={dialog.id}/>
                    )
                })
                }
            </div>
            <div className={classes.messagesItems}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"wow!"}/>
            </div>
        </div>
    );
};

export default Dialogs;