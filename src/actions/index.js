import {SET_ACTIVE_USER_ID, REMOVE_USER} from "../Constants/action-types";

export const setActiveUserId = id => {
    return {
        type: SET_ACTIVE_USER_ID,
        payload: {
            id
        }
    }
}

export const removeUser = id => {
    return {
        type: REMOVE_USER,
        payload: {
            id
        }
    }
}