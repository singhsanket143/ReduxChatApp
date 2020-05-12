import React from "react";
import "./ChatWindow.css";

const ChatWindow = ({activeUserId}) => {
    return (
        <div className="ChatWindow">Conversation For User Id: {activeUserId}</div>
    )
}

export default ChatWindow;