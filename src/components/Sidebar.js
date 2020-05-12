import React from "react";
import "./Sidebar.css";
import User from "../containers/User";

const Sidebar = ({contacts}) => {
    console.log("c",contacts);
    return (
        <aside className="Sidebar">
            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
        </aside>
    )
}

export default Sidebar;