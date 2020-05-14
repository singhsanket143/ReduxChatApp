import React from "react";
import "./ChatWindow.css";
import store from "../store";
import Header from "./Header";
import Chats from "./Chats";
import _ from "lodash";

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsg = state.messages[activeUserId];
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsg)} />
        </div>
    )
}

export default ChatWindow;