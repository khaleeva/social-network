
import {sendMessageActionCreator, updateNewDialogsTextActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = ({store}) => {
//
//     let state = store.getState();
//     let addMessageDialogs = () => {
//         store.dispatch(sendMessageActionCreator());
//     }
//
//     let dialogsChange = (text) =>{
//
//         store.dispatch(updateNewDialogsTextActionCreator(text));
//     }
//     return (
//         <Dialogs  messages={state.messagePage.messages}
//                   dialogs={state.messagePage.dialogs}
//                   newMessageText={state.messagePage.newMessageText}
//                   addMessageDialogs = { addMessageDialogs }
//                   dialogsChange = { dialogsChange }
//         />
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText:state.messagePage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageDialogs : () => {dispatch(sendMessageActionCreator())},
        dialogsChange : (text) => {dispatch(updateNewDialogsTextActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;