import {combineReducers} from "redux";
import user from "./users";
import contacts from "./contacts";
import activeUserID from "./activeUserIDs";

export default combineReducers({
    user,
    contacts,
    activeUserID
});