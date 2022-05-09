
import {sendMessageActionCreator, updateNewDialogsTextActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageText:state.messagePage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageDialogs : () => {dispatch(sendMessageActionCreator())},
        dialogsChange : (text) => {dispatch(updateNewDialogsTextActionCreator(text))}
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);