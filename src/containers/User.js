import "./User.css";
import React from "react"
import {setActiveUserId} from "../actions";
import store from "../store";
import {removeUser} from "../actions";

const User = ({user}) => {
    const { name, profile_pic, status } = user;
    return (
        <div className="User" onClick={() => handleClickUser(user)}>
            <p className="User__closeIcon" onClick={(e) => handleClickClose(e, user)}> X </p>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    )
}

function handleClickUser({user_id}) {
    console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
    console.log(store.getState());
}

function handleClickClose(e, {user_id}) {
    e.stopPropagation();
    store.dispatch(removeUser(user_id));
}

export default User;