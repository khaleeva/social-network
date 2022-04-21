import React from 'react';
import {sendMessageActionCreator, updateNewDialogsTextActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {

    let state = store.getState();
    let addMessageDialogs = () => {
        store.dispatch(sendMessageActionCreator());
    }

    let dialogsChange = (text) =>{

        store.dispatch(updateNewDialogsTextActionCreator(text));
    }
    return (
        <Dialogs  messages={state.messagePage.messages}
                  dialogs={state.messagePage.dialogs}
                  newMessageText={state.messagePage.newMessageText}
                  addMessageDialogs = { addMessageDialogs }
                  dialogsChange = { dialogsChange }
        />
    );
};

export default DialogsContainer;