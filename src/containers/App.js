import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import './App.css';
import store from "../store";
import _ from "lodash";
function App() {
    const {contacts, user, activeUserID} = store.getState();
    console.log(_.values(contacts));
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)}/>
            <Main user={user} activeUserId={activeUserID} />
        </div>
    );
}

export default App;
