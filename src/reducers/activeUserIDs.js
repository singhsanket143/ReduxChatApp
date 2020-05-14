import {SET_ACTIVE_USER_ID} from "../Constants/action-types";

export default (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload.id;

        default:
            return state;
    }
}