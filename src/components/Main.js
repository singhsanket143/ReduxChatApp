import React from "react";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";
import "./Main.css";

const Main = ({user, activeUserId}) => {
    const renderedData = () => {
        console.log("hit", activeUserId)
        if(!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />
        } else {
            return <ChatWindow activeUserId={activeUserId} />
        }
    }
    return <main className="Main">{renderedData()}</main>;
}

export default Main;