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


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name={"Dima"} id={"1"}/>
                <Dialog name={"Sveta"} id={"2"}/>
                <Dialog name={"Sasha"} id={"3"}/>
                <Dialog name={"Victor"} id={"4"}/>
                <Dialog name={"Denis"} id={"5"}/>
                <Dialog name={"Karina"} id={"6"}/>

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