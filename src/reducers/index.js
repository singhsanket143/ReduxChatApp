import {combineReducers} from "redux";
import user from "./users";
import contacts from "./contacts";
import activeUserID from "./activeUserIDs";
import messages from "./messages";

export default combineReducers({
    user,
    contacts,
    activeUserID,
    messages
});